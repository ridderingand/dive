import { useCallback, useEffect, useRef, useState } from "react";
import type { Note, Stamp } from "@core/moments";
import type { PlayerEngine } from "../player/engine";

const STAMP_EVERY_MS = 200;

export type DictationState = "idle" | "listening" | "transcribing";

type Options = { engine: PlayerEngine; guest: string; slug: string; count: () => number; current: () => { concept: string | null; round: number | null }; onNotes: (notes: Note[]) => void; onError: (message: string) => void };

function toBase64(blob: Blob) {
	return new Promise<string>((resolve, reject) => {
		const reader = new FileReader();
		reader.onload = () => resolve(String(reader.result).split(",")[1] ?? "");
		reader.onerror = () => reject(reader.error);
		reader.readAsDataURL(blob);
	});
}

/** Records the voice and a log of where the playhead was. No screen capture: the timestamp is the context. */
export function useDictation({ engine, guest, slug, count, current, onNotes, onError }: Options) {
	const [state, setState] = useState<DictationState>("idle");
	const level = useRef<HTMLElement | null>(null);
	const stop = useRef<(() => void) | null>(null);
	const latest = useRef({ count, current, onNotes, onError });
	latest.current = { count, current, onNotes, onError };

	const start = useCallback(async () => {
		let stream: MediaStream;
		try {
			stream = await navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: true, noiseSuppression: true } });
		} catch {
			latest.current.onError("The microphone is blocked. Allow it for this page and try again.");
			return;
		}
		const recorder = new MediaRecorder(stream);
		const chunks: Blob[] = [];
		const stamps: Stamp[] = [];
		const startedAt = performance.now();
		let lastStamp = -Infinity;
		const stamp = (t: number, force = false) => {
			const atMs = performance.now() - startedAt;
			if (!force && atMs - lastStamp < STAMP_EVERY_MS) return;
			lastStamp = atMs;
			stamps.push({ atMs, clipTime: t, ...latest.current.current() });
		};
		stamp(engine.time, true);
		const stopFrames = engine.onFrame((t) => stamp(t));

		const audio = new AudioContext();
		const analyser = audio.createAnalyser();
		analyser.fftSize = 256;
		audio.createMediaStreamSource(stream).connect(analyser);
		const samples = new Uint8Array(analyser.frequencyBinCount);
		let raf = 0;
		const meter = () => {
			analyser.getByteTimeDomainData(samples);
			let peak = 0;
			for (const sample of samples) peak = Math.max(peak, Math.abs(sample - 128));
			level.current?.style.setProperty("--level", String(Math.min(1, peak / 60)));
			raf = requestAnimationFrame(meter);
		};
		meter();

		recorder.ondataavailable = (event) => chunks.push(event.data);
		recorder.onstop = async () => {
			stopFrames();
			cancelAnimationFrame(raf);
			void audio.close();
			stream.getTracks().forEach((track) => track.stop());
			setState("transcribing");
			try {
				const response = await fetch("/api/notes", { method: "POST", body: JSON.stringify({ guest, slug, stamps, audio: await toBase64(new Blob(chunks, { type: recorder.mimeType })) }) });
				if (!response.ok) throw new Error();
				const notes = (await response.json()) as Note[];
				if (notes.length === latest.current.count()) latest.current.onError("Didn't catch anything. Check your microphone and try again.");
				else latest.current.onNotes(notes);
			} catch {
				latest.current.onError("Couldn't turn that into notes. Run bun run dive setup, then try again.");
			}
			setState("idle");
		};
		recorder.start();
		stop.current = () => {
			stamp(engine.time, true);
			recorder.stop();
		};
		setState("listening");
	}, [engine, guest, slug]);

	const toggle = useCallback(() => {
		if (state === "listening") stop.current?.();
		else if (state === "idle") void start();
	}, [state, start]);

	useEffect(() => () => stop.current?.(), []);

	return { state, toggle, level };
}
