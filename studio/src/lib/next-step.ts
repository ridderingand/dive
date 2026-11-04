import type { ManifestClip, StageId } from "@core/manifest";

export type StatusTone = "idle" | "warn" | "ready" | "review" | "done";

const BY_STAGE: Record<StageId, { text: string; tone: StatusTone }> = {
	clip: { text: "Waiting on tracks", tone: "idle" },
	files: { text: "Ready for concepts", tone: "ready" },
	concepts: { text: "Ready to render", tone: "ready" },
	review: { text: "Out for review", tone: "review" },
	final: { text: "Exported", tone: "done" },
};

export function nextStep(clip: ManifestClip): { text: string; tone: StatusTone } | null {
	if (clip.posted) return { text: "Posted", tone: "done" };
	if (clip.checks.some((check) => check.id === "cut-fresh" && check.level === "fail")) return { text: "Cut list out of date", tone: "warn" };
	if (clip.concepts.some((concept) => concept.stale)) return { text: "Needs a new render", tone: "warn" };
	if (clip.stage === "concepts" && clip.concepts.some((concept) => concept.current)) return null;
	return BY_STAGE[clip.stage];
}
