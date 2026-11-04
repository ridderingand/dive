import type { CSSProperties, ReactNode } from "react";
import { AbsoluteFill, OffthreadVideo, Sequence, useCurrentFrame, useVideoConfig } from "remotion";
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

/** A cut filling its box, with the concept's framing and any zoom that lands on it. */
export function FramedCut({ input, cut }: { input: TemplateInput; cut: Cut }) {
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
