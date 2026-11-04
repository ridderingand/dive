import type { Bubble, Cut, Overlay, Span, TemplateInput, Zoom } from "./schema";

type KeptSpan = { from: number; to: number; at: number };

export function normalizeRemovals(removals: Span[]): Span[] {
	const merged: Span[] = [];
	for (const span of [...removals].sort((a, b) => a.from - b.from)) {
		const last = merged[merged.length - 1];
		if (last && span.from <= last.to) last.to = Math.max(last.to, span.to);
		else merged.push({ ...span });
	}
	return merged;
}

/** The parts of the clip that survive, and where each lands on the shortened timeline. */
export function keptSpans(duration: number, removals: Span[]): KeptSpan[] {
	const kept: KeptSpan[] = [];
	let cursor = 0;
	let at = 0;
	for (const span of [...normalizeRemovals(removals), { from: duration, to: duration }]) {
		const to = Math.min(span.from, duration);
		if (to > cursor) {
			kept.push({ from: cursor, to, at });
			at += to - cursor;
		}
		cursor = Math.max(cursor, span.to);
	}
	return kept;
}

/** Clip time to shortened time. Anything inside a removal lands on the join. */
export function toEdited(t: number, removals: Span[]): number {
	return normalizeRemovals(removals).reduce((edited, span) => (t <= span.from ? edited : edited - (Math.min(t, span.to) - span.from)), t);
}

/** Shortened time back to clip time, so the transcript and files can follow a rendered video. */
export function toClip(t: number, removals: Span[]): number {
	let clip = t;
	for (const span of normalizeRemovals(removals)) {
		if (clip < span.from) break;
		clip += span.to - span.from;
	}
	return clip;
}

function splitAcross<T extends { from: number; to: number }>(item: T, kept: KeptSpan[], build: (from: number, to: number, offset: number) => T): T[] {
	return kept.flatMap((span) => {
		const from = Math.max(item.from, span.from);
		const to = Math.min(item.to, span.to);
		if (to - from < 0.01) return [];
		return [build(span.at + from - span.from, span.at + to - span.from, from - item.from)];
	});
}

type Picture = { cuts: Cut[]; bubbles: Bubble[]; zooms: Zoom[]; overlays: Overlay[] };

export function editPicture<P extends Picture>(picture: P, duration: number, removals: Span[]): P {
	if (removals.length === 0) return picture;
	const kept = keptSpans(duration, removals);
	return {
		...picture,
		cuts: picture.cuts.flatMap((cut) =>
			splitAcross(cut, kept, (from, to, offset) => ({
				...cut,
				from,
				to,
				sourceIn: cut.sourceIn + offset * cut.rate,
				split: cut.split ? { ...cut.split, sourceIn: (cut.split.sourceIn ?? cut.from) + offset } : undefined,
			})),
		),
		bubbles: picture.bubbles.flatMap((bubble) => splitAcross(bubble, kept, (from, to, offset) => ({ ...bubble, from, to, sourceIn: (bubble.sourceIn ?? bubble.from) + offset }))),
		zooms: picture.zooms.flatMap((zoom) => splitAcross(zoom, kept, (from, to) => ({ ...zoom, from, to }))),
		overlays: picture.overlays.flatMap((overlay) => splitAcross(overlay, kept, (from, to, offset) => (overlay.type === "screen-card" ? { ...overlay, from, to, sourceIn: (overlay.sourceIn ?? overlay.from) + offset } : { ...overlay, from, to }))),
	};
}

/** Takes the removed stretches out of everything a template draws: picture, dialogue and captions. */
export function applyRemovals(input: TemplateInput, removals: Span[]): TemplateInput {
	if (removals.length === 0) return input;
	const duration = input.clip.durationS;
	const kept = keptSpans(duration, removals);
	const inside = (start: number, end: number) => normalizeRemovals(removals).some((span) => (start + end) / 2 >= span.from && (start + end) / 2 < span.to);
	const shift = <T extends { start: number; end: number }>(items: T[]) => items.filter((item) => !inside(item.start, item.end)).map((item) => ({ ...item, start: toEdited(item.start, removals), end: toEdited(item.end, removals) }));
	return {
		...input,
		clip: { ...input.clip, durationS: kept.reduce((sum, span) => sum + span.to - span.from, 0), audioSpans: kept.map((span) => ({ sourceFrom: span.from, from: span.at, to: span.at + span.to - span.from })) },
		concept: editPicture(input.concept, duration, removals),
		captions: { words: shift(input.captions.words), lines: input.captions.lines ? shift(input.captions.lines) : undefined },
	};
}
