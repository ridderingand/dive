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

const MS_PER_WORD = 420;

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
		// Speech-to-text stretches a segment's end across any silence after it, which would drag a note onto the next moment.
		const spoken = Math.min(segment.end_ms, segment.start_ms + segment.text.split(/\s+/).length * MS_PER_WORD);
		const last = stampAt(stamps, spoken);
		if (!first || !last) return [];
		return [{ atMs: segment.start_ms, text: segment.text, clipFrom: first.clipTime, clipTo: last.clipTime, concept: first.concept, round: first.round }];
	});
}

export type Note = { id: string; clipFrom: number; clipTo: number; concept: string | null; round: number | null; text: string };

const JUMP_SECONDS = 1.5;

/** Whisper cuts by length. Notes break where a thought ends or where the playhead moved to somewhere new. */
export function notesFrom(segments: TranscriptSegment[], stamps: Stamp[]): Note[] {
	const notes: Note[] = [];
	let current: Note | null = null;
	const flush = () => {
		if (current?.text.trim()) notes.push({ ...current, text: current.text.trim() });
		current = null;
	};
	for (const moment of momentsFrom(segments, stamps)) {
		const open: Note | null = current;
		if (open && (Math.abs(moment.clipFrom - open.clipTo) > JUMP_SECONDS || moment.concept !== open.concept)) flush();
		const active: Note = current ?? { id: `n${moment.atMs}`, clipFrom: moment.clipFrom, clipTo: moment.clipTo, concept: moment.concept, round: moment.round, text: "" };
		active.text = `${active.text} ${moment.text.trim()}`;
		active.clipTo = moment.clipTo;
		current = active;
		if (/[.!?]$/.test(moment.text.trim())) flush();
	}
	flush();
	return notes;
}

type PromptClip = { guest: string; slug: string; title: string; fps: number };
type PromptConcept = { id: string; name: string; round: number };

/** The notes as one message an agent can act on. */
export function notesPrompt(clip: PromptClip, concepts: PromptConcept[], notes: Note[], format: (seconds: number, fps: number) => string) {
	const groups = new Map<string, Note[]>();
	for (const note of notes) {
		const key = note.concept ?? "";
		groups.set(key, [...(groups.get(key) ?? []), note]);
	}
	const lines = [`Apply these notes to the Dive clip "${clip.title}" (${clip.guest}/${clip.slug}). Read studio/AGENTS.md first. Times are in the clip: minutes, seconds, then frames.`];
	for (const [id, group] of groups) {
		const concept = concepts.find((item) => item.id === id);
		lines.push("", concept ? `Concept ${concept.id}, ${concept.name}, round ${group[0]?.round ?? concept.round}:` : "Notes:");
		for (const note of [...group].sort((a, b) => a.clipFrom - b.clipFrom)) {
			const span = note.clipTo - note.clipFrom > 0.5 ? `${format(note.clipFrom, clip.fps)} to ${format(note.clipTo, clip.fps)}` : format(note.clipFrom, clip.fps);
			lines.push(`- ${span}: ${note.text}`);
		}
	}
	return lines.join("\n");
}
