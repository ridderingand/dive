import { z } from "zod";

export const FORMATS = {
	square: { width: 1080, height: 1080, label: "Square", ratio: "1:1" },
	vertical: { width: 1080, height: 1920, label: "Vertical", ratio: "9:16" },
	wide: { width: 1920, height: 1080, label: "Wide", ratio: "16:9" },
} as const;
export type FormatId = keyof typeof FORMATS;

const Focus = z.object({ x: z.number().min(0).max(1), y: z.number().min(0).max(1) });
export type Focus = z.infer<typeof Focus>;

export const Source = z.object({
	key: z.string(),
	kind: z.enum(["guest", "host", "screen", "broll"]),
	label: z.string(),
	file: z.string().describe("Path under the media root"),
	durationS: z.number().optional(),
	synced: z.boolean().default(true).describe("True when the file starts at clip time 0"),
	note: z.string().optional(),
});
export type Source = z.infer<typeof Source>;

export const Cut = z.object({
	source: z.string(),
	from: z.number(),
	to: z.number(),
	sourceIn: z.number().describe("Seconds into the source file where this cut starts"),
	rate: z.number().default(1),
	focus: Focus.default({ x: 0.5, y: 0.5 }),
	scale: z.number().default(1),
	offsetY: z.number().default(0).describe("Pixels on the 1080 canvas, positive moves the picture down"),
	label: z.string().optional(),
});
export type Cut = z.infer<typeof Cut>;

export const Bubble = z.object({
	source: z.string(),
	from: z.number(),
	to: z.number(),
	sourceIn: z.number().optional().describe("Defaults to the same clip time, for synced sources"),
	focus: Focus.default({ x: 0.6, y: 0.42 }),
	x: z.number().optional().describe("Centre in canvas pixels; the template decides when absent"),
	y: z.number().optional(),
	size: z.number().optional(),
});
export type Bubble = z.infer<typeof Bubble>;

export const Zoom = z.object({
	from: z.number(),
	to: z.number(),
	level: z.number(),
	focus: Focus.default({ x: 0.5, y: 0.5 }),
	transitionIn: z.number().default(0.22),
	transitionOut: z.number().default(0.3),
});
export type Zoom = z.infer<typeof Zoom>;

export const RoundNote = z.object({
	round: z.number().int(),
	date: z.string(),
	summary: z.string(),
	feedbackUrl: z.string().optional(),
	reviewUrl: z.string().optional(),
});
export type RoundNote = z.infer<typeof RoundNote>;

export const CONCEPT_STATUS = ["draft", "in-review", "picked", "final", "parked"] as const;

export const Concept = z.object({
	id: z.string().regex(/^[a-z0-9-]+$/),
	name: z.string(),
	intent: z.string().describe("One line: what idea this concept is testing"),
	template: z.string(),
	format: z.enum(["square", "vertical", "wide"]),
	round: z.number().int().min(1).default(1),
	status: z.enum(CONCEPT_STATUS).default("draft"),
	captionStyle: z.string(),
	cuts: z.array(Cut),
	bubbles: z.array(Bubble).default([]),
	zooms: z.array(Zoom).default([]),
	endCap: z.boolean().default(false),
	props: z.record(z.string(), z.unknown()).default({}),
	history: z.array(RoundNote).default([]),
});
export type Concept = z.infer<typeof Concept>;
export type ConceptInput = z.input<typeof Concept>;

export const CaptionWord = z.object({
	i: z.number().int(),
	text: z.string(),
	start: z.number(),
	end: z.number(),
	speaker: z.string().nullable().optional(),
	em: z.boolean().optional(),
});
export type CaptionWord = z.infer<typeof CaptionWord>;

export const CaptionLine = z.object({
	line: z.string(),
	start: z.number(),
	end: z.number(),
	em: z.boolean().default(false),
});
export type CaptionLine = z.infer<typeof CaptionLine>;

export const Captions = z.object({
	format: z.literal("dive-word-captions/v1"),
	clip: z.string(),
	source: z.string(),
	duration_s: z.number().optional(),
	words: z.array(CaptionWord),
	lines: z.array(CaptionLine).optional().describe("Hand-tuned caption chunks; computed from words when absent"),
});
export type Captions = z.infer<typeof Captions>;

export const NOTION_STATUS = ["Cut in Descript", "Cut approved", "In design", "Ready for review", "Done"] as const;

export const Beat = z.object({
	start: z.number().nullable(),
	end: z.number().nullable(),
	speaker: z.string().nullable(),
	line: z.string().nullable(),
	visual: z.string().nullable(),
});
export type Beat = z.infer<typeof Beat>;

export const Clip = z.object({
	slug: z.string(),
	guest: z.string(),
	title: z.string(),
	score: z.number().nullable().default(null),
	status: z.enum(NOTION_STATUS),
	designer: z.string().nullable().default(null),
	topics: z.array(z.string()).default([]),
	hook: z.string().default(""),
	payoff: z.string().default(""),
	arc: z.string().nullable().default(null),
	lengthTargetS: z.number().nullable().default(null),
	durationS: z.number().nullable().default(null).describe("Actual cut length; null until the tracks exist"),
	fps: z.number().default(24),
	format: z.enum(["square", "vertical", "wide"]).nullable().default(null),
	notionUrl: z.string().nullable().default(null),
	descriptUrl: z.string().nullable().default(null),
	mixtureUrl: z.string().nullable().default(null),
	sourceNote: z.string().nullable().default(null),
	audio: z.string().nullable().default(null),
	sources: z.array(Source).default([]),
	beats: z.array(Beat).default([]),
	broll: z.array(z.object({ name: z.string(), rawTimecode: z.string().nullable(), episodeTimecode: z.string().nullable().optional(), note: z.string().nullable() })).default([]),
	captionCopy: z.string().nullable().default(null),
	visualNotes: z.array(z.string()).default([]),
	openIssues: z.array(z.string()).default([]),
});
export type Clip = z.infer<typeof Clip>;
export type ClipInput = z.input<typeof Clip>;

export const Guest = z.object({
	slug: z.string(),
	name: z.string(),
	episode: z.string().nullable().default(null),
	accent: z.string().describe("Key into system accents"),
	role: z.string().nullable().default(null),
	notionUrl: z.string().nullable().default(null),
	descriptProject: z.string().nullable().default(null),
	rawFolder: z.string().nullable().default(null),
});
export type Guest = z.infer<typeof Guest>;

/** What every template receives. Built by the CLI for renders and by the shell for the placeholder preview. */
export type TemplateInput = {
	clip: Pick<Clip, "title" | "fps" | "audio" | "sources"> & { durationS: number };
	concept: Pick<Concept, "cuts" | "bubbles" | "zooms" | "captionStyle" | "format" | "endCap" | "props">;
	captions: Pick<Captions, "words" | "lines">;
	mediaBase: string;
};
