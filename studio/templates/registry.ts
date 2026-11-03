import type { FormatId } from "../core/formats";

export type TemplateKnob = { key: string; type: string; fallback: string; description: string };

export type TemplateInfo = {
	id: string;
	name: string;
	summary: string;
	bestFor: string;
	formats: FormatId[];
	defaultCaptionStyle: string;
	anatomy: string[];
	knobs: TemplateKnob[];
};

/** Plain data, so the CLI and the clips pages can read templates without loading React or Remotion. */
export const templates: TemplateInfo[] = [
	{
		id: "talk-square",
		name: "Talk square",
		summary: "Full-bleed square. Cameras and screen share take the whole frame, with the speaker in a bubble over anything that isn't their face.",
		bestFor: "Conversation clips and the feed. The James McDonald look.",
		formats: ["square"],
		defaultCaptionStyle: "sky-label",
		anatomy: ["Picture fills 1080 by 1080", "Speaker bubble, 340px, top right", "Captions centred at y 860", "Hard cuts only"],
		knobs: [],
	},
	{
		id: "talk-vertical",
		name: "Talk vertical",
		summary: "9:16 for Shorts and Reels. Cameras go full height; screen shares sit in a band on the Dive backdrop so the UI stays legible.",
		bestFor: "Clips with one strong speaker and only light screen work.",
		formats: ["vertical"],
		defaultCaptionStyle: "sky-label",
		anatomy: ["Cameras crop to full height", "Screen band, 1120px tall", "Bubble overlaps the band", "Captions sit low, in the thumb-safe zone"],
		knobs: [{ key: "captionY", type: "number", fallback: "1560", description: "Vertical centre of the captions" }],
	},
	{
		id: "demo-wide",
		name: "Demo wide",
		summary: "16:9 with the screen share in a window on the Dive backdrop. Strategic zooms do the framing instead of a crop.",
		bestFor: "Demo-heavy clips where the UI is the story.",
		formats: ["wide"],
		defaultCaptionStyle: "sky-clash",
		anatomy: ["Screen window with 72px margins", "Bubble bottom right", "Zooms land inside the window", "Cameras go full frame"],
		knobs: [{ key: "captionY", type: "number", fallback: "930", description: "Vertical centre of the captions" }],
	},
];

export function templateInfo(id: string): TemplateInfo {
	const template = templates.find((item) => item.id === id);
	if (!template) throw new Error(`Unknown template "${id}"`);
	return template;
}
