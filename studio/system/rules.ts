export type Rule = { id: string; title: string; detail: string; group: "Pacing" | "Picture" | "Captions" | "Process"; check?: string };

/** House rules for Dive clips. A rule with `check` is enforced by core/checks.ts. */
export const rules: Rule[] = [
	{ id: "visual-early", group: "Pacing", title: "Show something fast", detail: "Get a visual or screen share on screen as soon as possible after the guest's first sentence.", check: "visual-early" },
	{ id: "hard-end", group: "Pacing", title: "End hard on the payoff", detail: "The clip ends on the Payoff line. No trailing air, no outro under it unless a concept is testing one." },
	{ id: "length", group: "Pacing", title: "Match the target length", detail: "The cut should match the Length in Notion, and shorts should stay at 40 seconds or longer.", check: "length" },
	{ id: "demo-wide", group: "Picture", title: "Demos can stay wide", detail: "Demo-heavy clips can stay 16:9 with strategic zooms on the screen share instead of a vertical crop." },
	{ id: "frame-ui", group: "Picture", title: "Frame the thing being discussed", detail: "Crop screen shares to the UI under discussion, not the centre of the recording." },
	{ id: "bubble-on-screen", group: "Picture", title: "Keep the speaker present", detail: "Whenever a screen share or B-roll fills the frame, keep the speaker in a bubble.", check: "bubble-on-screen" },
	{ id: "hard-cuts", group: "Picture", title: "Hard cuts between speakers", detail: "Picture changes are hard cuts. Motion comes from zooms and captions, not transitions." },
	{ id: "brand-library", group: "Picture", title: "Use the library", detail: "Use Dive wordmark, palette, gradients and snorkel from the library instead of inventing brand." },
	{ id: "word-timing", group: "Captions", title: "Per-word timing from the final cut", detail: "Captions store timing per word, taken from Descript's final cut. Templates decide how words group on screen.", check: "word-timing" },
	{ id: "emphasis", group: "Captions", title: "Emphasis comes from the brief", detail: "Bold words in the Notion caption copy are the emphasis words. Spelling follows the caption copy too.", check: "emphasis" },
	{ id: "descript-source", group: "Process", title: "Descript owns the cut", detail: "Never edit Descript compositions from here. A recut happens in Descript, then flows back through cuts.json." },
	{ id: "draft-only", group: "Process", title: "Drafts until approved", detail: "Nothing is exported or published as final until Ridd or Anna asks." },
];
