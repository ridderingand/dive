import { useEffect, useRef, useSyncExternalStore } from "react";

type EngineState = { playing: boolean; rate: number; muted: boolean; ready: boolean; duration: number };

const DRIFT_TOLERANCE_S = 0.09;

/** One clock for every video on screen. The master plays; followers are nudged back whenever they drift. */
export class PlayerEngine {
	private videos = new Map<string, HTMLVideoElement>();
	private timeMaps = new Map<string, (t: number) => number | null>();
	private masterId: string | null = null;
	private frameListeners = new Set<(t: number) => void>();
	private stateListeners = new Set<() => void>();
	private raf = 0;
	private virtualTime = 0;
	state: EngineState = { playing: false, rate: 1, muted: false, ready: false, duration: 0 };

	constructor(
		public fps: number,
		fallbackDuration: number,
	) {
		this.state = { ...this.state, duration: fallbackDuration };
	}

	get time() {
		const master = this.master;
		return master ? master.currentTime : this.virtualTime;
	}

	private get master() {
		return this.masterId ? (this.videos.get(this.masterId) ?? null) : null;
	}

	private setState(patch: Partial<EngineState>) {
		this.state = { ...this.state, ...patch };
		for (const listener of this.stateListeners) listener();
	}

	/** A follower's map turns clip time into its own time, or null to hold where it is. */
	register(id: string, video: HTMLVideoElement, isMaster: boolean, timeMap?: (t: number) => number | null) {
		this.videos.set(id, video);
		if (timeMap) this.timeMaps.set(id, timeMap);
		let detach = () => {};
		video.playbackRate = this.state.rate;
		if (isMaster) {
			const carried = this.time;
			const wasPlaying = this.state.playing;
			this.master?.pause();
			this.masterId = id;
			video.muted = this.state.muted;
			const onReady = () => {
				if (Number.isFinite(video.duration)) this.setState({ ready: true, duration: video.duration });
				if (Math.abs(video.currentTime - carried) > 0.02) video.currentTime = Math.min(carried, video.duration || carried);
				if (wasPlaying) void video.play().catch(() => this.setState({ playing: false }));
				this.emit();
			};
			if (video.readyState >= 1) onReady();
			else {
				video.addEventListener("loadedmetadata", onReady, { once: true });
				detach = () => video.removeEventListener("loadedmetadata", onReady);
			}
			video.onplay = () => this.startLoop();
			video.onpause = () => this.onMasterPause();
			video.onended = () => this.onMasterPause();
			video.onseeked = () => this.emit();
		} else {
			video.muted = true;
			const place = () => {
				const target = this.followerTime(id);
				if (target !== null) video.currentTime = target;
				if (this.state.playing) void video.play().catch(() => {});
			};
			if (video.readyState >= 1) place();
			else {
				video.addEventListener("loadedmetadata", place, { once: true });
				detach = () => video.removeEventListener("loadedmetadata", place);
			}
		}
		return () => {
			detach();
			this.videos.delete(id);
			this.timeMaps.delete(id);
			if (this.masterId === id) {
				// A video with no metadata yet reads 0, which would throw away the time being carried.
				if (video.readyState >= 1) this.virtualTime = video.currentTime;
				video.onplay = video.onpause = video.onended = video.onseeked = null;
				video.pause();
				this.masterId = null;
			}
		};
	}

	private followerTime(id: string) {
		const map = this.timeMaps.get(id);
		return map ? map(this.time) : this.time;
	}

	private startLoop() {
		this.setState({ playing: true });
		for (const [id, video] of this.videos) if (id !== this.masterId) void video.play().catch(() => {});
		cancelAnimationFrame(this.raf);
		const loop = () => {
			this.sync();
			this.emit();
			if (this.state.playing) this.raf = requestAnimationFrame(loop);
		};
		this.raf = requestAnimationFrame(loop);
	}

	private onMasterPause() {
		if (this.master && !this.master.paused) return;
		this.setState({ playing: false });
		cancelAnimationFrame(this.raf);
		for (const [id, video] of this.videos) {
			if (id === this.masterId) continue;
			video.pause();
			const target = this.followerTime(id);
			if (target !== null) video.currentTime = target;
		}
		this.emit();
	}

	private sync() {
		for (const [id, video] of this.videos) {
			if (id === this.masterId || video.readyState < 2) continue;
			const mapped = this.followerTime(id);
			if (mapped === null) continue;
			const target = Math.min(mapped, video.duration || mapped);
			if (Math.abs(video.currentTime - target) > DRIFT_TOLERANCE_S) video.currentTime = target;
		}
	}

	private emit() {
		const t = this.time;
		for (const listener of this.frameListeners) listener(t);
	}

	seek(t: number) {
		const target = Math.max(0, Math.min(t, this.state.duration));
		const master = this.master;
		if (master) master.currentTime = target;
		else this.virtualTime = target;
		for (const [id, video] of this.videos) {
			if (id === this.masterId) continue;
			const mapped = this.followerTime(id);
			if (mapped !== null) video.currentTime = Math.min(mapped, video.duration || mapped);
		}
		this.emit();
	}

	step(frames: number) {
		this.pause();
		this.seek(this.time + frames / this.fps);
	}

	play() {
		const master = this.master;
		if (!master) {
			// Still downloading: remember the press, and the master starts when it registers.
			this.setState({ playing: true });
			return;
		}
		if (master.ended) this.seek(0);
		void master.play().catch(() => {});
	}

	pause() {
		if (this.master) this.master.pause();
		else this.setState({ playing: false });
	}

	toggle() {
		if (this.state.playing) this.pause();
		else this.play();
	}

	setRate(rate: number) {
		for (const video of this.videos.values()) video.playbackRate = rate;
		this.setState({ rate });
	}

	toggleMute() {
		const muted = !this.state.muted;
		const master = this.master;
		if (master) master.muted = muted;
		this.setState({ muted });
	}

	onFrame(listener: (t: number) => void) {
		this.frameListeners.add(listener);
		listener(this.time);
		return () => {
			this.frameListeners.delete(listener);
		};
	}

	onState = (listener: () => void) => {
		this.stateListeners.add(listener);
		return () => {
			this.stateListeners.delete(listener);
		};
	};

	dispose() {
		cancelAnimationFrame(this.raf);
		for (const video of this.videos.values()) video.pause();
		this.videos.clear();
		this.frameListeners.clear();
		this.stateListeners.clear();
	}
}

export function useEngineState(engine: PlayerEngine) {
	return useSyncExternalStore(engine.onState, () => engine.state);
}

/** Runs on every frame without re-rendering React. Write to a ref inside the callback. */
export function useEngineFrame(engine: PlayerEngine, onFrame: (t: number) => void) {
	const latest = useRef(onFrame);
	latest.current = onFrame;
	useEffect(() => engine.onFrame((t) => latest.current(t)), [engine]);
}
