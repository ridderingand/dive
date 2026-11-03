import { expect, test } from "bun:test";
import { captionStyles } from "../system/dive";
import { templates } from "../templates/registry";
import { loadAllClips } from "./lib/load";

test("every clip and concept in the repo is valid", () => {
	const clips = loadAllClips();
	expect(clips.length).toBeGreaterThan(0);
	for (const { clip, concepts } of clips) {
		for (const concept of concepts) {
			expect(templates.some((template) => template.id === concept.template)).toBe(true);
			expect(concept.captionStyle in captionStyles).toBe(true);
			for (const item of [...concept.cuts, ...concept.bubbles]) expect(clip.sources.some((source) => source.key === item.source)).toBe(true);
		}
	}
});
