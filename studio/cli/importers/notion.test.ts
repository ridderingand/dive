import { expect, test } from "bun:test";
import { slugify, splitTitle, srtToWords } from "./notion";

test("splitTitle separates the score", () => {
	expect(splitTitle("(90) When in Doubt Ease Out")).toEqual({ score: 90, title: "When in Doubt Ease Out" });
	expect(splitTitle("Plain Title")).toEqual({ score: null, title: "Plain Title" });
});

test("slugify drops apostrophes", () => {
	expect(slugify("Figma Isn't the Place to Make Product")).toBe("figma-isnt-the-place-to-make-product");
});

test("srtToWords spreads a cue across its words", () => {
	const words = srtToWords("1\n00:00:01,000 --> 00:00:02,000\nhi there\n");
	expect(words.map((word) => word.text)).toEqual(["hi", "there"]);
	expect(words[0]?.start).toBe(1);
	expect(words[1]?.end).toBe(2);
});
