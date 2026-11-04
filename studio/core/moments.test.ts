import { expect, test } from "bun:test";
import { momentsFrom, notesFrom, notesPrompt, scenesOf, stampsFrom } from "./moments";

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

test("a note holds a whole thought, even if the playhead moves during it", () => {
	const stamps = [
		{ atMs: 0, clipTime: 1, concept: "a", round: 1 },
		{ atMs: 1000, clipTime: 12, concept: "a", round: 1 },
	];
	const notes = notesFrom(
		[
			{ start_ms: 0, end_ms: 900, text: "Like we" },
			{ start_ms: 1100, end_ms: 2000, text: "should split it." },
			{ start_ms: 2100, end_ms: 2600, text: "Next thought" },
		],
		stamps,
	);
	expect(notes.map((note) => [note.clipFrom, note.clipTo, note.text])).toEqual([[1, 12, "Like we should split it."], [12, 12, "Next thought"]]);
});

const cut = (source: string, from: number, to: number, label?: string) => ({ source, from, to, sourceIn: from, rate: 1, focus: { x: 0.5, y: 0.5 }, scale: 1, offsetY: 0, label });
const clip = { guest: "g", slug: "s", title: "T", fps: 24, durationS: 20, sources: [{ key: "ridd", label: "Ridd" }, { key: "guest", label: "James" }] };
const concept = { id: "a", name: "Sky", round: 1, cuts: [cut("ridd", 0, 8, "Ridd and James"), cut("guest", 8, 20)], bubbles: [], zooms: [], overlays: [], removals: [] };
const note = (clipFrom: number, clipTo: number, text: string) => ({ id: text, clipFrom, clipTo, concept: "a", round: 1, text });

test("notes sit under the scene they were spoken in", () => {
	const prompt = notesPrompt(clip, [concept], [note(10, 11, "Later."), note(2, 3, "Early.")], (t) => `${t}s`);
	expect(prompt).toContain("Scene 1, Ridd and James (0s to 8s):\n- Early.\n\nScene 2, James (8s to 20s):\n- Later.");
});

test("a note that crosses scenes says so", () => {
	expect(notesPrompt(clip, [concept], [note(2, 12, "Split it.")], (t) => `${t}s`)).toContain("- Split it. (moved on to scene 2 while saying this)");
});

test("scenes follow cuts on the shortened timeline", () => {
	const scenes = scenesOf(clip, { ...concept, removals: [{ from: 2, to: 4 }] });
	expect(scenes.map((scene) => [scene.from, scene.to])).toEqual([[0, 2], [2, 6], [6, 18]]);
});
