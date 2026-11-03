import { useEffect, useState } from "react";

/**
 * Inflight's page host answers without Range support, so a hosted <video> can't seek and Safari
 * may not play it. Review builds download each file once and play it from memory instead.
 */
const PLAY_FROM_MEMORY = import.meta.env.VITE_DIVE_REVIEW === "1";

type Load = { progress: number; url: string | null; promise: Promise<string>; listeners: Set<() => void> };

const loads = new Map<string, Load>();

function loadVideo(src: string): Load {
	const existing = loads.get(src);
	if (existing) return existing;
	const load: Load = { progress: 0, url: null, promise: Promise.resolve(src), listeners: new Set() };
	const notify = () => load.listeners.forEach((listener) => listener());
	load.promise = (async () => {
		const response = await fetch(src);
		const total = Number(response.headers.get("Content-Length")) || 0;
		const reader = response.body?.getReader();
		if (!reader) return src;
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
		load.url = src;
		notify();
		return src;
	});
	loads.set(src, load);
	return load;
}

export function useVideoSource(src: string) {
	const [, rerender] = useState(0);
	useEffect(() => {
		if (!PLAY_FROM_MEMORY) return;
		const load = loadVideo(src);
		const listener = () => rerender((count) => count + 1);
		load.listeners.add(listener);
		return () => {
			load.listeners.delete(listener);
		};
	}, [src]);
	if (!PLAY_FROM_MEMORY) return { src, progress: 1 };
	const load = loads.get(src);
	return { src: load?.url ?? undefined, progress: load?.progress ?? 0 };
}

/** Warms the other concepts one at a time, so switching is instant once the first is playing. */
export async function prefetchVideos(sources: string[]) {
	if (!PLAY_FROM_MEMORY) return;
	for (const src of sources) await loadVideo(src).promise;
}
