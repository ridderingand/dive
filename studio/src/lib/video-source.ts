import { useEffect, useState } from "react";

/**
 * Inflight's page host answers without Range support, so a hosted <video> can't seek and Safari
 * may not play it. Review builds download each file once and play it from memory instead.
 */
const PLAY_FROM_MEMORY = import.meta.env.VITE_DIVE_REVIEW === "1";

type Load = { progress: number; totalBytes: number; failed: boolean; url: string | null; promise: Promise<string | null>; listeners: Set<() => void> };

const loads = new Map<string, Load>();

function loadVideo(src: string): Load {
	const existing = loads.get(src);
	if (existing) return existing;
	const load: Load = { progress: 0, totalBytes: 0, failed: false, url: null, promise: Promise.resolve(null), listeners: new Set() };
	const notify = () => load.listeners.forEach((listener) => listener());
	load.promise = (async () => {
		const response = await fetch(src);
		if (!response.ok) throw new Error(`${response.status}`);
		const total = Number(response.headers.get("Content-Length")) || 0;
		load.totalBytes = total;
		const reader = response.body?.getReader();
		if (!reader) throw new Error("No body");
		const chunks: Uint8Array<ArrayBuffer>[] = [];
		let received = 0;
		for (;;) {
			const { done, value } = await reader.read();
			if (done) break;
			chunks.push(value);
			received += value.length;
			if (total > 0) {
				load.progress = received / total;
				notify();
			}
		}
		load.url = URL.createObjectURL(new Blob(chunks, { type: "video/mp4" }));
		load.progress = 1;
		notify();
		return load.url;
	})().catch(() => {
		load.failed = true;
		notify();
		return null;
	});
	loads.set(src, load);
	return load;
}

export function useVideoSource(src: string) {
	const [attempt, rerender] = useState(0);
	useEffect(() => {
		if (!PLAY_FROM_MEMORY) return;
		const load = loadVideo(src);
		const listener = () => rerender((count) => count + 1);
		load.listeners.add(listener);
		listener();
		return () => {
			load.listeners.delete(listener);
		};
	}, [src, attempt]);
	if (!PLAY_FROM_MEMORY) return { src, progress: 1, totalBytes: 0, failed: false, retry: () => {} };
	const load = loads.get(src);
	const retry = () => {
		loads.delete(src);
		rerender((count) => count + 1);
	};
	return { src: load?.url ?? undefined, progress: load?.progress ?? 0, totalBytes: load?.totalBytes ?? 0, failed: load?.failed ?? false, retry };
}

/** Warms the other concepts one at a time, so switching is instant once the first is playing. */
export async function prefetchVideos(sources: string[]) {
	if (!PLAY_FROM_MEMORY) return;
	for (const src of sources) await loadVideo(src).promise;
}
