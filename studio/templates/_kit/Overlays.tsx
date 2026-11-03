import { AbsoluteFill, Easing, Img, interpolate, OffthreadVideo, Sequence, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import type { Overlay, TemplateInput } from "@core/schema";
import { accents, neutrals } from "../../system/dive";
import { Backdrop } from "./Backdrop";
import { sourceFile } from "./Picture";

const DIVE_EASE = Easing.bezier(0.32, 0.72, 0, 1);

/** 0 to 1 and back: in over `enter` seconds, out over `leave` seconds before the overlay ends. */
function usePresence(enter: number, leave: number) {
	const frame = useCurrentFrame();
	const { fps, durationInFrames } = useVideoConfig();
	const t = frame / fps;
	const end = durationInFrames / fps;
	const options = { easing: DIVE_EASE, extrapolateLeft: "clamp", extrapolateRight: "clamp" } as const;
	return Math.min(interpolate(t, [0, enter], [0, 1], options), interpolate(t, [end - leave, end], [1, 0], options));
}

function LowerThird({ overlay }: { overlay: Extract<Overlay, { type: "lower-third" }> }) {
	const presence = usePresence(0.35, 0.25);
	const { height } = useVideoConfig();
	return (
		<div style={{ position: "absolute", left: 56, top: overlay.y ?? height * 0.6, opacity: presence, transform: `translateX(${(1 - presence) * -40}px)`, display: "grid", gap: 8 }}>
			<div style={{ justifySelf: "start", padding: "12px 22px 10px", borderRadius: 10, background: neutrals.grayLightest, color: neutrals.ink, fontFamily: '"Clash Display"', fontWeight: 700, fontSize: 44, lineHeight: 1 }}>{overlay.title}</div>
			{overlay.subtitle ? <div style={{ justifySelf: "start", padding: "8px 16px 7px", borderRadius: 8, background: accents.sky.hex, color: neutrals.ink, fontFamily: '"Clash Display"', fontWeight: 600, fontSize: 28, lineHeight: 1 }}>{overlay.subtitle}</div> : null}
		</div>
	);
}

function Wordmark({ overlay }: { overlay: Extract<Overlay, { type: "wordmark" }> }) {
	const presence = usePresence(0.3, 0.3);
	const { width } = useVideoConfig();
	const left = overlay.corner === "top-right" ? width - 56 - 150 : 56;
	return <Img src={staticFile("brand/wordmark.svg")} style={{ position: "absolute", left, top: 48, width: 150, opacity: presence * 0.86, filter: "brightness(0) invert(1)" }} />;
}

function ScreenCard({ input, overlay }: { input: TemplateInput; overlay: Extract<Overlay, { type: "screen-card" }> }) {
	const presence = usePresence(0.4, 0.28);
	const { fps, width, height } = useVideoConfig();
	const cardWidth = overlay.width ?? width * 0.74;
	const cardHeight = cardWidth * (9 / 16);
	return (
		<div
			style={{
				position: "absolute",
				left: (overlay.x ?? width / 2) - cardWidth / 2,
				top: (overlay.y ?? height * 0.42) - cardHeight / 2,
				width: cardWidth,
				height: cardHeight,
				borderRadius: 22,
				overflow: "hidden",
				opacity: presence,
				transform: `translateY(${(1 - presence) * 48}px) scale(${0.94 + presence * 0.06})`,
				background: neutrals.trench,
				boxShadow: "0 24px 70px rgba(0,0,0,0.55), 0 0 0 1px rgba(219,250,244,0.16)",
			}}
		>
			<OffthreadVideo src={sourceFile(input, overlay.source)} muted trimBefore={Math.round((overlay.sourceIn ?? overlay.from) * fps)} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: `${overlay.focus.x * 100}% ${overlay.focus.y * 100}%` }} />
		</div>
	);
}

function TitleCard({ overlay }: { overlay: Extract<Overlay, { type: "title-card" }> }) {
	const presence = usePresence(0.3, 0.2);
	return (
		<AbsoluteFill style={{ opacity: presence, alignItems: "center", justifyContent: "center", padding: 90 }}>
			<Backdrop />
			<div style={{ position: "relative", textAlign: "center", color: neutrals.grayLightest, fontFamily: '"Clash Display"', fontWeight: 700, fontSize: overlay.size ?? 104, lineHeight: 1.04, transform: `translateY(${(1 - presence) * 30}px)` }}>{overlay.text}</div>
		</AbsoluteFill>
	);
}

function OverlayBody({ input, overlay }: { input: TemplateInput; overlay: Overlay }) {
	if (overlay.type === "lower-third") return <LowerThird overlay={overlay} />;
	if (overlay.type === "wordmark") return <Wordmark overlay={overlay} />;
	if (overlay.type === "screen-card") return <ScreenCard input={input} overlay={overlay} />;
	return <TitleCard overlay={overlay} />;
}

export function Overlays({ input }: { input: TemplateInput }) {
	const { fps } = useVideoConfig();
	return input.concept.overlays.map((overlay) => {
		const from = Math.round(overlay.from * fps);
		return (
			<Sequence key={`${overlay.type}-${overlay.from}`} from={from} durationInFrames={Math.max(1, Math.round(overlay.to * fps) - from)} name={overlay.type}>
				<OverlayBody input={input} overlay={overlay} />
			</Sequence>
		);
	});
}
