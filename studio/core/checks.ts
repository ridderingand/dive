import { cleanWord } from "./captions";
import { captionStyles } from "../system/dive";
import { templates } from "../templates/registry";
import type { Captions, Clip, Concept, Source } from "./schema";

export type CheckLevel = "pass" | "warn" | "fail";
export type Check = { id: string; title: string; level: CheckLevel; message: string; at?: number };

const SHORT_MINIMUM_S = 40;
const VISUAL_GRACE_S = 3;

function isCameraKind(source: Source | undefined) {
	return source?.kind === "guest" || source?.kind === "host";
}

function firstSentenceEnd(captions: Captions | null): number | null {
	const end = captions?.words.find((word) => /[.!?]$/.test(word.text));
	return end ? end.end : null;
}

/** The bold words in Notion's caption copy, which are the words a clip should emphasise. */
export function emphasisFromCopy(copy: string | null): Set<string> {
	if (!copy) return new Set();
	return new Set([...copy.matchAll(/\*\*(.+?)\*\*/g)].filter((match) => !match[1]?.trim().endsWith(":")).flatMap((match) => (match[1] ?? "").split(/\s+/)).map((word) => cleanWord(word).toLowerCase()).filter(Boolean));
}

export function clipChecks(clip: Clip, captions: Captions | null): Check[] {
	const checks: Check[] = [];
	if (clip.durationS !== null && clip.descriptDurationS !== null) {
		const stale = Math.abs(clip.durationS - clip.descriptDurationS) > 0.5;
		checks.push({
			id: "cut-fresh",
			title: "Cut list matches Descript",
			level: stale ? "fail" : "pass",
			message: stale ? `cuts.json is ${clip.durationS.toFixed(1)}s, but the Descript composition is ${clip.descriptDurationS.toFixed(1)}s. Re-export the cut.` : "The cut list matches the Descript composition.",
		});
	}
	if (clip.durationS !== null && clip.lengthTargetS !== null) {
		const drift = Math.abs(clip.durationS - clip.lengthTargetS);
		checks.push({
			id: "length",
			title: "Length matches Notion",
			level: drift > 1 ? "warn" : "pass",
			message: drift > 1 ? `The cut runs ${clip.durationS.toFixed(1)}s, but Notion says ${clip.lengthTargetS}s.` : `${clip.durationS.toFixed(1)}s, as briefed.`,
		});
	}
	if (clip.durationS !== null && clip.durationS < SHORT_MINIMUM_S) {
		checks.push({ id: "minimum", title: "Over the 40s minimum", level: "warn", message: `${clip.durationS.toFixed(1)}s is under the 40s minimum.` });
	}
	if (!captions) {
		checks.push({ id: "word-timing", title: "Per-word captions", level: "fail", message: "No captions yet." });
	} else if (captions.source === "srt-estimate") {
		checks.push({ id: "word-timing", title: "Per-word captions", level: "warn", message: "Word timing is estimated from phrase-level captions. Regenerate from the Descript final cut." });
	} else {
		checks.push({ id: "word-timing", title: "Per-word captions", level: "pass", message: `${captions.words.length} words timed.` });
	}
	const bold = emphasisFromCopy(clip.captionCopy);
	if (captions && bold.size > 0) {
		const emphasised = new Set(captions.words.filter((word) => word.em).map((word) => cleanWord(word.text).toLowerCase()));
		const missing = [...bold].filter((word) => !emphasised.has(word));
		checks.push({
			id: "emphasis",
			title: "Emphasis follows the brief",
			level: missing.length > 0 ? "warn" : "pass",
			message: missing.length > 0 ? `Not emphasised: ${missing.slice(0, 6).join(", ")}${missing.length > 6 ? ` and ${missing.length - 6} more` : ""}.` : "Every bold word in the brief is emphasised.",
		});
	}
	return checks;
}

export function conceptChecks(clip: Clip, concept: Concept, captions: Captions | null): Check[] {
	const checks: Check[] = [];
	const sources = new Map(clip.sources.map((source) => [source.key, source]));
	const duration = clip.durationS ?? 0;

	const sorted = [...concept.cuts].sort((a, b) => a.from - b.from);
	let cursor = 0;
	let gap: number | null = null;
	for (const cut of sorted) {
		if (cut.from - cursor > 0.05 && gap === null) gap = cursor;
		cursor = Math.max(cursor, cut.to);
	}
	if (duration - cursor > 0.05 && gap === null) gap = cursor;
	checks.push(
		gap === null
			? { id: "coverage", title: "Picture covers the clip", level: "pass", message: "No black gaps." }
			: { id: "coverage", title: "Picture covers the clip", level: "fail", message: `There is no picture at ${gap.toFixed(2)}s.`, at: gap },
	);

	const sentenceEnd = firstSentenceEnd(captions);
	const firstVisual = sorted.find((cut) => !isCameraKind(sources.get(cut.source)));
	if (firstVisual) {
		const deadline = (sentenceEnd ?? 0) + VISUAL_GRACE_S;
		const early = firstVisual.from <= deadline;
		checks.push({
			id: "visual-early",
			title: "Visual lands early",
			level: early ? "pass" : "warn",
			message: early ? `First visual at ${firstVisual.from.toFixed(1)}s.` : `First visual is at ${firstVisual.from.toFixed(1)}s, after the first sentence ends at ${(sentenceEnd ?? 0).toFixed(1)}s.`,
			at: firstVisual.from,
		});
	} else if (clip.sources.some((source) => !isCameraKind(source))) {
		checks.push({ id: "visual-early", title: "Visual lands early", level: "warn", message: "This concept never leaves the cameras, though the clip has screen material." });
	}

	const uncovered = sorted.find((cut) => {
		if (isCameraKind(sources.get(cut.source))) return false;
		const covered = concept.bubbles.filter((bubble) => bubble.from < cut.to && bubble.to > cut.from).reduce((total, bubble) => total + Math.min(bubble.to, cut.to) - Math.max(bubble.from, cut.from), 0);
		return covered / (cut.to - cut.from) < 0.9;
	});
	if (sorted.some((cut) => !isCameraKind(sources.get(cut.source)))) {
		checks.push(
			uncovered
				? { id: "bubble-on-screen", title: "Speaker stays present", level: "warn", message: `No bubble over ${uncovered.label ?? uncovered.source} at ${uncovered.from.toFixed(1)}s.`, at: uncovered.from }
				: { id: "bubble-on-screen", title: "Speaker stays present", level: "pass", message: "A bubble covers every screen moment." },
		);
	}

	const screenCards = concept.overlays.filter((overlay) => overlay.type === "screen-card");
	const template = templates.find((item) => item.id === concept.template);
	if (!template) checks.push({ id: "template", title: "Template exists", level: "fail", message: `There is no template "${concept.template}".` });
	else {
		if (!template.formats.includes(concept.format)) checks.push({ id: "format", title: "Template supports this format", level: "fail", message: `${template.name} doesn't do ${concept.format}. It does ${template.formats.join(", ")}.` });
		const unknownProps = Object.keys(concept.props).filter((key) => !template.knobs.some((knob) => knob.key === key));
		if (unknownProps.length > 0) checks.push({ id: "props", title: "Settings are real", level: "warn", message: `${template.name} ignores ${unknownProps.join(", ")}.` });
	}
	if (!(concept.captionStyle in captionStyles)) checks.push({ id: "caption-style", title: "Caption style exists", level: "fail", message: `There is no caption style "${concept.captionStyle}".` });

	const splits = concept.cuts.flatMap((cut) => (cut.split ? [{ source: cut.split.source, from: cut.from }] : []));
	const unknown = [...concept.cuts, ...concept.bubbles, ...screenCards, ...splits].find((item) => !sources.has(item.source));
	if (unknown) checks.push({ id: "sources", title: "Sources exist", level: "fail", message: `Uses "${unknown.source}", which this clip doesn't have.`, at: unknown.from });
	return checks;
}
