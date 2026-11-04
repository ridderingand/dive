import { AbsoluteFill, Audio, OffthreadVideo, Sequence, staticFile, useVideoConfig } from "remotion";
import { END_CAP_SECONDS } from "@core/time";
import type { TemplateInput } from "@core/schema";
import { useDiveFonts } from "./fonts";
import { Overlays } from "./Overlays";

/** What every template shares: the dialogue track, caption fonts and the optional Resolve end cap. */
export function TemplateShell({ input, children }: { input: TemplateInput; children: React.ReactNode }) {
	useDiveFonts();
	const { fps } = useVideoConfig();
	const clipFrames = Math.round(input.clip.durationS * fps);
	return (
		<AbsoluteFill style={{ background: "#000", overflow: "hidden" }}>
			<Sequence durationInFrames={clipFrames} name="Clip">
				{children}
				<Overlays input={input} />
			</Sequence>
			{input.clip.audio && !input.clip.audioSpans ? <Audio src={`${input.mediaBase}${input.clip.audio}`} /> : null}
			{input.clip.audioSpans?.map((span) => (
				<Sequence key={span.from} from={Math.round(span.from * fps)} durationInFrames={Math.round((span.to - span.from) * fps)} name="Dialogue">
					<Audio src={`${input.mediaBase}${input.clip.audio}`} trimBefore={Math.round(span.sourceFrom * fps)} />
				</Sequence>
			))}
			{input.concept.endCap ? (
				<Sequence from={clipFrames} durationInFrames={Math.round(END_CAP_SECONDS * fps)} name="End cap">
					<AbsoluteFill style={{ alignItems: "center", justifyContent: "center", background: "#000" }}>
						<OffthreadVideo src={staticFile("brand/resolve.mp4")} muted style={{ width: 620, height: 620 }} />
					</AbsoluteFill>
				</Sequence>
			) : null}
		</AbsoluteFill>
	);
}
