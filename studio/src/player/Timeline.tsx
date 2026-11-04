import { useLayoutEffect, useMemo, useRef, useState } from "react";
import type { ManifestClip, ManifestConcept, RenderInfo } from "@core/manifest";
import { timecode } from "@core/time";
import { mediaUrl } from "../lib/data";
import { useEngineFrame, type PlayerEngine } from "./engine";

const SPRITE_EVERY_S = 2;
const SPRITE_COLUMNS = 10;
const SPRITE_WIDTH = 192;

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
		return { from: cut.from, to: cut.to, label: cut.split || file?.kind === "broll" ? (cut.label ?? file?.label ?? cut.source).replace(/^B-roll: /, "") : (file?.label ?? cut.source), kind: file?.kind ?? "guest", bubble: concept.bubbles.some((bubble) => bubble.from < cut.to && bubble.to > cut.from) };
	});
}

type Props = { engine: PlayerEngine; clip: ManifestClip; concept: ManifestConcept | null; render: RenderInfo | null };

export function Timeline({ engine, clip, concept, render }: Props) {
	const { ref: track, width } = useWidth<HTMLDivElement>();
	const duration = render?.durationS ?? clip.durationS ?? 1;
	const head = useRef<HTMLDivElement>(null);
	const [hover, setHover] = useState<number | null>(null);
	const scrubbing = useRef(false);

	const segments = useMemo(() => segmentsOf(clip, concept), [clip, concept]);
	const percent = (t: number) => `${(t / duration) * 100}%`;

	useEngineFrame(engine, (t) => {
		const x = (t / duration) * (track.current?.clientWidth ?? 0);
		if (head.current) head.current.style.transform = `translateX(${x}px)`;
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
							{timecode(t, clip.fps).split("·")[0]}
						</span>
					))}
				</div>
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
