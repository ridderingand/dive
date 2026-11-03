import { copyFileSync, existsSync, linkSync, mkdirSync, readFileSync } from "node:fs";
import path from "node:path";
import { Captions, Concept, type Clip, type ConceptInput, type Source } from "../../core/schema";
import { loadClip, saveConcept, writeJson } from "../lib/load";
import { clipDir, mediaPath, ROOT } from "../lib/paths";

type Layer = Record<string, any>;
type AssetMapEntry = { name: string; displayName: string; path: string };

const GUEST = "james-mcdonald";

const PLAN = [
	{ slug: "the-random-button-era-of-design", comps: [
		{ comp: "comp-layer-08d12292", id: "a", name: "Sky labels", intent: "Two-word labels with Sky emphasis. The current favourite.", style: "sky-label", status: "in-review" },
		{ comp: "comp-layer-93d9e875", id: "b", name: "Tanker words", intent: "One loud word at a time. Does it feel more like the feed?", style: "sky-tanker", status: "draft" },
		{ comp: "comp-layer-453cbbeb", id: "c", name: "Clash words", intent: "Same rhythm as Tanker in calmer type.", style: "sky-clash", status: "draft" },
	] },
	{ slug: "quicker-in-claude-than-figma", comps: [{ comp: "claude-figma", id: "a", name: "Sky labels", intent: "The house look on a short clip.", style: "sky-label", status: "in-review" }] },
	{ slug: "great-designers-self-plagiarize", comps: [{ comp: "self-plagiarize", id: "a", name: "Sky labels", intent: "The house look over the cubes B-roll.", style: "sky-label", status: "in-review" }] },
	{ slug: "my-first-project-as-a-builder", comps: [{ comp: "first-project", id: "a", name: "Sky labels", intent: "The house look over the face mesh B-roll.", style: "sky-label", status: "in-review" }] },
] as const;

function place(from: string, to: string) {
	mkdirSync(path.dirname(to), { recursive: true });
	if (existsSync(to)) return;
	try {
		linkSync(from, to);
	} catch {
		copyFileSync(from, to);
	}
}

const brollKey = (name: string) => name.replace(/\.mp4$/, "");

function sourceFor(assetId: string, assets: Record<string, AssetMapEntry>, slug: string, seen: Map<string, Source>): Source {
	const known = seen.get(assetId);
	if (known) return known;
	const asset = assets[assetId];
	if (!asset) throw new Error(`Asset ${assetId} was not pulled`);
	const pulled = path.join(ROOT, asset.path);
	const name = asset.name;
	let source: Source;
	if (name === "james.mp4") source = { key: "guest", kind: "guest", label: "James McDonald", file: `${GUEST}/${slug}/guest.mp4`, synced: true };
	else if (name === "ridd.mp4") source = { key: "ridd", kind: "host", label: "Ridd", file: `${GUEST}/${slug}/ridd.mp4`, synced: true };
	else if (name === "screenshare.mp4") source = { key: "screenshare", kind: "screen", label: "Screen share", file: `${GUEST}/${slug}/screenshare.mp4`, synced: true };
	else source = { key: brollKey(name), kind: "broll", label: asset.displayName, file: `${GUEST}/_broll/${name}`, synced: false };
	place(pulled, mediaPath(source.file));
	seen.set(assetId, source);
	return source;
}

const assetId = (src: string) => src.replace("asset://", "");

function layerToConcept(scene: Layer, plan: (typeof PLAN)[number]["comps"][number], assets: Record<string, AssetMapEntry>, slug: string, seen: Map<string, Source>): ConceptInput {
	const videos: Layer[] = scene.layers.filter((layer: Layer) => layer.type === "video");
	const cuts = videos.filter((layer) => !layer.cornerRadius).map((layer) => ({
		source: sourceFor(assetId(layer.src), assets, slug, seen).key,
		from: layer.startTime,
		to: layer.endTime,
		sourceIn: layer.videoStartTime,
		rate: layer.videoPlaybackRate ?? 1,
		focus: layer.objectPosition ?? { x: 0.5, y: 0.5 },
		scale: layer.scale ?? 1,
		offsetY: (layer.y ?? 540) - 540,
		label: layer.name,
	}));
	const bubbles = videos.filter((layer) => layer.cornerRadius).map((layer) => ({
		source: sourceFor(assetId(layer.src), assets, slug, seen).key,
		from: layer.startTime,
		to: layer.endTime,
		sourceIn: layer.videoStartTime,
		focus: layer.objectPosition ?? { x: 0.6, y: 0.42 },
		x: layer.x,
		y: layer.y,
		size: layer.width,
	}));
	const zooms = (scene.operations ?? []).filter((op: Layer) => op.kind === "zoom").map((op: Layer) => ({
		from: op.timing.start.time,
		to: op.timing.duration.until.time,
		level: op.level,
		focus: op.focus,
		transitionIn: op.transitionIn,
		transitionOut: op.transitionOut,
	}));
	return {
		id: plan.id,
		name: plan.name,
		intent: plan.intent,
		template: "talk-square",
		format: "square",
		round: 1,
		status: plan.status,
		captionStyle: plan.style,
		cuts,
		bubbles,
		zooms,
		history: [{ round: 1, date: "2026-11-03", summary: `Rebuilt from the Mixture composition ${plan.comp}.` }],
	};
}

function captionLines(scene: Layer) {
	const groups = scene.layers.filter((layer: Layer) => layer.repeat?.from?.[0]?.line !== undefined);
	const seen = new Map<string, { line: string; start: number; end: number; em: boolean }>();
	for (const group of groups) {
		const emphasis = /emphasis/i.test(group.name ?? "");
		for (const item of group.repeat.from as { line: string; start: number; end: number; em?: number }[]) {
			const key = `${item.start}-${item.line}`;
			const em = emphasis || Boolean(item.em) || Boolean(seen.get(key)?.em);
			seen.set(key, { line: item.line, start: item.start, end: item.end, em });
		}
	}
	return [...seen.values()].sort((a, b) => a.start - b.start);
}

export function importMixture(dslFile: string, assetFile: string) {
	const project = JSON.parse(readFileSync(dslFile, "utf8")).project as Layer;
	const assets = JSON.parse(readFileSync(assetFile, "utf8")) as Record<string, AssetMapEntry>;
	const comps = new Map<string, Layer>(project.compositions.map((comp: Layer) => [comp.id, comp]));

	for (const plan of PLAN) {
		const seen = new Map<string, Source>();
		const dir = clipDir(GUEST, plan.slug);
		const primary = comps.get(plan.comps[0].comp);
		if (!primary) throw new Error(`Missing composition ${plan.comps[0].comp}`);
		const scene = primary.scenes[0] as Layer;
		const audioId = assetId(primary.audioTracks[0].src);
		const audioAsset = assets[audioId];
		if (!audioAsset) throw new Error("Dialogue was not pulled");
		const audio = `${GUEST}/${plan.slug}/audio.m4a`;
		place(path.join(ROOT, audioAsset.path), mediaPath(audio));

		const concepts = plan.comps.map((item) => {
			const comp = comps.get(item.comp);
			if (!comp) throw new Error(`Missing composition ${item.comp}`);
			return Concept.parse(layerToConcept(comp.scenes[0], item, assets, plan.slug, seen));
		});
		for (const concept of concepts) saveConcept(dir, concept);

		const transcript = JSON.parse(readFileSync(path.join(path.dirname(path.join(ROOT, audioAsset.path)), "transcript.json"), "utf8")) as { words: { word: string; start: number; end: number }[] };
		const lines = captionLines(scene);
		const emphasised = lines.filter((line) => line.em);
		const words = transcript.words.map((word, i) => ({
			i,
			text: word.word,
			start: word.start,
			end: word.end,
			speaker: null,
			em: emphasised.some((line) => word.start + 0.001 >= line.start && word.start < line.end),
		}));
		writeJson(path.join(dir, "captions.json"), Captions.parse({ format: "dive-word-captions/v1", clip: plan.slug, source: "mixture-transcript", duration_s: scene.duration, words, lines }));

		const { clip } = loadClip(GUEST, plan.slug);
		const next: Clip = { ...clip, durationS: scene.duration, fps: primary.fps, format: "square", audio, sources: [...seen.values()] };
		writeJson(path.join(dir, "clip.json"), next);
	}
}
