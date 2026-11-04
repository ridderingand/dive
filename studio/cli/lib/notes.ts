import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { notesFrom, type Note, type Stamp, type TranscriptSegment } from "../../core/moments";
import { writeJson } from "./load";
import { mediaPath, MEDIA } from "./paths";
import { ffmpeg, run } from "./run";

const MODEL = path.join(MEDIA, "models", "ggml-small.en.bin");
const MODEL_URL = "https://huggingface.co/ggerganov/whisper.cpp/resolve/main/ggml-small.en.bin";
const VOCABULARY = "Dive Club, Ridd, Anna, B-roll, bubble, caption, Tanker, Clash, lower third, zoom, cut, concept.";

export const notesFile = (guest: string, slug: string) => mediaPath(`notes/${guest}/${slug}/notes.json`);

export function loadNotes(guest: string, slug: string): Note[] {
	const file = notesFile(guest, slug);
	return existsSync(file) ? (JSON.parse(readFileSync(file, "utf8")) as Note[]) : [];
}

/** Dictation runs on this machine: the voice never leaves it, and it works in any browser. */
export async function ensureSpeech() {
	if (!Bun.which("whisper-cli")) await run(["brew", "install", "whisper-cpp"]);
	if (!existsSync(MODEL)) {
		mkdirSync(path.dirname(MODEL), { recursive: true });
		await run(["curl", "-L", "--fail", "-o", MODEL, MODEL_URL]);
	}
}

type WhisperJson = { transcription: { offsets: { from: number; to: number }; text: string }[] };

async function transcribe(audioFile: string, dir: string): Promise<TranscriptSegment[]> {
	const wav = path.join(dir, "voice.wav");
	await ffmpeg(["-i", audioFile, "-ar", "16000", "-ac", "1", "-c:a", "pcm_s16le", wav]);
	const output = path.join(dir, "voice");
	await run(["whisper-cli", "-m", MODEL, "-f", wav, "-oj", "-of", output, "-np", "-ml", "70", "-sow", "--prompt", VOCABULARY], { quiet: true });
	const { transcription } = JSON.parse(readFileSync(`${output}.json`, "utf8")) as WhisperJson;
	return transcription.map((item) => ({ start_ms: item.offsets.from, end_ms: item.offsets.to, text: item.text.trim() })).filter((item) => item.text && !/^[[(]/.test(item.text));
}

export type NoteRequest = { guest: string; slug: string; audio: string; stamps: Stamp[] };

/** Turns one take into notes, adds them to the clip's list and returns the whole list. */
export async function addTake({ guest, slug, audio, stamps }: NoteRequest): Promise<Note[]> {
	await ensureSpeech();
	const dir = mkdtempSync(path.join(tmpdir(), "dive-take-"));
	try {
		const audioFile = path.join(dir, "take.webm");
		writeFileSync(audioFile, Buffer.from(audio, "base64"));
		const taken = Date.now();
		const notes = notesFrom(await transcribe(audioFile, dir), stamps).map((note) => ({ ...note, id: `${taken}-${note.id}` }));
		const all = [...loadNotes(guest, slug), ...notes];
		writeJson(notesFile(guest, slug), all);
		return all;
	} finally {
		rmSync(dir, { recursive: true, force: true });
	}
}
