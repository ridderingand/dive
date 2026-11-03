export type TemplateBrief = { id: string; formats: ("square" | "vertical" | "wide")[]; defaultCaptionStyle: string };

/** Plain data for the CLI, which runs outside React. Keep in step with templates/index.ts. */
export const templates: TemplateBrief[] = [
	{ id: "talk-square", formats: ["square"], defaultCaptionStyle: "sky-label" },
	{ id: "talk-vertical", formats: ["vertical"], defaultCaptionStyle: "sky-label" },
	{ id: "demo-wide", formats: ["wide"], defaultCaptionStyle: "sky-clash" },
];
