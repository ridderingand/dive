import { describe, expect, test } from "bun:test";
import { applyRemovals, keptSpans, normalizeRemovals, toClip, toEdited } from "./removals";
import type { TemplateInput } from "./schema";

const removals = [{ from: 4, to: 6 }, { from: 8, to: 9 }];

const cut = (source: string, from: number, to: number) => ({ source, from, to, sourceIn: from, rate: 1, focus: { x: 0.5, y: 0.5 }, scale: 1, offsetY: 0 });
const input: TemplateInput = {
	mediaBase: "",
	clip: { title: "T", fps: 24, audio: "a.m4a", sources: [], durationS: 10 },
	concept: { cuts: [cut("a", 0, 5), cut("b", 5, 10)], bubbles: [{ source: "a", from: 5, to: 10, focus: { x: 0.5, y: 0.5 } }], zooms: [], overlays: [], captionStyle: "sky-label", format: "square", endCap: false, props: {} },
	captions: { words: [{ i: 0, text: "keep", start: 1, end: 2 }, { i: 1, text: "gone", start: 4.5, end: 5 }, { i: 2, text: "late", start: 7, end: 7.5 }] },
};

describe("timeline maths", () => {
	test("overlapping removals merge", () => {
		expect(normalizeRemovals([{ from: 5, to: 7 }, { from: 2, to: 6 }])).toEqual([{ from: 2, to: 7 }]);
	});
	test("kept spans close up", () => {
		expect(keptSpans(10, removals)).toEqual([{ from: 0, to: 4, at: 0 }, { from: 6, to: 8, at: 4 }, { from: 9, to: 10, at: 6 }]);
	});
	test("times map both ways", () => {
		expect(toEdited(7, removals)).toBe(5);
		expect(toEdited(5, removals)).toBe(4);
		expect(toClip(5, removals)).toBe(7);
		expect(toClip(6.5, removals)).toBe(9.5);
	});
});

describe("applyRemovals", () => {
	const edited = applyRemovals(input, removals);
	test("shortens the clip and rejoins the dialogue", () => {
		expect(edited.clip.durationS).toBe(7);
		expect(edited.clip.audioSpans).toEqual([{ sourceFrom: 0, from: 0, to: 4 }, { sourceFrom: 6, from: 4, to: 6 }, { sourceFrom: 9, from: 6, to: 7 }]);
	});
	test("keeps each source in sync across the join", () => {
		expect(edited.concept.cuts.map((item) => [item.source, item.from, item.to, item.sourceIn])).toEqual([["a", 0, 4, 0], ["b", 4, 6, 6], ["b", 6, 7, 9]]);
		expect(edited.concept.bubbles.map((item) => [item.from, item.sourceIn])).toEqual([[4, 6], [6, 9]]);
	});
	test("drops removed words and moves the rest", () => {
		expect(edited.captions.words.map((word) => [word.text, word.start])).toEqual([["keep", 1], ["late", 5]]);
	});
	test("leaves a concept with no removals alone", () => {
		expect(applyRemovals(input, [])).toBe(input);
	});
});
