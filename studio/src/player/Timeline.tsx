import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import type { ManifestClip, ManifestConcept, RenderInfo } from "@core/manifest";
import { timecode } from "@core/time";
import { mediaUrl, usePeaks } from "../lib/data";
import { useEngineFrame, type PlayerEngine } from "./engine";

const SPRITE_EVERY_S = 2;
const SPRITE_COLUMNS = 10;
const SPRITE_WIDTH = 192;
const LANE_LABEL_WIDTH = 76;

function useWidth<T extends HTMLElement>() {
	const ref = useRef<T>(null);
	const [width, setWidth] = useState(0);
	useLayoutEffect(() => {
		const node = ref.current;
		if (!node) return;
		const observer = new ResizeObserver(([entry]) => setWidth(entry?.contentRect.width ?? 0));
		observer.observe(node);
		return () => observer.disconnect();
	}, []);
	return { ref, width };
}

function drawCanvas(canvas: HTMLCanvasElement | null, width: number, height: number, draw: (context: CanvasRenderingContext2D) => void) {
	if (!canvas || width === 0) return;
	const scale = window.devicePixelRatio || 1;
	canvas.width = Math.round(width * scale);
	canvas.height = Math.round(height * scale);
	const context = canvas.getContext("2d");
	if (!context) return;
	context.scale(scale, scale);
	context.clearRect(0, 0, width, height);
	draw(context);
}

function tickStep(duration: number, width: number) {
	const target = duration / Math.max(width / 90, 1);
	return [1, 2, 5, 10, 15, 30, 60].find((step) => step >= target) ?? 120;
}

type Segment = { from: number; to: number; label: string; kind: string; bubble: boolean };

function segmentsOf(clip: ManifestClip, concept: ManifestConcept | null): Segment[] {
	if (!concept) return [];
	const kindOf = (key: string) => clip.files.find((file) => file.key === key);
	return concept.cuts.map((cut) => {
		const file = kindOf(cut.source);
		return { from: cut.from, to: cut.to, label: file?.kind === "broll" ? (cut.label ?? file.label).replace(/^B-roll: /, "") : (file?.label ?? cut.source), kind: file?.kind ?? "guest", bubble: concept.bubbles.some((bubble) => bubble.from < cut.to && bubble.to > cut.from) };
	});
}

type Props = { engine: PlayerEngine; clip: ManifestClip; concept: ManifestConcept | null; render: RenderInfo | null };

export function Timeline({ engine, clip, concept, render }: Props) {
	const { ref: track, width } = useWidth<HTMLDivElement>();
	const duration = render?.durationS ?? clip.durationS ?? 1;
	const peaks = usePeaks(clip.peaks);
	const wave = useRef<HTMLCanvasElement>(null);
	const words = useRef<HTMLCanvasElement>(null);
	const head = useRef<HTMLDivElement>(null);
	const progress = useRef<HTMLDivElement>(null);
	const [hover, setHover] = useState<number | null>(null);
	const scrubbing = useRef(false);

	const segments = useMemo(() => segmentsOf(clip, concept), [clip, concept]);
	const percent = (t: number) => `${(t / duration) * 100}%`;

	useEffect(() => {
		drawCanvas(wave.current, width, 34, (context) => {
			if (!peaks) return;
			context.fillStyle = "rgba(219,250,244,0.34)";
			const bars = Math.floor(width / 3);
			for (let bar = 0; bar < bars; bar += 1) {
				const from = Math.floor(((bar / bars) * duration * peaks.perSecond));
				const to = Math.floor((((bar + 1) / bars) * duration * peaks.perSecond));
				let peak = 0;
				for (let i = from; i < to; i += 1) peak = Math.max(peak, peaks.peaks[i] ?? 0);
				const height = Math.max(1.5, peak * 32);
				context.beginPath();
				context.roundRect(bar * 3, 17 - height / 2, 2, height, 1);
				context.fill();
			}
		});
	}, [peaks, width, duration]);

	useEffect(() => {
		const accent = getComputedStyle(document.documentElement).getPropertyValue("--sky").trim();
		const color = track.current ? getComputedStyle(track.current).getPropertyValue("--accent").trim() || accent : accent;
		drawCanvas(words.current, width, 22, (context) => {
			for (const word of clip.captions?.words ?? []) {
				const x = (word.start / duration) * width;
				const w = Math.max(1.5, ((word.end - word.start) / duration) * width - 1);
				context.fillStyle = word.em ? color : "rgba(219,250,244,0.2)";
				const height = word.em ? 16 : 8;
				context.beginPath();
				context.roundRect(x, 11 - height / 2, w, height, 1);
				context.fill();
			}
		});
	}, [clip.captions, width, duration, track]);

	useEngineFrame(engine, (t) => {
		const x = (t / duration) * (track.current?.clientWidth ?? 0);
		if (head.current) head.current.style.transform = `translateX(${x}px)`;
		if (progress.current) progress.current.style.width = `${x}px`;
	});

	const timeAt = (clientX: number) => {
		const box = track.current?.getBoundingClientRect();
		if (!box) return 0;
		return Math.min(duration, Math.max(0, ((clientX - box.left) / box.width) * duration));
	};

	const step = tickStep(duration, width);
	const ticks = Array.from({ length: Math.floor(duration / step) + 1 }, (_, index) => index * step);
	const tileHeight = render ? Math.round((SPRITE_WIDTH * render.height) / render.width / 2) * 2 : 0;
	const tile = hover === null ? 0 : Math.floor(hover / SPRITE_EVERY_S);
	const previewWidth = 168;
	const previewScale = previewWidth / SPRITE_WIDTH;
	const totalTiles = Math.ceil(duration / SPRITE_EVERY_S);

	return (
		<section className="timeline" aria-label="Timeline">
			<div className="timeline-labels" style={{ width: LANE_LABEL_WIDTH }}>
				<span className="timeline-label-ruler" />
				{clip.beats.length > 0 ? <span className="label lane-brief">Brief</span> : null}
				<span className="label lane-picture">Picture</span>
				<span className="label lane-words">Words</span>
				<span className="label lane-sound">Sound</span>
			</div>
			<div
				ref={track}
				className="timeline-track"
				onPointerDown={(event) => {
					event.currentTarget.setPointerCapture(event.pointerId);
					scrubbing.current = true;
					engine.seek(timeAt(event.clientX));
				}}
				onPointerMove={(event) => {
					const t = timeAt(event.clientX);
					setHover(t);
					if (scrubbing.current) engine.seek(t);
				}}
				onPointerUp={() => {
					scrubbing.current = false;
				}}
				onPointerLeave={() => setHover(null)}
			>
				<div className="ruler">
					{ticks.map((t) => (
						<span key={t} className="mono" style={{ left: percent(t) }}>
							{timecode(t, clip.fps).slice(0, 5)}
						</span>
					))}
				</div>
				{clip.beats.length > 0 ? (
					<div className="lane lane-brief" title="The beat sheet from the Notion brief">
						{clip.beats.filter((beat) => beat.start !== null && beat.end !== null).map((beat) => (
							<span key={`${beat.start}`} className="beat" style={{ left: percent(beat.start ?? 0), width: percent((beat.end ?? 0) - (beat.start ?? 0)) }} title={beat.visual ?? ""}>
								{beat.visual}
							</span>
						))}
					</div>
				) : null}
				<div className="lane lane-picture">
					{segments.map((segment) => (
						<span key={`${segment.from}-${segment.label}`} className={`segment kind-${segment.kind}`} style={{ left: percent(segment.from), width: percent(segment.to - segment.from) }} title={`${segment.label} ${timecode(segment.from, clip.fps)}`}>
							{segment.bubble ? <i className="segment-bubble" /> : null}
							<em>{segment.label}</em>
						</span>
					))}
					{concept?.zooms.map((zoom) => <span key={zoom.from} className="zoom-mark" style={{ left: percent(zoom.from), width: percent(zoom.to - zoom.from) }} title={`Zoom ${zoom.level}×`} />)}
					{concept?.overlays.map((overlay) => <span key={`${overlay.type}-${overlay.from}`} className="overlay-mark" style={{ left: percent(overlay.from), width: percent(overlay.to - overlay.from) }} title={overlay.type.replace("-", " ")} />)}
					{segments.length === 0 ? <span className="lane-empty">No picture yet</span> : null}
				</div>
				<div className="lane lane-words">
					<canvas ref={words} style={{ width: "100%", height: 22 }} />
				</div>
				<div className="lane lane-sound">
					<canvas ref={wave} style={{ width: "100%", height: 34 }} />
					<div ref={progress} className="wave-progress" />
				</div>
				{concept?.checks.filter((check) => check.level !== "pass" && check.at !== undefined).map((check) => (
					<span key={check.id} className={`check-mark level-${check.level}`} style={{ left: percent(check.at ?? 0) }} title={check.message} />
				))}
				<div ref={head} className="playhead" />
				{hover !== null ? (
					<div className="hover-card" style={{ left: `clamp(${previewWidth / 2}px, ${percent(hover)}, calc(100% - ${previewWidth / 2}px))` }}>
						{render ? (
							<div
								className="hover-frame"
								style={{
									width: previewWidth,
									height: tileHeight * previewScale,
									backgroundImage: `url(${mediaUrl(render.sprite)})`,
									backgroundSize: `${SPRITE_COLUMNS * previewWidth}px auto`,
									backgroundPosition: `-${(Math.min(tile, totalTiles - 1) % SPRITE_COLUMNS) * previewWidth}px -${Math.floor(Math.min(tile, totalTiles - 1) / SPRITE_COLUMNS) * tileHeight * previewScale}px`,
								}}
							/>
						) : null}
						<span className="mono">{timecode(hover, clip.fps)}</span>
					</div>
				) : null}
			</div>
		</section>
	);
}
