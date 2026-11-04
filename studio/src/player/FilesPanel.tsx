import { useCallback, useMemo, useRef } from "react";
import type { ManifestClip, ManifestConcept, ManifestFile } from "@core/manifest";
import { mediaUrl } from "../lib/data";
import { useEngineFrame, type PlayerEngine } from "./engine";
import { EngineVideo } from "./EngineVideo";

const bytes = (value: number) => (value > 1e6 ? `${(value / 1e6).toFixed(1)} MB` : `${Math.round(value / 1e3)} KB`);

function FileTile({ engine, file, concept }: { engine: PlayerEngine; file: ManifestFile; concept: ManifestConcept | null }) {
	const tile = useRef<HTMLElement>(null);
	const cuts = useMemo(() => concept?.cuts.filter((cut) => cut.source === file.key || cut.split?.source === file.key) ?? [], [concept, file.key]);
	const bubbles = useMemo(() => concept?.bubbles.filter((bubble) => bubble.source === file.key) ?? [], [concept, file.key]);

	const timeMap = useCallback(
		(t: number) => {
			if (file.synced) return t;
			const cut = cuts.find((item) => t >= item.from && t < item.to);
			return cut ? cut.sourceIn + (t - cut.from) * cut.rate : null;
		},
		[cuts, file.synced],
	);

	useEngineFrame(engine, (t) => {
		const onScreen = cuts.some((cut) => t >= cut.from && t < cut.to);
		const inBubble = bubbles.some((bubble) => t >= bubble.from && t < bubble.to);
		tile.current?.classList.toggle("is-live", onScreen);
		tile.current?.classList.toggle("is-bubble", inBubble && !onScreen);
	});

	return (
		<figure ref={tile} className={`file-tile${file.exists ? "" : " is-missing"}`}>
			<div className="file-frame">
				{file.proxy ? <EngineVideo engine={engine} id={`file-${file.key}`} src={mediaUrl(file.proxy)} timeMap={timeMap} /> : <span className="file-empty">Missing</span>}
				<span className="file-live">On screen</span>
				<span className="file-in-bubble">In bubble</span>
			</div>
			<figcaption>
				<span className="wide">{file.label}</span>
				<span className="mono">{file.exists ? bytes(file.bytes) : file.file.split("/").pop()}</span>
			</figcaption>
		</figure>
	);
}

export function FilesPanel({ engine, clip, concept }: { engine: PlayerEngine; clip: ManifestClip; concept: ManifestConcept | null }) {
	return (
		<div className="files-panel">
			{clip.files.map((file) => (
				<FileTile key={file.key} engine={engine} file={file} concept={concept} />
			))}
			{clip.audioExists ? null : <p className="rail-note">The final mix, audio.m4a, is missing.</p>}
		</div>
	);
}
