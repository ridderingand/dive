import { useEffect, useRef } from "react";
import { useVideoSource } from "../lib/video-source";
import type { PlayerEngine } from "./engine";

type Props = { engine: PlayerEngine; id: string; src: string; poster?: string; master?: boolean; timeMap?: (t: number) => number | null; className?: string };

export function EngineVideo({ engine, id, src, poster, master = false, timeMap, className }: Props) {
	const ref = useRef<HTMLVideoElement>(null);
	const { src: playable, progress } = useVideoSource(src);
	useEffect(() => {
		const video = ref.current;
		return video && playable ? engine.register(id, video, master, timeMap) : undefined;
	}, [engine, id, master, playable, timeMap]);
	return (
		<>
			<video ref={ref} className={className} src={playable} poster={poster} playsInline preload="auto" muted={!master} />
			{playable ? null : (
				<span className="video-loading" role="progressbar" aria-valuenow={Math.round(progress * 100)}>
					<i style={{ transform: `scaleX(${progress})` }} />
				</span>
			)}
		</>
	);
}
