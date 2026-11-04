import { useEffect, useRef, useState } from "react";
import { useVideoSource } from "../lib/video-source";
import type { PlayerEngine } from "./engine";

type Props = { engine: PlayerEngine; id: string; src: string; poster?: string; master?: boolean; timeMap?: (t: number) => number | null; className?: string };

export function EngineVideo({ engine, id, src, poster, master = false, timeMap, className }: Props) {
	const ref = useRef<HTMLVideoElement>(null);
	const { src: playable, progress, totalBytes, failed, retry } = useVideoSource(src);
	const [broken, setBroken] = useState(false);
	useEffect(() => {
		const video = ref.current;
		return video && playable ? engine.register(id, video, master, timeMap) : undefined;
	}, [engine, id, master, playable, timeMap]);
	const showError = failed || broken;
	return (
		<>
			<video ref={ref} className={className} src={playable} poster={poster} playsInline preload="auto" muted={!master} onError={() => setBroken(true)} />
			{showError ? (
				<span className="video-error">
					Couldn't load this video
					<button
						type="button"
						className="pill-button"
						onClick={(event) => {
							event.stopPropagation();
							setBroken(false);
							retry();
							ref.current?.load();
						}}
					>
						Retry
					</button>
				</span>
			) : null}
			{!playable && !showError ? (
				<span className="video-loading" role="progressbar" aria-valuenow={Math.round(progress * 100)}>
					<i>
						<b style={{ transform: `scaleX(${progress})` }} />
					</i>
					{master ? <em className="mono">{totalBytes ? `Loading ${Math.round(totalBytes / 1e6)} MB · ${Math.round(progress * 100)}%` : "Loading"}</em> : null}
				</span>
			) : null}
		</>
	);
}
