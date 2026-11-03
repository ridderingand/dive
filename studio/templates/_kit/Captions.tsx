import { useMemo } from "react";
import { interpolate, useCurrentFrame, useVideoConfig, Easing } from "remotion";
import { activeAt, cleanWord, groupWords } from "@core/captions";
import type { TemplateInput } from "@core/schema";
import { captionStyles, type CaptionStyle, type CaptionStyleId, type LabelCaptionStyle, type WordCaptionStyle } from "../../system/dive";

export function resolveCaptionStyle(id: string): CaptionStyle {
	const style = captionStyles[id as CaptionStyleId];
	if (!style) throw new Error(`Unknown caption style "${id}"`);
	return style;
}

type CaptionsProps = { input: TemplateInput; y?: number; scale?: number };

export function Captions({ input, y, scale = 1 }: CaptionsProps) {
	const frame = useCurrentFrame();
	const { fps, width } = useVideoConfig();
	const t = frame / fps;
	const style = resolveCaptionStyle(input.concept.captionStyle);
	return style.kind === "label" ? <LabelCaptions input={input} style={style} t={t} y={y ?? style.y} scale={scale} width={width} /> : <WordCaptions input={input} style={style} t={t} y={y ?? style.y} scale={scale} width={width} />;
}

type StyleProps<S> = { input: TemplateInput; style: S; t: number; y: number; scale: number; width: number };

function LabelCaptions({ input, style, t, y, scale, width }: StyleProps<LabelCaptionStyle>) {
	const lines = useMemo(() => input.captions.lines ?? groupWords(input.captions.words, style.maxWords), [input.captions, style.maxWords]);
	const line = activeAt(lines, t);
	if (!line) return null;
	const look = line.em ? style.emphasis : style.base;
	const pop = line.em ? interpolate(t - line.start, [0, style.popSeconds], [0.6, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.quad) }) : 1;
	const [top, right, bottom, left] = look.padding;
	return (
		<div style={{ position: "absolute", left: 0, width, top: y, display: "flex", justifyContent: "center" }}>
			<div
				style={{
					transform: `translateY(-50%) scale(${pop * scale})`,
					background: look.fill,
					color: look.text,
					padding: `${top}px ${right}px ${bottom}px ${left}px`,
					borderRadius: style.radius,
					fontFamily: `"${style.family}"`,
					fontWeight: look.weight,
					fontSize: look.size,
					letterSpacing: style.letterSpacing,
					lineHeight: 1,
					textTransform: "uppercase",
					whiteSpace: "nowrap",
				}}
			>
				{line.line}
			</div>
		</div>
	);
}

function WordCaptions({ input, style, t, y, scale, width }: StyleProps<WordCaptionStyle>) {
	const word = activeAt(input.captions.words, t);
	if (!word) return null;
	const look = word.em ? style.emphasis : style.base;
	return (
		<div style={{ position: "absolute", left: 0, width, top: y, display: "flex", justifyContent: "center" }}>
			<div
				style={{
					transform: `translateY(-50%) scale(${scale})`,
					color: look.color,
					fontFamily: `"${style.family}"`,
					fontWeight: look.weight,
					fontSize: look.size,
					letterSpacing: style.letterSpacing,
					lineHeight: 1,
					textTransform: "uppercase",
					whiteSpace: "nowrap",
					textShadow: style.shadow,
					paintOrder: "stroke fill",
					WebkitTextStroke: style.stroke ? `${style.stroke.width * 2}px ${style.stroke.color}` : undefined,
				}}
			>
				{cleanWord(word.text)}
			</div>
		</div>
	);
}
