import { AbsoluteFill } from "remotion";
import type { TemplateInput } from "@core/schema";
import { bubble } from "../../system/dive";
import { Bubbles } from "../_kit/Bubble";
import { Captions } from "../_kit/Captions";
import { CutSequence, FramedCut } from "../_kit/Picture";
import { TemplateShell } from "../_kit/Shell";
import type { TemplateDef } from "../types";

function TalkSquare(input: TemplateInput) {
	return (
		<TemplateShell input={input}>
			<AbsoluteFill>
				{input.concept.cuts.map((cut) => (
					<CutSequence key={`${cut.source}-${cut.from}`} cut={cut}>
						<FramedCut input={input} cut={cut} />
					</CutSequence>
				))}
			</AbsoluteFill>
			<Bubbles input={input} placement={bubble.square} />
			<Captions input={input} />
		</TemplateShell>
	);
}

export const talkSquare: TemplateDef = {
	id: "talk-square",
	name: "Talk square",
	summary: "Full-bleed square. Cameras and screen share take the whole frame, with the speaker in a bubble over anything that isn't their face.",
	bestFor: "Conversation clips and the feed. The James McDonald look.",
	formats: ["square"],
	defaultCaptionStyle: "sky-label",
	anatomy: ["Picture fills 1080 by 1080", "Speaker bubble, 340px, top right", "Captions centred at y 860", "Hard cuts only"],
	knobs: [],
	component: TalkSquare,
};
