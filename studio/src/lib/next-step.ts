import type { ManifestClip, StageId } from "@core/manifest";

const NEXT_STEP: Record<StageId, string> = {
	clip: "Waiting on tracks",
	files: "Ready for concepts",
	concepts: "Ready to render",
	review: "Out for review",
	final: "Exported",
};

export function nextStep(clip: ManifestClip) {
	if (clip.removed) return { text: "Removed in Descript", warn: false };
	if (clip.checks.some((check) => check.id === "cut-fresh" && check.level === "fail")) return { text: "Cut list out of date", warn: true };
	if (clip.concepts.some((concept) => concept.stale)) return { text: "Needs a new render", warn: true };
	if (clip.stage === "concepts" && clip.concepts.some((concept) => concept.current)) return { text: "Ready to share", warn: false };
	return { text: NEXT_STEP[clip.stage], warn: false };
}
