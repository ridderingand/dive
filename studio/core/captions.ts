import type { CaptionLine, CaptionWord } from "./schema";

export function cleanWord(text: string): string {
	return text.replace(/^[^\p{L}\p{N}']+|[^\p{L}\p{N}'%]+$/gu, "");
}

/** Groups words into short chunks; a pause, a sentence end or an emphasis word starts a new one. */
export function groupWords(words: CaptionWord[], maxWords: number): CaptionLine[] {
	const lines: CaptionLine[] = [];
	let current: CaptionWord[] = [];
	const flush = () => {
		const first = current[0];
		const last = current[current.length - 1];
		if (!first || !last) return;
		lines.push({ line: current.map((word) => cleanWord(word.text)).join(" "), start: first.start, end: last.end, em: current.some((word) => word.em) });
		current = [];
	};
	for (const word of words) {
		const previous = current[current.length - 1];
		const pause = previous ? word.start - previous.end > 0.35 : false;
		const emphasisEdge = previous ? Boolean(previous.em) !== Boolean(word.em) : false;
		if (current.length >= maxWords || pause || emphasisEdge) flush();
		current.push(word);
		if (/[.!?]$/.test(word.text)) flush();
	}
	flush();
	return lines;
}

export function activeAt<T extends { start: number; end: number }>(items: T[], t: number): T | undefined {
	let low = 0;
	let high = items.length - 1;
	while (low <= high) {
		const mid = (low + high) >> 1;
		const item = items[mid];
		if (!item) return undefined;
		if (t < item.start) high = mid - 1;
		else if (t >= item.end) low = mid + 1;
		else return item;
	}
	return undefined;
}
