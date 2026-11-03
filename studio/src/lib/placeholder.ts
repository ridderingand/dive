import type { FormatId, TemplateInput } from "@core/schema";

const SECONDS = 12;

const SCRIPT = "Every clip starts with one idea worth keeping, then the frame earns the next second of attention until the payoff lands hard.";
const EMPHASIS = new Set(["idea", "frame", "attention", "payoff"]);

function sampleWords() {
	const parts = SCRIPT.split(" ");
	const step = (SECONDS - 0.4) / parts.length;
	return parts.map((text, i) => ({ i, text, start: 0.2 + i * step, end: 0.2 + (i + 1) * step, em: EMPHASIS.has(text.replace(/\W/g, "")) }));
}

/** Placeholder footage and copy, so a template can be read without any real clip. */
export function placeholderInput(format: FormatId, captionStyle: string): TemplateInput {
	const cut = (source: string, from: number, to: number) => ({ source, from, to, sourceIn: from, rate: 1, focus: { x: 0.5, y: 0.5 }, scale: 1, offsetY: 0 });
	return {
		mediaBase: "/",
		clip: {
			title: "Placeholder",
			fps: 24,
			audio: null,
			durationS: SECONDS,
			sources: [
				{ key: "guest", kind: "guest", label: "Guest", file: "placeholder/guest.mp4", synced: true },
				{ key: "ridd", kind: "host", label: "Ridd", file: "placeholder/host.mp4", synced: true },
				{ key: "screenshare", kind: "screen", label: "Screen share", file: "placeholder/screen.mp4", synced: true },
			],
		},
		concept: {
			format,
			captionStyle,
			endCap: false,
			props: {},
			cuts: [cut("guest", 0, 3.5), cut("screenshare", 3.5, 8), cut("ridd", 8, 9.5), cut("guest", 9.5, SECONDS)],
			bubbles: [{ source: "guest", from: 3.5, to: 8, focus: { x: 0.5, y: 0.4 } }],
			overlays: [{ type: "lower-third", from: 0.4, to: 3.2, title: "Guest Name", subtitle: "Role at Company" }],
			zooms: [{ from: 5, to: 7.5, level: 1.3, focus: { x: 0.6, y: 0.35 }, transitionIn: 0.22, transitionOut: 0.3 }],
		},
		captions: { words: sampleWords() },
	};
}
