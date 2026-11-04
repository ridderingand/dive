import { expect, test } from "bun:test";
import { momentsFrom, stampsFrom } from "./moments";

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
