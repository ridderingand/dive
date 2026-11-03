import { OffthreadVideo, Sequence, useVideoConfig } from "remotion";
import type { Bubble as BubbleSpec, TemplateInput } from "@core/schema";
import { accents, bubble as bubbleTokens } from "../../system/dive";
import { sourceFile } from "./Picture";

type Placement = { x: number; y: number; size: number };

export function Bubbles({ input, placement }: { input: TemplateInput; placement: Placement }) {
	return input.concept.bubbles.map((spec) => <SpeakerBubble key={`${spec.source}-${spec.from}`} input={input} spec={spec} placement={placement} />);
}

function SpeakerBubble({ input, spec, placement }: { input: TemplateInput; spec: BubbleSpec; placement: Placement }) {
	const { fps } = useVideoConfig();
	const from = Math.round(spec.from * fps);
	const size = spec.size ?? placement.size;
	const x = spec.x ?? placement.x;
	const y = spec.y ?? placement.y;
	return (
		<Sequence from={from} durationInFrames={Math.max(1, Math.round(spec.to * fps) - from)} layout="none" name={`Bubble ${spec.source}`}>
			<div
				style={{
					position: "absolute",
					left: x - size / 2,
					top: y - size / 2,
					width: size,
					height: size,
					borderRadius: "50%",
					overflow: "hidden",
					boxShadow: bubbleTokens.shadow,
				}}
			>
				<OffthreadVideo
					src={sourceFile(input, spec.source)}
					muted
					trimBefore={Math.round((spec.sourceIn ?? spec.from) * fps)}
					style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: `${spec.focus.x * 100}% ${spec.focus.y * 100}%` }}
				/>
				<div style={{ position: "absolute", inset: 0, borderRadius: "50%", boxShadow: `inset 0 0 0 ${bubbleTokens.square.border}px ${accents.sky.hex}` }} />
			</div>
		</Sequence>
	);
}
