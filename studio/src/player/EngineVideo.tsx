import { useEffect, useRef } from "react";
import type { PlayerEngine } from "./engine";

type Props = { engine: PlayerEngine; id: string; src: string; poster?: string; master?: boolean; timeMap?: (t: number) => number | null; className?: string };

export function EngineVideo({ engine, id, src, poster, master = false, timeMap, className }: Props) {
	const ref = useRef<HTMLVideoElement>(null);
	useEffect(() => {
		const video = ref.current;
		return video ? engine.register(id, video, master, timeMap) : undefined;
	}, [engine, id, master, src, timeMap]);
	return <video ref={ref} className={className} src={src} poster={poster} playsInline preload="auto" muted={!master} />;
}
