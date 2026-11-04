import { existsSync, mkdirSync, statSync } from "node:fs";
import path from "node:path";
import type { Clip } from "../../core/schema";
import { derivedDir, mediaPath } from "./paths";
import { ffmpeg } from "./run";

const isFresh = (output: string, input: string) => existsSync(output) && statSync(output).mtimeMs >= statSync(input).mtimeMs;

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
