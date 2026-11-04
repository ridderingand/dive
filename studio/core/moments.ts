export type TranscriptSegment = { start_ms: number; end_ms: number; text: string };
export type RecordingEvent = { k: string; t?: number; path?: string };
export type Stamp = { atMs: number; clipTime: number; concept: string | null; round: number | null };
export type Moment = { atMs: number; text: string; clipFrom: number; clipTo: number; concept: string | null; round: number | null };

/** The studio keeps the playhead in its URL, so a recording's route events are a log of where the video was. */
export function stampsFrom(timeline: RecordingEvent[]): Stamp[] {
	const stamps: Stamp[] = [];
	for (const event of timeline) {
		if (event.k !== "route" || event.t === undefined || !event.path?.includes("/clips/")) continue;
		const query = new URLSearchParams(event.path.split("?")[1] ?? "");
		const round = query.get("r");
		stamps.push({ atMs: event.t, clipTime: Number(query.get("t") ?? 0), concept: query.get("c"), round: round ? Number(round) : null });
	}
	return stamps;
}

function stampAt(stamps: Stamp[], ms: number) {
	let found: Stamp | undefined;
	for (const stamp of stamps) {
		if (stamp.atMs > ms) break;
		found = stamp;
	}
	return found ?? stamps[0];
}

/** Pairs each thing said with the part of the clip on screen while it was said. */
export function momentsFrom(segments: TranscriptSegment[], stamps: Stamp[]): Moment[] {
	return segments.flatMap((segment) => {
		const first = stampAt(stamps, segment.start_ms);
		const last = stampAt(stamps, segment.end_ms);
		if (!first || !last) return [];
		return [{ atMs: segment.start_ms, text: segment.text, clipFrom: first.clipTime, clipTo: last.clipTime, concept: first.concept, round: first.round }];
	});
}
