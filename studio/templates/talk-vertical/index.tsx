import { AbsoluteFill } from "remotion";
import type { Cut, TemplateInput } from "@core/schema";
import { bubble, neutrals } from "../../system/dive";
import { Backdrop } from "../_kit/Backdrop";
import { Bubbles } from "../_kit/Bubble";
import { Captions } from "../_kit/Captions";
import { CutSequence, CutVideo, FramedCut, isCamera } from "../_kit/Picture";
import { TemplateShell } from "../_kit/Shell";
import type { TemplateDef } from "../types";

const SCREEN_HEIGHT = 1120;
const SCREEN_TOP = 300;

function ScreenCard({ input, cut }: { input: TemplateInput; cut: Cut }) {
	return (
		<AbsoluteFill>
			<Backdrop />
			<div style={{ position: "absolute", left: 0, top: SCREEN_TOP, width: 1080, height: SCREEN_HEIGHT, overflow: "hidden", background: neutrals.trench }}>
				<CutVideo input={input} cut={cut} style={{ transform: `scale(${cut.scale})`, transformOrigin: `${cut.focus.x * 100}% ${cut.focus.y * 100}%` }} />
			</div>
		</AbsoluteFill>
	);
}

function TalkVertical(input: TemplateInput) {
	const captionY = Number(input.concept.props.captionY ?? 1560);
	return (
		<TemplateShell input={input}>
			<AbsoluteFill>
				{input.concept.cuts.map((cut) => (
					<CutSequence key={`${cut.source}-${cut.from}`} cut={cut}>
						{isCamera(input, cut.source) ? <FramedCut input={input} cut={{ ...cut, offsetY: 0 }} /> : <ScreenCard input={input} cut={cut} />}
					</CutSequence>
				))}
			</AbsoluteFill>
			<Bubbles input={input} placement={bubble.vertical} />
			<Captions input={input} y={captionY} />
		</TemplateShell>
	);
}

export const talkVertical: TemplateDef = {
	id: "talk-vertical",
	name: "Talk vertical",
	summary: "9:16 for Shorts and Reels. Cameras go full height; screen shares sit in a band on the Dive backdrop so the UI stays legible.",
	bestFor: "Clips with one strong speaker and only light screen work.",
	formats: ["vertical"],
	defaultCaptionStyle: "sky-label",
	anatomy: ["Cameras crop to full height", "Screen band, 1120px tall", "Bubble overlaps the band", "Captions sit low, in the thumb-safe zone"],
	knobs: [{ key: "captionY", type: "number", fallback: "1560", description: "Vertical centre of the captions" }],
	component: TalkVertical,
};
