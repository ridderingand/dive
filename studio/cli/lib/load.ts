import { existsSync, readdirSync, readFileSync, writeFileSync, mkdirSync } from "node:fs";
import path from "node:path";
import { Captions, Clip, Concept, Guest } from "../../core/schema";
import { CLIPS, clipDir, listDirs } from "./paths";

export type LoadedClip = { clip: Clip; captions: Captions | null; concepts: Concept[]; dir: string };

const readJson = (file: string): unknown => JSON.parse(readFileSync(file, "utf8"));

export function writeJson(file: string, value: unknown) {
	mkdirSync(path.dirname(file), { recursive: true });
	writeFileSync(file, `${JSON.stringify(value, null, "\t")}\n`);
}

export function loadGuests(): Guest[] {
	return listDirs(CLIPS).map((slug) => Guest.parse(readJson(path.join(CLIPS, slug, "guest.json"))));
}

export function loadClip(guest: string, slug: string): LoadedClip {
	const dir = clipDir(guest, slug);
	const clip = Clip.parse(readJson(path.join(dir, "clip.json")));
	const captionsFile = path.join(dir, "captions.json");
	const captions = existsSync(captionsFile) ? Captions.parse(readJson(captionsFile)) : null;
	const conceptsDir = path.join(dir, "concepts");
	const concepts = existsSync(conceptsDir)
		? readdirSync(conceptsDir).filter((file) => file.endsWith(".json")).sort().map((file) => Concept.parse(readJson(path.join(conceptsDir, file))))
		: [];
	return { clip, captions, concepts, dir };
}

export function loadAllClips(): LoadedClip[] {
	return listDirs(CLIPS).flatMap((guest) => listDirs(path.join(CLIPS, guest)).map((slug) => loadClip(guest, slug)));
}

/** Accepts "guest/clip" or a unique part of a clip slug. */
export function findClip(query: string): LoadedClip {
	const all = loadAllClips();
	const exact = all.find(({ clip }) => `${clip.guest}/${clip.slug}` === query || clip.slug === query);
	if (exact) return exact;
	const matches = all.filter(({ clip }) => `${clip.guest}/${clip.slug}`.includes(query));
	const match = matches[0];
	if (matches.length === 1 && match) return match;
	if (matches.length === 0) throw new Error(`No clip matches "${query}". Run: bun run dive list`);
	throw new Error(`"${query}" matches ${matches.length} clips: ${matches.map(({ clip }) => clip.slug).join(", ")}`);
}

export function saveConcept(dir: string, concept: Concept) {
	writeJson(path.join(dir, "concepts", `${concept.id}.json`), concept);
}
