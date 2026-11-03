import { useCallback, useMemo, useRef } from "react";
import type { ManifestClip, ManifestConcept, ManifestFile, RenderInfo } from "@core/manifest";
import { mediaUrl } from "../lib/data";
import { useEngineFrame, type PlayerEngine } from "./engine";
import { EngineVideo } from "./EngineVideo";

const KIND_LABEL: Record<string, string> = { guest: "Guest", host: "Host", screen: "Screen", broll: "B-roll" };

function FileTile({ engine, file, concept }: { engine: PlayerEngine; file: ManifestFile; concept: ManifestConcept | null }) {
	const tile = useRef<HTMLElement>(null);
	const cuts = useMemo(() => concept?.cuts.filter((cut) => cut.source === file.key) ?? [], [concept, file.key]);
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
				{file.proxy ? <EngineVideo engine={engine} id={`file-${file.key}`} src={mediaUrl(file.proxy)} timeMap={timeMap} /> : <span className="file-empty mono">{file.file.split("/").pop()}</span>}
				<span className="file-live">On screen</span>
				<span className="file-in-bubble">In bubble</span>
			</div>
			<figcaption>
				<span className="wide">{file.label}</span>
				<span className="role">{KIND_LABEL[file.kind] ?? file.kind}</span>
			</figcaption>
		</figure>
	);
}

type Props = { engine: PlayerEngine; clip: ManifestClip; concept: ManifestConcept | null; render: RenderInfo | null };

export function FilesWall({ engine, clip, concept, render }: Props) {
	return (
		<div className="files-wall">
			{render && concept ? (
				<figure className="file-tile is-program">
					<div className="file-frame" style={{ aspectRatio: `${render.width} / ${render.height}` }}>
						<EngineVideo engine={engine} id={`${concept.id}@${render.round}`} src={mediaUrl(render.preview)} poster={mediaUrl(render.poster)} master />
					</div>
					<figcaption>
						<span className="wide">Program</span>
						<span className="role">{concept.name}</span>
					</figcaption>
				</figure>
			) : null}
			<div className="files-grid">
				{clip.files.map((file) => (
					<FileTile key={file.key} engine={engine} file={file} concept={concept} />
				))}
			</div>
		</div>
	);
}
