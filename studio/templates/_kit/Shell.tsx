import { AbsoluteFill, Audio, OffthreadVideo, Sequence, useVideoConfig } from "remotion";
import { END_CAP_SECONDS } from "@core/time";
import type { TemplateInput } from "@core/schema";
import { useDiveFonts } from "./fonts";

/** What every template shares: the dialogue track, caption fonts and the optional Resolve end cap. */
export function TemplateShell({ input, children }: { input: TemplateInput; children: React.ReactNode }) {
	useDiveFonts();
	const { fps } = useVideoConfig();
	const clipFrames = Math.round(input.clip.durationS * fps);
	return (
		<AbsoluteFill style={{ background: "#000", overflow: "hidden" }}>
			<Sequence durationInFrames={clipFrames} name="Clip">
				{children}
			</Sequence>
			{input.clip.audio ? <Audio src={`${input.mediaBase}${input.clip.audio}`} /> : null}
			{input.concept.endCap ? (
				<Sequence from={clipFrames} durationInFrames={Math.round(END_CAP_SECONDS * fps)} name="End cap">
					<AbsoluteFill style={{ alignItems: "center", justifyContent: "center", background: "#000" }}>
						<OffthreadVideo src={`${input.mediaBase}library/Resolve_animation_square.mp4`} muted style={{ width: 620, height: 620 }} />
					</AbsoluteFill>
				</Sequence>
			) : null}
		</AbsoluteFill>
	);
}
