import { Composition } from "remotion";
import { END_CAP_SECONDS } from "@core/time";
import { FORMATS, type TemplateInput } from "@core/schema";
import { templateById } from "../templates";

export type ConceptProps = TemplateInput & { templateId: string };

function ConceptVideo(props: ConceptProps) {
	const Template = templateById(props.templateId).component;
	return <Template {...props} />;
}

const emptyProps: ConceptProps = {
	templateId: "talk-square",
	mediaBase: "",
	clip: { title: "", fps: 24, audio: null, sources: [], durationS: 1 },
	concept: { cuts: [], bubbles: [], zooms: [], captionStyle: "sky-label", format: "square", endCap: false, props: {} },
	captions: { words: [] },
};

export function Root() {
	return (
		<Composition
			id="concept"
			component={ConceptVideo}
			defaultProps={emptyProps}
			fps={24}
			width={1080}
			height={1080}
			durationInFrames={24}
			calculateMetadata={({ props }) => {
				const { width, height } = FORMATS[props.concept.format];
				const seconds = props.clip.durationS + (props.concept.endCap ? END_CAP_SECONDS : 0);
				return { width, height, fps: props.clip.fps, durationInFrames: Math.round(seconds * props.clip.fps) };
			}}
		/>
	);
}
