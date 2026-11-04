import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { notesFrom, notesPrompt, type Note, type Stamp, type Take, type TranscriptSegment } from "../../core/moments";
import { timecode } from "../../core/time";
import { loadClip, writeJson } from "./load";
import { mediaPath, MEDIA } from "./paths";
import { ffmpeg, run } from "./run";

const MODEL = path.join(MEDIA, "models", "ggml-small.en.bin");
const MODEL_URL = "https://huggingface.co/ggerganov/whisper.cpp/resolve/main/ggml-small.en.bin";
const VOCABULARY = "Dive Club, Ridd, Anna, B-roll, bubble, caption, Tanker, Clash, lower third, zoom, cut, concept.";

const takesFile = (guest: string, slug: string) => mediaPath(`notes/${guest}/${slug}/takes.json`);

function promptFor(guest: string, slug: string, notes: Note[]) {
	const { clip, concepts } = loadClip(guest, slug);
	return notesPrompt({ guest, slug, title: clip.title, fps: clip.fps, durationS: clip.durationS, sources: clip.sources }, concepts, notes, timecode);
}

/** Newest first. A list of notes from before takes existed becomes one take, so nothing dictated is lost. */
export function loadTakes(guest: string, slug: string): Take[] {
	const file = takesFile(guest, slug);
	if (existsSync(file)) return JSON.parse(readFileSync(file, "utf8")) as Take[];
	const legacy = mediaPath(`notes/${guest}/${slug}/notes.json`);
	if (!existsSync(legacy)) return [];
	const notes = JSON.parse(readFileSync(legacy, "utf8")) as Note[];
	if (notes.length === 0) return [];
	const takes = [{ id: "earlier", createdAt: new Date().toISOString(), notes, prompt: promptFor(guest, slug, notes) }];
	writeJson(file, takes);
	rmSync(legacy);
	return takes;
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

export type TakeRequest = { guest: string; slug: string; audio: string; stamps: Stamp[] };
export type TextTakeRequest = { guest: string; slug: string; prompt: string; preview: string };

/** Keeps a prompt made without dictation, such as words cut from the transcript. */
export function addTextTake({ guest, slug, prompt, preview }: TextTakeRequest): Take {
	const note: Note = { id: "text", clipFrom: 0, clipTo: 0, concept: null, round: null, text: preview };
	const take: Take = { id: String(Date.now()), createdAt: new Date().toISOString(), notes: [note], prompt };
	writeJson(takesFile(guest, slug), [take, ...loadTakes(guest, slug)]);
	return take;
}

/** Turns one recording into a ready prompt and keeps it in the clip's history. Returns null if nothing was said. */
export async function addTake({ guest, slug, audio, stamps }: TakeRequest): Promise<Take | null> {
	await ensureSpeech();
	const dir = mkdtempSync(path.join(tmpdir(), "dive-take-"));
	try {
		const audioFile = path.join(dir, "take.webm");
		writeFileSync(audioFile, Buffer.from(audio, "base64"));
		const notes = notesFrom(await transcribe(audioFile, dir), stamps);
		if (notes.length === 0) return null;
		const take: Take = { id: String(Date.now()), createdAt: new Date().toISOString(), notes, prompt: promptFor(guest, slug, notes) };
		writeJson(takesFile(guest, slug), [take, ...loadTakes(guest, slug)]);
		return take;
	} finally {
		rmSync(dir, { recursive: true, force: true });
	}
}
