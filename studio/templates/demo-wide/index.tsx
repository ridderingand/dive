import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion";
import type { Cut, TemplateInput } from "@core/schema";
import { bubble, neutrals } from "../../system/dive";
import { Backdrop } from "../_kit/Backdrop";
import { Bubbles } from "../_kit/Bubble";
import { Captions } from "../_kit/Captions";
import { CutSequence, CutVideo, FramedCut, isCamera, zoomAt } from "../_kit/Picture";
import { TemplateShell } from "../_kit/Shell";
import type { TemplateDef } from "../types";

const INSET = 72;

function ScreenWindow({ input, cut }: { input: TemplateInput; cut: Cut }) {
	const frame = useCurrentFrame();
	const { fps, width, height } = useVideoConfig();
	const zoom = zoomAt(input.concept.zooms, cut.from + frame / fps);
	const windowHeight = height - INSET * 2;
	const windowWidth = windowHeight * (16 / 9);
	return (
		<AbsoluteFill>
			<Backdrop />
			<div
				style={{
					position: "absolute",
					left: (width - windowWidth) / 2,
					top: INSET,
					width: windowWidth,
					height: windowHeight,
					borderRadius: 28,
					overflow: "hidden",
					background: neutrals.trench,
					boxShadow: "0 30px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(219,250,244,0.12)",
				}}
			>
				<div style={{ width: "100%", height: "100%", transform: zoom ? `scale(${zoom.scale})` : undefined, transformOrigin: zoom ? `${zoom.focus.x * 100}% ${zoom.focus.y * 100}%` : undefined }}>
					<CutVideo input={input} cut={cut} style={{ objectPosition: "50% 50%" }} />
				</div>
			</div>
		</AbsoluteFill>
	);
}

function DemoWide(input: TemplateInput) {
	return (
		<TemplateShell input={input}>
			<AbsoluteFill>
				{input.concept.cuts.map((cut) => (
					<CutSequence key={`${cut.source}-${cut.from}`} cut={cut}>
						{isCamera(input, cut.source) ? <FramedCut input={input} cut={{ ...cut, scale: 1, offsetY: 0, focus: { x: 0.5, y: 0.5 } }} /> : <ScreenWindow input={input} cut={cut} />}
					</CutSequence>
				))}
			</AbsoluteFill>
			<Bubbles input={input} placement={bubble.wide} />
			<Captions input={input} y={Number(input.concept.props.captionY ?? 930)} />
		</TemplateShell>
	);
}

export const demoWide: TemplateDef = {
	id: "demo-wide",
	name: "Demo wide",
	summary: "16:9 with the screen share in a window on the Dive backdrop. Strategic zooms do the framing instead of a crop.",
	bestFor: "Demo-heavy clips where the UI is the story.",
	formats: ["wide"],
	defaultCaptionStyle: "sky-clash",
	anatomy: ["Screen window with 72px margins", "Bubble bottom right", "Zooms land inside the window", "Cameras go full frame"],
	knobs: [{ key: "captionY", type: "number", fallback: "930", description: "Vertical centre of the captions" }],
	component: DemoWide,
};
