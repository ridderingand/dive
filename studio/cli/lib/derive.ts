import { existsSync, mkdirSync, statSync } from "node:fs";
import path from "node:path";
import type { Clip } from "../../core/schema";
import { writeJson } from "./load";
import { derivedDir, mediaPath } from "./paths";
import { ffmpeg } from "./run";

const PEAKS_PER_SECOND = 40;

const isFresh = (output: string, input: string) => existsSync(output) && statSync(output).mtimeMs >= statSync(input).mtimeMs;

/** Loudness peaks for the timeline waveform, 0 to 1. */
export async function buildPeaks(clip: Clip): Promise<string | null> {
	if (!clip.audio || !existsSync(mediaPath(clip.audio))) return null;
	const relative = `${derivedDir(clip.guest, clip.slug)}/peaks.json`;
	const output = mediaPath(relative);
	if (isFresh(output, mediaPath(clip.audio))) return relative;
	mkdirSync(path.dirname(output), { recursive: true });
	const raw = `${output}.f32`;
	await ffmpeg(["-i", mediaPath(clip.audio), "-ac", "1", "-ar", "4000", "-f", "f32le", raw]);
	const samples = new Float32Array(await Bun.file(raw).arrayBuffer());
	const step = Math.floor(4000 / PEAKS_PER_SECOND);
	const peaks: number[] = [];
	for (let i = 0; i < samples.length; i += step) {
		let peak = 0;
		for (let j = i; j < Math.min(i + step, samples.length); j += 1) peak = Math.max(peak, Math.abs(samples[j] ?? 0));
		peaks.push(peak);
	}
	const top = Math.max(...peaks, 0.001);
	writeJson(output, { perSecond: PEAKS_PER_SECOND, peaks: peaks.map((peak) => Math.round((peak / top) ** 0.7 * 100) / 100) });
	await Bun.file(raw).delete();
	return relative;
}

/** A small synced copy of each per-person file, for the sources wall. */
export async function buildProxy(clip: Clip, sourceFile: string, key: string): Promise<string | null> {
	if (!existsSync(mediaPath(sourceFile))) return null;
	const relative = `${derivedDir(clip.guest, clip.slug)}/proxy-${key}.mp4`;
	const output = mediaPath(relative);
	if (isFresh(output, mediaPath(sourceFile))) return relative;
	mkdirSync(path.dirname(output), { recursive: true });
	await ffmpeg(["-i", mediaPath(sourceFile), "-vf", "scale=-2:270", "-c:v", "libx264", "-preset", "veryfast", "-crf", "32", "-g", "12", "-an", "-movflags", "+faststart", output]);
	return relative;
}
