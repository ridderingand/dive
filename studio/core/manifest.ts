import type { Check } from "./checks";
import type { Captions, Clip, Concept, Guest } from "./schema";

export const STAGES = [
	{ id: "clip", label: "Clip", detail: "Cut approved in Descript, brief in Notion" },
	{ id: "files", label: "Files", detail: "A synced file for each person" },
	{ id: "concepts", label: "Concepts", detail: "One or more templates applied" },
	{ id: "review", label: "Review", detail: "Rendered and out on Inflight" },
	{ id: "final", label: "Final", detail: "Picked and exported" },
] as const;
export type StageId = (typeof STAGES)[number]["id"];

export type RenderInfo = {
	round: number;
	preview: string;
	poster: string;
	sprite: string;
	hash: string;
	renderedAt: string;
	durationS: number;
	width: number;
	height: number;
	masterBytes: number;
	previewBytes: number;
	renderSeconds: number;
};

export type ManifestConcept = Concept & { renders: RenderInfo[]; current: RenderInfo | null; stale: boolean; checks: Check[]; finalFile: string | null };

export type ManifestFile = { key: string; kind: string; label: string; file: string; exists: boolean; bytes: number; proxy: string | null; synced: boolean; note?: string };

export type ManifestClip = Omit<Clip, "sources"> & {
	files: ManifestFile[];
	audioExists: boolean;
	captions: Pick<Captions, "words" | "lines" | "source"> | null;
	peaks: string | null;
	stage: StageId;
	checks: Check[];
	concepts: ManifestConcept[];
};

export type Manifest = {
	generatedAt: string;
	mode: "local" | "review";
	review: { title: string; note: string | null } | null;
	guests: Guest[];
	clips: ManifestClip[];
};
