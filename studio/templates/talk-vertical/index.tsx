import { AbsoluteFill } from "remotion";
import type { Cut, TemplateInput } from "@core/schema";
import { bubble, neutrals } from "../../system/dive";
import { Backdrop } from "../_kit/Backdrop";
import { Bubbles } from "../_kit/Bubble";
import { Captions } from "../_kit/Captions";
import { CutSequence, CutVideo, FramedCut, isCamera, ZoomLayer } from "../_kit/Picture";
import { TemplateShell } from "../_kit/Shell";

const SCREEN_HEIGHT = 1120;
const SCREEN_TOP = 300;

function ScreenCard({ input, cut }: { input: TemplateInput; cut: Cut }) {
	return (
		<AbsoluteFill>
			<Backdrop />
			<div style={{ position: "absolute", left: 0, top: SCREEN_TOP, width: 1080, height: SCREEN_HEIGHT, overflow: "hidden", background: neutrals.trench }}>
				<ZoomLayer input={input} cut={cut}>
					<CutVideo input={input} cut={cut} style={{ transform: `scale(${cut.scale})`, transformOrigin: `${cut.focus.x * 100}% ${cut.focus.y * 100}%` }} />
				</ZoomLayer>
			</div>
		</AbsoluteFill>
	);
}

export function TalkVertical(input: TemplateInput) {
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
