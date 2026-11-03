import { describe, expect, test } from "bun:test";
import { activeAt, cleanWord, groupWords } from "./captions";

const word = (i: number, text: string, start: number, end: number, em = false) => ({ i, text, start, end, em });

describe("cleanWord", () => {
	test("drops punctuation but keeps contractions", () => {
		expect(cleanWord("Figma,")).toBe("Figma");
		expect(cleanWord("don't.")).toBe("don't");
		expect(cleanWord('"hello')).toBe("hello");
	});
});

describe("groupWords", () => {
	test("caps each chunk", () => {
		const lines = groupWords([word(0, "one", 0, 0.2), word(1, "two", 0.2, 0.4), word(2, "three", 0.4, 0.6)], 2);
		expect(lines.map((line) => line.line)).toEqual(["one two", "three"]);
	});
	test("starts a new chunk at a sentence end, a pause and an emphasis edge", () => {
		const lines = groupWords([word(0, "stop.", 0, 0.2), word(1, "go", 0.2, 0.4), word(2, "now", 1.4, 1.6), word(3, "big", 1.6, 1.8, true)], 4);
		expect(lines.map((line) => line.line)).toEqual(["stop", "go", "now", "big"]);
		expect(lines[3]?.em).toBe(true);
	});
});

describe("activeAt", () => {
	const items = [{ start: 0, end: 1 }, { start: 2, end: 3 }];
	test("finds the span holding a time", () => {
		expect(activeAt(items, 2.5)).toBe(items[1]);
	});
	test("finds nothing in a gap or at an end", () => {
		expect(activeAt(items, 1.5)).toBeUndefined();
		expect(activeAt(items, 3)).toBeUndefined();
	});
});
