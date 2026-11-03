import { describe, expect, test } from "bun:test";
import { clipChecks, conceptChecks, emphasisFromCopy } from "./checks";
import { Captions, Clip, Concept } from "./schema";

const clip = Clip.parse({
	slug: "c",
	guest: "g",
	title: "T",
	status: "In design",
	lengthTargetS: 30,
	durationS: 30,
	sources: [
		{ key: "guest", kind: "guest", label: "G", file: "g.mp4" },
		{ key: "screenshare", kind: "screen", label: "S", file: "s.mp4" },
	],
});
const captions = Captions.parse({ format: "dive-word-captions/v1", clip: "c", source: "descript", words: [{ i: 0, text: "Hello.", start: 0, end: 2 }] });
const cut = (source: string, from: number, to: number) => ({ source, from, to, sourceIn: from });
const concept = (overrides: object) => Concept.parse({ id: "a", name: "A", intent: "", template: "talk-square", format: "square", captionStyle: "sky-label", cuts: [cut("screenshare", 0, 10), cut("guest", 10, 30)], bubbles: [{ source: "guest", from: 0, to: 10 }], ...overrides });
const level = (checks: { id: string; level: string }[], id: string) => checks.find((check) => check.id === id)?.level;

describe("emphasisFromCopy", () => {
	test("reads the bold words", () => {
		expect([...emphasisFromCopy("a **mind switch** and **Figma.**")]).toEqual(["mind", "switch", "figma"]);
	});
});

describe("clip checks", () => {
	test("flags a cut that drifted from Notion", () => {
		expect(level(clipChecks({ ...clip, lengthTargetS: 40 }, captions), "length")).toBe("warn");
	});
	test("flags clips under the minimum", () => {
		expect(level(clipChecks(clip, captions), "minimum")).toBe("warn");
	});
	test("flags estimated word timing", () => {
		expect(level(clipChecks(clip, { ...captions, source: "srt-estimate" }), "word-timing")).toBe("warn");
	});
});

describe("concept checks", () => {
	test("passes a complete concept", () => {
		const checks = conceptChecks(clip, concept({}), captions);
		expect(checks.every((check) => check.level === "pass")).toBe(true);
	});
	test("catches a gap in the picture", () => {
		const checks = conceptChecks(clip, concept({ cuts: [cut("guest", 0, 10), cut("guest", 12, 30)] }), captions);
		expect(checks.find((check) => check.id === "coverage")?.at).toBe(10);
	});
	test("catches a screen moment with no bubble", () => {
		expect(level(conceptChecks(clip, concept({ bubbles: [] }), captions), "bubble-on-screen")).toBe("warn");
	});
	test("catches a late first visual", () => {
		const late = concept({ cuts: [cut("guest", 0, 20), cut("screenshare", 20, 30)], bubbles: [{ source: "guest", from: 20, to: 30 }] });
		expect(level(conceptChecks(clip, late, captions), "visual-early")).toBe("warn");
	});
	test("catches an unknown source", () => {
		expect(level(conceptChecks(clip, concept({ cuts: [cut("nobody", 0, 30)], bubbles: [] }), captions), "sources")).toBe("fail");
	});
});
