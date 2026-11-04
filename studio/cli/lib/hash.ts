import { createHash } from "node:crypto";
import { readdirSync, readFileSync, statSync } from "node:fs";
import path from "node:path";
import type { LoadedClip } from "./load";
import { ROOT } from "./paths";
import type { Concept } from "../../core/schema";

function walk(dir: string, into: string[] = []) {
	for (const name of readdirSync(dir).sort()) {
		const full = path.join(dir, name);
		if (statSync(full).isDirectory()) walk(full, into);
		else into.push(full);
	}
	return into;
}

let designHash: string | null = null;

/** Changes when any template or system file changes, which makes existing renders stale. */
function currentDesignHash() {
	if (designHash) return designHash;
	const hash = createHash("sha1");
	const code = walk(path.join(ROOT, "templates")).filter((file) => file.endsWith(".tsx"));
	for (const file of [...code, path.join(ROOT, "system/dive.ts")]) hash.update(readFileSync(file));
	designHash = hash.digest("hex");
	return designHash;
}

export function renderHash({ clip, captions }: LoadedClip, concept: Concept) {
	const { history: _history, status: _status, name: _name, intent: _intent, ...picture } = concept;
	return createHash("sha1").update(JSON.stringify({ picture, sources: clip.sources, audio: clip.audio, duration: clip.durationS, captions: captions?.words, lines: captions?.lines, design: currentDesignHash() })).digest("hex").slice(0, 12);
}
