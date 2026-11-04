import { editPicture } from "./removals";
import type { Concept } from "./schema";

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

/** One press of Talk: what was said, and the prompt it became. */
export type Take = { id: string; createdAt: string; notes: Note[]; prompt: string };

/** Whisper cuts by length. Notes follow whole thoughts: the scene, not the exact playhead, says what they are about. */
export function notesFrom(segments: TranscriptSegment[], stamps: Stamp[]): Note[] {
	const notes: Note[] = [];
	let current: Note | null = null;
	const flush = () => {
		if (current?.text.trim()) notes.push({ ...current, text: current.text.trim() });
		current = null;
	};
	for (const moment of momentsFrom(segments, stamps)) {
		const open: Note | null = current;
		if (open && moment.concept !== open.concept) flush();
		const active: Note = current ?? { id: `n${moment.atMs}`, clipFrom: moment.clipFrom, clipTo: moment.clipTo, concept: moment.concept, round: moment.round, text: "" };
		active.text = `${active.text} ${moment.text.trim()}`;
		active.clipTo = moment.clipTo;
		current = active;
		if (/[.!?]$/.test(moment.text.trim())) flush();
	}
	flush();
	return notes;
}

type PromptClip = { guest: string; slug: string; title: string; fps: number; durationS: number | null; sources: { key: string; label: string }[] };
type PromptConcept = Pick<Concept, "id" | "name" | "round" | "cuts" | "bubbles" | "zooms" | "overlays" | "removals">;
type Scene = { number: number; label: string; from: number; to: number };

/** Each cut is a scene, in the same order and with the same names as the studio's timeline. */
export function scenesOf(clip: PromptClip, concept: PromptConcept): Scene[] {
	const { cuts } = editPicture(concept, clip.durationS ?? 0, concept.removals);
	return [...cuts].sort((a, b) => a.from - b.from).map((cut, index) => ({ number: index + 1, label: (cut.label ?? clip.sources.find((source) => source.key === cut.source)?.label ?? cut.source).replace(/^B-roll: /, ""), from: cut.from, to: cut.to }));
}

const sceneAt = (scenes: Scene[], t: number) => scenes.find((scene) => t >= scene.from && t < scene.to) ?? scenes[scenes.length - 1];

/** The notes as one message an agent can act on, grouped by the scene each one is about. */
export function notesPrompt(clip: PromptClip, concepts: PromptConcept[], notes: Note[], format: (seconds: number, fps: number) => string) {
	const lines = [`Apply these notes to the Dive clip "${clip.title}" (${clip.guest}/${clip.slug}). Read studio/AGENTS.md first.`, "", "Each note was spoken while watching the scene it sits under, so read it as being about that scene, not one exact frame. Look at the scene before changing it. Times are minutes, seconds, then frames."];
	const byConcept = new Map<string, Note[]>();
	for (const note of notes) byConcept.set(note.concept ?? "", [...(byConcept.get(note.concept ?? "") ?? []), note]);
	for (const [id, group] of byConcept) {
		const concept = concepts.find((item) => item.id === id);
		lines.push("", concept ? `Concept ${concept.id}, ${concept.name}, round ${group[0]?.round ?? concept.round}` : "Notes");
		const scenes = concept ? scenesOf(clip, concept) : [];
		let current: Scene | undefined;
		for (const note of [...group].sort((a, b) => a.clipFrom - b.clipFrom)) {
			const scene = sceneAt(scenes, note.clipFrom);
			if (scene && scene !== current) {
				lines.push("", `Scene ${scene.number}, ${scene.label} (${format(scene.from, clip.fps)} to ${format(scene.to, clip.fps)}):`);
				current = scene;
			}
			const end = sceneAt(scenes, note.clipTo);
			lines.push(`- ${note.text}${end && end !== scene ? ` (moved on to scene ${end.number} while saying this)` : ""}`);
		}
	}
	return lines.join("\n");
}
