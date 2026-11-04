import { expect, test } from "bun:test";
import { momentsFrom, notesFrom, notesPrompt, stampsFrom } from "./moments";

const route = (t: number, query: string) => ({ k: "route", t, path: `/#/clips/james/random?${query}` });

test("reads the playhead out of route events", () => {
	const stamps = stampsFrom([{ k: "click", t: 5 }, route(100, "c=a&t=12.50"), route(600, "c=b&r=2&t=13.00"), { k: "route", t: 700, path: "/#/" }]);
	expect(stamps).toEqual([
		{ atMs: 100, clipTime: 12.5, concept: "a", round: null },
		{ atMs: 600, clipTime: 13, concept: "b", round: 2 },
	]);
});

test("ties each sentence to the moment on screen", () => {
	const stamps = stampsFrom([route(0, "c=a&t=1.00"), route(2000, "c=a&t=40.00"), route(4000, "c=a&t=44.00")]);
	const moments = momentsFrom([{ start_ms: 500, end_ms: 1500, text: "Bigger caption." }, { start_ms: 2500, end_ms: 4500, text: "This zoom is too slow." }], stamps);
	expect(moments.map((moment) => [moment.clipFrom, moment.clipTo])).toEqual([[1, 1], [40, 44]]);
});

test("gives nothing when the recording never touched a clip", () => {
	expect(momentsFrom([{ start_ms: 0, end_ms: 10, text: "Hi" }], [])).toEqual([]);
});

test("a note breaks when the thought ends or the playhead moves on", () => {
	const stamps = [
		{ atMs: 0, clipTime: 10, concept: "a", round: 1 },
		{ atMs: 3000, clipTime: 40, concept: "a", round: 1 },
	];
	const notes = notesFrom(
		[
			{ start_ms: 0, end_ms: 800, text: "Make this caption" },
			{ start_ms: 800, end_ms: 1600, text: "bigger." },
			{ start_ms: 1700, end_ms: 2600, text: "And warmer" },
			{ start_ms: 3100, end_ms: 3900, text: "this zoom is slow" },
		],
		stamps,
	);
	expect(notes.map((note) => [note.clipFrom, note.text])).toEqual([[10, "Make this caption bigger."], [10, "And warmer"], [40, "this zoom is slow"]]);
});

test("the prompt groups notes by concept in clip order", () => {
	const note = (clipFrom: number, concept: string, text: string) => ({ id: text, clipFrom, clipTo: clipFrom, concept, round: 1, text });
	const prompt = notesPrompt({ guest: "g", slug: "s", title: "T", fps: 24 }, [{ id: "a", name: "Sky", round: 1 }], [note(9, "a", "Second."), note(2, "a", "First.")], (t) => `${t}s`);
	expect(prompt).toContain("Concept a, Sky, round 1:\n- 2s: First.\n- 9s: Second.");
});
