import type { CSSProperties, ReactNode } from "react";
import { AbsoluteFill, Easing, interpolate, OffthreadVideo, Sequence, useCurrentFrame, useVideoConfig } from "remotion";
import type { Cut, TemplateInput, Zoom } from "@core/schema";

export function sourceFile(input: TemplateInput, key: string): string {
	const source = input.clip.sources.find((item) => item.key === key);
	if (!source) throw new Error(`Concept uses source "${key}", which this clip does not have`);
	return `${input.mediaBase}${source.file}`;
}

export function isCamera(input: TemplateInput, key: string): boolean {
	const kind = input.clip.sources.find((item) => item.key === key)?.kind;
	return kind === "guest" || kind === "host";
}

const SPLIT_LINE = 4;

function ease(progress: number) {
	const t = Math.min(1, Math.max(0, progress));
	return 1 - (1 - t) ** 3;
}

export function zoomAt(zooms: Zoom[], t: number) {
	for (const zoom of zooms) {
		if (t < zoom.from || t >= zoom.to) continue;
		const rise = ease((t - zoom.from) / Math.max(zoom.transitionIn, 0.001));
		const fall = ease((zoom.to - t) / Math.max(zoom.transitionOut, 0.001));
		return { scale: 1 + (zoom.level - 1) * Math.min(rise, fall), focus: zoom.focus };
	}
	return null;
}

type CutVideoProps = { input: TemplateInput; cut: Cut; style?: CSSProperties };

export function CutVideo({ input, cut, style }: CutVideoProps) {
	const { fps } = useVideoConfig();
	return (
		<OffthreadVideo
			src={sourceFile(input, cut.source)}
			muted
			trimBefore={Math.round(cut.sourceIn * fps)}
			playbackRate={cut.rate}
			style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: `${cut.focus.x * 100}% ${cut.focus.y * 100}%`, ...style }}
		/>
	);
}

/** Applies whatever zoom lands on this cut, so a template gets zooms by wrapping its video in this. */
export function ZoomLayer({ input, cut, children }: { input: TemplateInput; cut: Cut; children: ReactNode }) {
	const frame = useCurrentFrame();
	const { fps } = useVideoConfig();
	const zoom = zoomAt(input.concept.zooms, cut.from + frame / fps);
	return <AbsoluteFill style={zoom ? { transform: `scale(${zoom.scale})`, transformOrigin: `${zoom.focus.x * 100}% ${zoom.focus.y * 100}%` } : undefined}>{children}</AbsoluteFill>;
}

const lerp = (from: number, to: number, amount: number) => from + (to - from) * amount;

/** Two people side by side. When the next cut is the right-hand person, their half grows into exactly that framing. */
function SplitCut({ input, cut, split }: { input: TemplateInput; cut: Cut; split: NonNullable<Cut["split"]> }) {
	const frame = useCurrentFrame();
	const { fps, width } = useVideoConfig();
	const seconds = cut.to - cut.from;
	const next = input.concept.cuts.find((item) => item.source === split.source && Math.abs(item.from - cut.to) < 0.05);
	const grow = next ? interpolate(frame / fps, [seconds - split.expandSeconds, seconds], [0, 1], { easing: Easing.bezier(0.32, 0.72, 0, 1), extrapolateLeft: "clamp", extrapolateRight: "clamp" }) : 0;
	const left = (width / 2) * (1 - grow);
	const focus = { x: lerp(split.focus.x, next?.focus.x ?? split.focus.x, grow), y: lerp(split.focus.y, next?.focus.y ?? split.focus.y, grow) };
	const partner: Cut = { ...cut, source: split.source, sourceIn: split.sourceIn ?? cut.from, rate: 1, focus, split: undefined };
	return (
		<AbsoluteFill style={{ background: "#000" }}>
			<div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: width / 2 }}>
				<CutVideo input={input} cut={cut} />
			</div>
			<div style={{ position: "absolute", left, top: 0, bottom: 0, right: 0, overflow: "hidden", boxShadow: `-${SPLIT_LINE}px 0 0 #000` }}>
				<AbsoluteFill style={{ transform: `translateY(${lerp(0, next?.offsetY ?? 0, grow)}px) scale(${lerp(1, next?.scale ?? 1, grow)})`, transformOrigin: `${focus.x * 100}% ${focus.y * 100}%` }}>
					<CutVideo input={input} cut={partner} />
				</AbsoluteFill>
			</div>
		</AbsoluteFill>
	);
}

/** A cut filling its box, with the concept's framing and any zoom that lands on it. */
export function FramedCut({ input, cut }: { input: TemplateInput; cut: Cut }) {
	if (cut.split) return <SplitCut input={input} cut={cut} split={cut.split} />;
	return (
		<AbsoluteFill style={{ transform: `translateY(${cut.offsetY}px) scale(${cut.scale})`, transformOrigin: `${cut.focus.x * 100}% ${cut.focus.y * 100}%` }}>
			<ZoomLayer input={input} cut={cut}>
				<CutVideo input={input} cut={cut} />
			</ZoomLayer>
		</AbsoluteFill>
	);
}

export function CutSequence({ cut, children }: { cut: Cut; children: React.ReactNode }) {
	const { fps } = useVideoConfig();
	const from = Math.round(cut.from * fps);
	return (
		<Sequence from={from} durationInFrames={Math.max(1, Math.round(cut.to * fps) - from)} name={cut.label ?? cut.source}>
			{children}
		</Sequence>
	);
}
