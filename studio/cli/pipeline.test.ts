import { afterAll, expect, test } from "bun:test";
import { mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { capture, ffmpeg, run } from "./lib/run";

const dir = mkdtempSync(path.join(tmpdir(), "dive-trim-"));
afterAll(() => rmSync(dir, { recursive: true, force: true }));

const countFrames = async (file: string) => Number((await capture(["ffprobe", "-v", "error", "-count_frames", "-select_streams", "v:0", "-show_entries", "stream=nb_read_frames", "-of", "csv=p=0", file])).trim());

test("trim turns raw tracks into frame-exact clip files", async () => {
	for (const name of ["guest", "ridd"]) {
		await ffmpeg(["-f", "lavfi", "-i", "testsrc=size=320x180:rate=24:duration=6", "-f", "lavfi", "-i", "sine=frequency=440:duration=6", "-c:v", "libx264", "-c:a", "aac", "-shortest", path.join(dir, `${name}.mp4`)]);
	}
	const cuts = path.join(dir, "cuts.json");
	writeFileSync(cuts, JSON.stringify({ fps: 24, pieces: [{ n: 1, clip_in: 0, clip_out: 24, guest_in: 24, ridd_in: 24 }, { n: 2, clip_in: 24, clip_out: 60, guest_in: 72, ridd_in: 72 }] }));
	const out = path.join(dir, "out");
	await run(["python3", path.join(import.meta.dir, "../pipeline/dive_clip_trim.py"), dir, cuts, out, "--preset", "ultrafast"], { quiet: true });
	expect(await countFrames(path.join(out, "guest.mp4"))).toBe(60);
	expect(await countFrames(path.join(out, "ridd.mp4"))).toBe(60);
}, 30000);
