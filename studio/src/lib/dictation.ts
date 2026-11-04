import { useCallback, useEffect, useRef, useState } from "react";
import type { Stamp, Take } from "@core/moments";
import type { PlayerEngine } from "../player/engine";

const STAMP_EVERY_MS = 200;
const COPIED_MS = 2600;

export type DictationState = "idle" | "listening" | "transcribing" | "copied";

type Options = { engine: PlayerEngine; guest: string; slug: string; current: () => { concept: string | null; round: number | null }; onTake: (take: Take) => void; onMessage: (message: string) => void };

function toBase64(blob: Blob) {
	return new Promise<string>((resolve, reject) => {
		const reader = new FileReader();
		reader.onload = () => resolve(String(reader.result).split(",")[1] ?? "");
		reader.onerror = () => reject(reader.error);
		reader.readAsDataURL(blob);
	});
}

/**
 * Starts the clipboard write inside the press of Done, because Safari only allows it during a click,
 * and hands it the text once it exists. Fails if the person switched windows while it was writing.
 */
function copyWhenReady(text: Promise<string>) {
	return navigator.clipboard.write([new ClipboardItem({ "text/plain": text.then((value) => new Blob([value], { type: "text/plain" })) })]);
}

/** Records the voice and a log of where the playhead was. No screen capture: the timestamp is the context. */
export function useDictation({ engine, guest, slug, current, onTake, onMessage }: Options) {
	const [state, setState] = useState<DictationState>("idle");
	const level = useRef<HTMLElement | null>(null);
	const stop = useRef<(() => void) | null>(null);
	const latest = useRef({ current, onTake, onMessage });
	latest.current = { current, onTake, onMessage };

	const start = useCallback(async () => {
		let stream: MediaStream;
		try {
			stream = await navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: true, noiseSuppression: true } });
		} catch {
			latest.current.onMessage("The microphone is blocked. Allow it for this page and try again.");
			return;
		}
		const recorder = new MediaRecorder(stream);
		const chunks: Blob[] = [];
		const stamps: Stamp[] = [];
		const startedAt = performance.now();
		let lastStamp = -Infinity;
		const stamp = (t: number, force = false) => {
			const atMs = performance.now() - startedAt;
			if (!force && atMs - lastStamp < STAMP_EVERY_MS) return;
			lastStamp = atMs;
			stamps.push({ atMs, clipTime: t, ...latest.current.current() });
		};
		stamp(engine.time, true);
		const stopFrames = engine.onFrame((t) => stamp(t));

		const audio = new AudioContext();
		const analyser = audio.createAnalyser();
		analyser.fftSize = 256;
		audio.createMediaStreamSource(stream).connect(analyser);
		const samples = new Uint8Array(analyser.frequencyBinCount);
		let raf = 0;
		const meter = () => {
			analyser.getByteTimeDomainData(samples);
			let peak = 0;
			for (const sample of samples) peak = Math.max(peak, Math.abs(sample - 128));
			level.current?.style.setProperty("--level", String(Math.min(1, peak / 60)));
			raf = requestAnimationFrame(meter);
		};
		meter();

		let settle: { resolve: (text: string) => void; reject: (reason: Error) => void } | null = null;
		let copying: Promise<void> = Promise.resolve();

		recorder.ondataavailable = (event) => chunks.push(event.data);
		recorder.onstop = async () => {
			stopFrames();
			cancelAnimationFrame(raf);
			void audio.close();
			stream.getTracks().forEach((track) => track.stop());
			setState("transcribing");
			try {
				const response = await fetch("/api/takes", { method: "POST", body: JSON.stringify({ guest, slug, stamps, audio: await toBase64(new Blob(chunks, { type: recorder.mimeType })) }) });
				if (!response.ok) throw new Error("failed");
				const take = (await response.json()) as Take | null;
				if (!take) throw new Error("silent");
				settle?.resolve(take.prompt);
				latest.current.onTake(take);
				const showCopied = () => {
					setState("copied");
					window.setTimeout(() => setState((now) => (now === "copied" ? "idle" : now)), COPIED_MS);
				};
				await copying.then(showCopied).catch(() => {
					setState("idle");
					latest.current.onMessage("Your prompt is ready. Come back to this window to copy it.");
					window.addEventListener("focus", () => void navigator.clipboard.writeText(take.prompt).then(showCopied), { once: true });
				});
				return;
			} catch (reason) {
				settle?.reject(reason as Error);
				latest.current.onMessage((reason as Error).message === "silent" ? "Didn't catch anything. Check your microphone and try again." : "Couldn't write that up. Run bun run dive setup, then try again.");
			}
			setState("idle");
		};
		recorder.start();
		stop.current = () => {
			stop.current = null;
			stamp(engine.time, true);
			const text = new Promise<string>((resolve, reject) => {
				settle = { resolve, reject };
			});
			copying = copyWhenReady(text);
			copying.catch(() => {});
			recorder.stop();
		};
		setState("listening");
	}, [engine, guest, slug]);

	const toggle = useCallback(() => {
		if (state === "listening") stop.current?.();
		else if (state === "idle" || state === "copied") void start();
	}, [state, start]);

	useEffect(() => () => stop.current?.(), []);

	return { state, toggle, level };
}
