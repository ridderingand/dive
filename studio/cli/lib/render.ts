import { existsSync, mkdirSync, rmSync, statSync } from "node:fs";
import path from "node:path";
import type { Concept, TemplateInput } from "../../core/schema";
import { FORMATS } from "../../core/schema";
import { END_CAP_SECONDS } from "../../core/time";
import { renderHash } from "./hash";
import { writeJson, type LoadedClip } from "./load";
import { startMediaServer } from "./media-server";
import { mediaPath, renderDir, ROOT, WORK } from "./paths";
import { ffmpeg, probeDuration, run } from "./run";

export type RenderRecord = { hash: string; renderedAt: string; durationS: number; width: number; height: number; masterBytes: number; previewBytes: number; renderSeconds: number };

// One per process, so a still can run while a long render keeps reading its own bundle.
const BUNDLE = path.join(WORK, `bundle-${process.pid}`);

// Remotion's own headless shell crashes at GPU start on this Mac, so renders prefer the installed Chrome.
const CHROME = process.env.DIVE_CHROME ?? "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const browserArgs = existsSync(CHROME) ? [`--browser-executable=${CHROME}`] : [];
const SPRITE_COLUMNS = 10;
export const SPRITE_WIDTH = 192;

export function buildInput(loaded: LoadedClip, concept: Concept, mediaBase: string): TemplateInput & { templateId: string } {
	const { clip, captions } = loaded;
	if (clip.durationS === null) throw new Error(`${clip.slug} has no cut length yet`);
	return {
		templateId: concept.template,
		mediaBase,
		clip: { title: clip.title, fps: clip.fps, audio: clip.audio, sources: clip.sources, durationS: clip.durationS },
		concept: { cuts: concept.cuts, bubbles: concept.bubbles, zooms: concept.zooms, captionStyle: concept.captionStyle, format: concept.format, endCap: concept.endCap, props: concept.props },
		captions: { words: captions?.words ?? [], lines: captions?.lines },
	};
}

export async function bundleVideo() {
	await run(["bunx", "remotion", "bundle", "video/index.ts", "--out-dir", BUNDLE, "--public-dir", "public", "--log", "error"], { cwd: ROOT, quiet: true });
}

/** Everything below the master derives from it, so what you review is what you ship. */
export async function deriveFromMaster(folder: string, spriteEvery: number) {
	const master = mediaPath(`${folder}/master.mp4`);
	await ffmpeg(["-i", master, "-vf", "scale=-2:'min(720,ih)'", "-c:v", "libx264", "-preset", "medium", "-crf", "27", "-g", "24", "-pix_fmt", "yuv420p", "-c:a", "aac", "-b:a", "96k", "-movflags", "+faststart", mediaPath(`${folder}/preview.mp4`)]);
	await ffmpeg(["-ss", "1", "-i", master, "-frames:v", "1", "-vf", "scale=640:-2", "-q:v", "4", mediaPath(`${folder}/poster.jpg`)]);
	const duration = await probeDuration(master);
	const tiles = Math.ceil(duration / spriteEvery);
	await ffmpeg(["-i", master, "-vf", `fps=1/${spriteEvery},scale=${SPRITE_WIDTH}:-2,tile=${SPRITE_COLUMNS}x${Math.ceil(tiles / SPRITE_COLUMNS)}`, "-frames:v", "1", "-q:v", "6", mediaPath(`${folder}/sprite.jpg`)]);
	return duration;
}

export async function renderConcept(loaded: LoadedClip, concept: Concept, options: { mediaBase: string; frames?: string; concurrency?: string }) {
	const { clip } = loaded;
	const folder = renderDir(clip.guest, clip.slug, concept.id, concept.round);
	mkdirSync(mediaPath(folder), { recursive: true });
	const propsFile = path.join(WORK, `props-${process.pid}-${clip.slug}-${concept.id}.json`);
	writeJson(propsFile, buildInput(loaded, concept, options.mediaBase));
	const master = mediaPath(`${folder}/master.mp4`);
	const started = performance.now();
	await run(
		["bunx", "remotion", "render", BUNDLE, "concept", master, `--props=${propsFile}`, "--codec=h264", "--crf=18", "--x264-preset=medium", "--audio-codec=aac", "--audio-bitrate=192k", `--concurrency=${options.concurrency ?? "60%"}`, "--log=error", "--overwrite", ...browserArgs, ...(options.frames ? [`--frames=${options.frames}`] : [])],
		{ cwd: ROOT },
	);
	const renderSeconds = Math.round((performance.now() - started) / 1000);
	const spriteEvery = 2;
	const durationS = await deriveFromMaster(folder, spriteEvery);
	const { width, height } = FORMATS[concept.format];
	const record: RenderRecord = {
		hash: renderHash(loaded, concept),
		renderedAt: new Date().toISOString(),
		durationS,
		width,
		height,
		masterBytes: statSync(master).size,
		previewBytes: statSync(mediaPath(`${folder}/preview.mp4`)).size,
		renderSeconds,
	};
	writeJson(mediaPath(`${folder}/render.json`), record);
	return { folder, record };
}

/** One frame, for checking a look without waiting on a full render. */
export async function renderStill(loaded: LoadedClip, concept: Concept, options: { mediaBase: string; frame: number; out: string; scale?: string }) {
	mkdirSync(path.dirname(options.out), { recursive: true });
	const propsFile = path.join(WORK, `props-${process.pid}-${loaded.clip.slug}-${concept.id}.json`);
	writeJson(propsFile, buildInput(loaded, concept, options.mediaBase));
	await run(["bunx", "remotion", "still", BUNDLE, "concept", options.out, `--props=${propsFile}`, `--frame=${options.frame}`, `--scale=${options.scale ?? "0.5"}`, "--image-format=jpeg", "--log=error", "--overwrite", ...browserArgs], { cwd: ROOT });
}

export async function withMedia<T>(work: (base: string) => Promise<T>) {
	const server = startMediaServer();
	try {
		return await work(server.base);
	} finally {
		server.stop();
		rmSync(BUNDLE, { recursive: true, force: true });
	}
}

export function expectedDuration(clipDuration: number, concept: Concept) {
	return clipDuration + (concept.endCap ? END_CAP_SECONDS : 0);
}

export const hasMaster = (folder: string) => existsSync(mediaPath(`${folder}/master.mp4`));
