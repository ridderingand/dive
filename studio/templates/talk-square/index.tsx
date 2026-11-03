import { AbsoluteFill } from "remotion";
import type { TemplateInput } from "@core/schema";
import { bubble } from "../../system/dive";
import { Bubbles } from "../_kit/Bubble";
import { Captions } from "../_kit/Captions";
import { CutSequence, FramedCut } from "../_kit/Picture";
import { TemplateShell } from "../_kit/Shell";

export function TalkSquare(input: TemplateInput) {
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
