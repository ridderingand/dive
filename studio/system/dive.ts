/** The Dive visual system. Templates and the studio shell both read from here, so a change lands everywhere. */

export const accents = {
	sky: { hex: "#4FCCD2", name: "Sky" },
	green: { hex: "#52CC92", name: "Green" },
	blue: { hex: "#6399E1", name: "Blue" },
	lilac: { hex: "#847FFD", name: "Lilac" },
	purple: { hex: "#BC66FD", name: "Purple" },
	plum: { hex: "#BA5288", name: "Plum" },
	red: { hex: "#FF7473", name: "Red" },
	orange: { hex: "#FF9673", name: "Orange" },
	yellow: { hex: "#FFFAC4", name: "Yellow" },
} as const;
export type AccentId = keyof typeof accents;

export const gradients = {
	red: ["#FF8572", "#FF7272"],
	orange: ["#FF9373", "#FFB472"],
	yellow: ["#FFF9C4", "#FFFFB2"],
	green: ["#52CC8F", "#52CCB8"],
	sky: ["#4ECED2", "#4DB0D1"],
	blue: ["#62B6E0", "#6297E0"],
	lilac: ["#827EFD", "#937EFD"],
	purple: ["#A465FD", "#BE65FD"],
	plum: ["#BA51AC", "#BA5286"],
} as const;

export const neutrals = {
	abyss: "#091314",
	trench: "#0D1B1D",
	reef: "#222E37",
	ink: "#1A1A1A",
	grayDefault: "#706D6D",
	grayLight: "#EBF0EF",
	grayLightest: "#F7FAF9",
	foam: "#DBFAF4",
} as const;

export const type = {
	captionDisplay: { family: "Clash Display", weights: [600, 700], use: "Label and word captions" },
	captionPoster: { family: "Tanker", weights: [400], use: "Loud single-word captions" },
	captionBlock: { family: "Archivo Black", weights: [400], use: "Dive Club recipe captions" },
	interface: { family: "Mona Sans Variable", weights: [400, 500, 600, 700], use: "Studio interface, set expanded for headings" },
	data: { family: "Geist Mono Variable", weights: [400, 500], use: "Timecode and technical values" },
} as const;

export type LabelCaptionStyle = {
	kind: "label";
	name: string;
	description: string;
	family: string;
	y: number;
	maxWords: number;
	base: { size: number; weight: number; fill: string; text: string; padding: [number, number, number, number] };
	emphasis: { size: number; weight: number; fill: string; text: string; padding: [number, number, number, number] };
	radius: number;
	letterSpacing: number;
	popSeconds: number;
};

export type WordCaptionStyle = {
	kind: "word";
	name: string;
	description: string;
	family: string;
	y: number;
	base: { size: number; weight: number; color: string };
	emphasis: { size: number; weight: number; color: string };
	stroke: { color: string; width: number } | null;
	shadow: string;
	letterSpacing: number;
};

export type CaptionStyle = LabelCaptionStyle | WordCaptionStyle;

export const captionStyles = {
	"sky-label": {
		kind: "label",
		name: "Sky label",
		description: "Two-word foam labels. Emphasis words turn Sky and pop in.",
		family: "Clash Display",
		y: 860,
		maxWords: 2,
		base: { size: 54, weight: 600, fill: neutrals.grayLightest, text: neutrals.ink, padding: [12, 22, 10, 22] },
		emphasis: { size: 62, weight: 700, fill: accents.sky.hex, text: neutrals.ink, padding: [12, 24, 10, 24] },
		radius: 10,
		letterSpacing: 0.5,
		popSeconds: 0.12,
	},
	"sky-tanker": {
		kind: "word",
		name: "Sky Tanker",
		description: "One word at a time in Tanker, emphasis grows and turns Sky.",
		family: "Tanker",
		y: 920,
		base: { size: 96, weight: 400, color: neutrals.grayLightest },
		emphasis: { size: 128, weight: 400, color: accents.sky.hex },
		stroke: { color: neutrals.ink, width: 4 },
		shadow: "0 3px 10px rgba(26,26,26,0.6)",
		letterSpacing: 1,
	},
	"sky-clash": {
		kind: "word",
		name: "Sky Clash",
		description: "One word at a time in Clash Display, calmer than Tanker.",
		family: "Clash Display",
		y: 920,
		base: { size: 80, weight: 600, color: neutrals.grayLightest },
		emphasis: { size: 104, weight: 700, color: accents.sky.hex },
		stroke: { color: neutrals.ink, width: 4 },
		shadow: "0 3px 10px rgba(26,26,26,0.6)",
		letterSpacing: 1,
	},
	"recipe-block": {
		kind: "word",
		name: "Recipe block",
		description: "The original Dive Club recipe: Archivo Black, yellow, hard black shadow.",
		family: "Archivo Black",
		y: 900,
		base: { size: 76, weight: 400, color: accents.yellow.hex },
		emphasis: { size: 92, weight: 400, color: accents.yellow.hex },
		stroke: null,
		shadow: "5px 5px 0 #000000",
		letterSpacing: 0,
	},
} as const satisfies Record<string, CaptionStyle>;
export type CaptionStyleId = keyof typeof captionStyles;

/** The easing every Dive entrance uses unless a template has a reason not to. */
export const motion = {
	captionPop: { seconds: 0.12, easing: "ease-out", use: "Emphasis caption entrance" },
	zoomIn: { seconds: 0.22, easing: "perceptual", use: "Strategic zoom in on a talking head or screen" },
	zoomOut: { seconds: 0.3, easing: "perceptual", use: "Release from a strategic zoom" },
	cut: { seconds: 0, easing: "hard cut", use: "Every picture change. No dissolves between speakers" },
} as const;

export const bubble = {
	square: { x: 850, y: 225, size: 340, border: 5 },
	vertical: { x: 820, y: 300, size: 340, border: 5 },
	wide: { x: 1680, y: 830, size: 340, border: 5 },
	shadow: "0 6px 18px rgba(0,0,0,0.45)",
} as const;
