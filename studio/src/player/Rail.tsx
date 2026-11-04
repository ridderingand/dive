import { useEffect, useMemo, useRef, useState } from "react";
import type { Manifest, ManifestClip, ManifestConcept, RenderInfo } from "@core/manifest";
import { activeAt } from "@core/captions";
import { ArrowOutIcon, CopyIcon } from "../ui/icons";
import { copyText } from "../ui/toast";
import { mediaUrl } from "../lib/data";
import { useEngineFrame, type PlayerEngine } from "./engine";
import { FilesPanel } from "./FilesPanel";

const TABS = ["Transcript", "Rounds", "Files"] as const;
type Tab = (typeof TABS)[number];

function WordsTab({ clip, engine }: { clip: ManifestClip; engine: PlayerEngine }) {
	const box = useRef<HTMLDivElement>(null);
	const lastIndex = useRef(-1);
	const words = clip.captions?.words ?? [];
	const paragraphs = useMemo(() => {
		const groups: (typeof words)[] = [[]];
		for (const word of clip.captions?.words ?? []) {
			groups[groups.length - 1]?.push(word);
			const size = groups[groups.length - 1]?.length ?? 0;
			if (/[.!?]$/.test(word.text) && size > 24) groups.push([]);
		}
		return groups.filter((group) => group.length > 0);
	}, [clip.captions]);
	useEngineFrame(engine, (t) => {
		const word = activeAt(words, t);
		const index = word?.i ?? -1;
		if (index === lastIndex.current) return;
		box.current?.querySelector(".is-now")?.classList.remove("is-now");
		lastIndex.current = index;
		if (index < 0) return;
		const node = box.current?.querySelector(`[data-i="${index}"]`);
		node?.classList.add("is-now");
		if (engine.state.playing) node?.scrollIntoView({ block: "center", behavior: "smooth" });
	});
	if (words.length === 0) return <p className="rail-empty">No captions yet. They come from the Descript final cut.</p>;
	return (
		<div ref={box} className="words">
			{clip.captions?.source === "srt-estimate" ? <p className="rail-note">Word timing here is estimated from phrases until the Descript per-word export lands.</p> : null}
			{paragraphs.map((group) => (
				<p key={group[0]?.i}>
					{group.map((word) => (
						<button key={word.i} type="button" data-i={word.i} className={word.em ? "is-em" : undefined} onClick={() => engine.seek(word.start)}>
							{word.text}
						</button>
					))}
				</p>
			))}
		</div>
	);
}

const bytes = (value: number) => (value > 1e6 ? `${(value / 1e6).toFixed(1)} MB` : `${Math.round(value / 1e3)} KB`);

function RoundsTab({ concept, render, review, onPick, onCompare }: { concept: ManifestConcept | null; render: RenderInfo | null; review: boolean; onPick: (round: number) => void; onCompare: (earlier: number) => void }) {
	if (!concept) return <p className="rail-empty">Rounds appear once a concept exists.</p>;
	const earlier = render ? [...concept.renders].reverse().find((item) => item.round < render.round) : undefined;
	return (
		<section className="rail-block">
			<h4 className="label">{concept.name}</h4>
			<div className="round-list">
				{[...concept.history].reverse().map((note) => {
					const available = concept.renders.some((item) => item.round === note.round);
					return (
						<div key={note.round} className={render?.round === note.round ? "is-active" : undefined}>
							<button type="button" disabled={!available} onClick={() => onPick(note.round)}>
								<span className="round-number wide">R{note.round}</span>
								<span>
									{note.summary}
									<span className="mono rail-tiny">{note.date}{available ? "" : " · not rendered"}</span>
								</span>
							</button>
							{note.reviewUrl ? <a href={note.reviewUrl} target="_blank" rel="noreferrer" className="rail-tiny round-link">Review on Inflight <ArrowOutIcon width={12} height={12} /></a> : null}
							{note.feedbackUrl ? <a href={note.feedbackUrl} target="_blank" rel="noreferrer" className="rail-tiny round-link">Feedback this round answered <ArrowOutIcon width={12} height={12} /></a> : null}
						</div>
					);
				})}
			</div>
			<div className="round-actions">
				{earlier ? <button type="button" className="pill-button" onClick={() => onCompare(earlier.round)}>Compare with R{earlier.round}</button> : null}
				{render && !review ? <a className="pill-button" href={mediaUrl(render.preview.replace("preview.mp4", "master.mp4"))} download={`${concept.id}-r${render.round}.mp4`}>Download master</a> : null}
			</div>
			{render && !review ? <p className="rail-tiny rail-meta mono">{render.width}×{render.height} · rendered in {render.renderSeconds}s · {bytes(render.masterBytes)} master</p> : null}
		</section>
	);
}

type RailProps = { manifest: Manifest; clip: ManifestClip; concept: ManifestConcept | null; render: RenderInfo | null; engine: PlayerEngine; onPickRound: (round: number) => void; onCompareRounds: (earlier: number) => void; agentPrompt: () => string };

export function Rail({ manifest, clip, concept, render, engine, onPickRound, onCompareRounds, agentPrompt }: RailProps) {
	const review = manifest.mode === "review";
	const [tab, setTab] = useState<Tab>("Transcript");
	useEffect(() => {
		document.querySelector(".rail-body")?.scrollTo(0, 0);
	}, [tab]);
	return (
		<aside className="rail">
			<div className="rail-tabs" role="tablist">
				{TABS.map((name) => (
					<button key={name} type="button" role="tab" aria-selected={tab === name} className={tab === name ? "is-active" : undefined} onClick={() => setTab(name)}>
						{name}
					</button>
				))}
			</div>
			<div className="rail-body scroll">
				{tab === "Transcript" ? <WordsTab clip={clip} engine={engine} /> : null}
				{tab === "Rounds" ? <RoundsTab concept={concept} render={render} review={review} onPick={onPickRound} onCompare={onCompareRounds} /> : null}
				{tab === "Files" ? <FilesPanel engine={engine} clip={clip} concept={concept} /> : null}
			</div>
			{manifest.mode === "review" ? (
				<p className="rail-hint">Use the Inflight button to talk over any moment. Keep the timecode in view so your notes land on the right frame.</p>
			) : (
				<button type="button" className="rail-agent" onClick={() => void copyText(agentPrompt(), "Copied. Paste it to your agent.")}>
					<CopyIcon width={15} height={15} />
					Copy a prompt for this clip
				</button>
			)}
		</aside>
	);
}
