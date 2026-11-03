import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import path from "node:path";
import { clipChecks, conceptChecks } from "../../core/checks";
import type { Manifest, ManifestClip, ManifestConcept, ManifestFile, RenderInfo, StageId } from "../../core/manifest";
import { buildPeaks, buildProxy } from "./derive";
import { renderHash } from "./hash";
import { loadAllClips, loadGuests, writeJson, type LoadedClip } from "./load";
import { MEDIA, mediaPath, PUBLIC, renderDir } from "./paths";
import type { RenderRecord } from "./render";

function renderList(loaded: LoadedClip, conceptId: string): RenderInfo[] {
	const { clip } = loaded;
	const base = mediaPath(`renders/${clip.guest}/${clip.slug}/${conceptId}`);
	if (!existsSync(base)) return [];
	return readdirSync(base)
		.filter((name) => /^r\d+$/.test(name) && existsSync(path.join(base, name, "render.json")))
		.map((name) => {
			const round = Number(name.slice(1));
			const folder = renderDir(clip.guest, clip.slug, conceptId, round);
			const record = JSON.parse(readFileSync(mediaPath(`${folder}/render.json`), "utf8")) as RenderRecord;
			return { ...record, round, preview: `${folder}/preview.mp4`, poster: `${folder}/poster.jpg`, sprite: `${folder}/sprite.jpg` };
		})
		.sort((a, b) => a.round - b.round);
}

function finalFile(loaded: LoadedClip, conceptId: string) {
	const relative = `exports/${loaded.clip.guest}/${loaded.clip.slug}-${conceptId}.mp4`;
	return existsSync(mediaPath(relative)) ? relative : null;
}

function stageOf(files: ManifestFile[], audioExists: boolean, concepts: ManifestConcept[]): StageId {
	if (concepts.some((concept) => concept.finalFile)) return "final";
	if (concepts.some((concept) => concept.current)) return "review";
	if (concepts.length > 0) return "concepts";
	const people = files.filter((file) => file.kind === "guest" || file.kind === "host");
	return people.length > 0 && people.every((file) => file.exists) && audioExists ? "files" : "clip";
}

export async function buildClip(loaded: LoadedClip): Promise<ManifestClip> {
	const { clip, captions } = loaded;
	const files: ManifestFile[] = [];
	for (const source of clip.sources) {
		const full = mediaPath(source.file);
		const exists = existsSync(full);
		files.push({ key: source.key, kind: source.kind, label: source.label, file: source.file, exists, bytes: exists ? statSync(full).size : 0, proxy: exists ? await buildProxy(clip, source.file, source.key) : null, synced: source.synced, note: source.note });
	}
	const concepts: ManifestConcept[] = loaded.concepts.map((concept) => {
		const renders = renderList(loaded, concept.id);
		const current = renders.find((render) => render.round === concept.round) ?? renders[renders.length - 1] ?? null;
		return { ...concept, renders, current, stale: current ? current.hash !== renderHash(loaded, concept) : false, checks: conceptChecks(clip, concept, captions), finalFile: finalFile(loaded, concept.id) };
	});
	const audioExists = Boolean(clip.audio && existsSync(mediaPath(clip.audio)));
	const { sources: _sources, ...rest } = clip;
	return {
		...rest,
		files,
		audioExists,
		captions: captions ? { words: captions.words, lines: captions.lines, source: captions.source } : null,
		peaks: await buildPeaks(clip),
		stage: stageOf(files, audioExists, concepts),
		checks: clipChecks(clip, captions),
		concepts,
	};
}

export async function buildManifest(): Promise<Manifest> {
	const clips: ManifestClip[] = [];
	for (const loaded of loadAllClips()) clips.push(await buildClip(loaded));
	return { generatedAt: new Date().toISOString(), mode: "local", review: null, guests: loadGuests(), clips };
}

export const MANIFEST_FILE = path.join(PUBLIC, "data", "studio.json");

export async function sync() {
	const manifest = await buildManifest();
	writeJson(MANIFEST_FILE, manifest);
	return manifest;
}

export { MEDIA };
