import { useEffect, useMemo, useRef, useState } from "react";
import type { Manifest, ManifestClip, ManifestConcept, RenderInfo } from "@core/manifest";
import { activeAt } from "@core/captions";
import type { Take } from "@core/moments";
import { toClip, toEdited } from "@core/removals";
import { timecode } from "@core/time";
import { useKeys } from "../lib/keys";
import { ArrowOutIcon } from "../ui/icons";
import { copyText, toast } from "../ui/toast";
import { mediaUrl } from "../lib/data";
import { useEngineFrame, type PlayerEngine } from "./engine";
import { FilesPanel } from "./FilesPanel";

// Outlasts the fade in room.css, so the Files videos stop only once the rail is out of sight.
const RAIL_CLOSE_MS = 280;
const TABS = ["Transcript", "Rounds", "Files"] as const;
type Tab = (typeof TABS)[number];

const CUT_BUTTON_HALF = 56;

function selectedWords(box: HTMLElement | null): number[] {
	const selection = window.getSelection();
	if (!box || !selection || selection.isCollapsed || selection.rangeCount === 0) return [];
	const range = selection.getRangeAt(0);
	if (!box.contains(range.commonAncestorContainer)) return [];
	return [...box.querySelectorAll<HTMLElement>("[data-i]")].filter((node) => range.intersectsNode(node)).map((node) => Number(node.dataset.i));
}

function pendingKey(clip: ManifestClip, concept: ManifestConcept | null) {
	return `dive-cuts:${clip.guest}/${clip.slug}:${concept?.id}:${concept?.round}`;
}

function runsOf(indexes: number[]) {
	const runs: number[][] = [];
	for (const index of [...indexes].sort((a, b) => a - b)) {
		const run = runs[runs.length - 1];
		if (run && run[run.length - 1] === index - 1) run.push(index);
		else runs.push([index]);
	}
	return runs;
}

function cutPrompt(clip: ManifestClip, concept: ManifestConcept | null, indexes: number[]) {
	const words = clip.captions?.words ?? [];
	const lines = runsOf(indexes).flatMap((run) => {
		const first = words[run[0] ?? 0];
		const last = words[run[run.length - 1] ?? 0];
		if (!first || !last) return [];
		return [`- ${first.start.toFixed(2)}s to ${last.end.toFixed(2)}s (${timecode(first.start, clip.fps)}): "${run.map((index) => words[index]?.text).join(" ")}"`];
	});
	const target = concept ? `, concept ${concept.id} (${concept.name}), round ${concept.round}` : "";
	return [`Cut these words from the Dive clip "${clip.title}" (${clip.guest}/${clip.slug})${target}. Read studio/AGENTS.md first. Times are in clip seconds, so add them to the concept's removals, then record the round and render.`, "", ...lines].join("\n");
}

function WordsTab({ clip, concept, engine, canCut, onTake }: { clip: ManifestClip; concept: ManifestConcept | null; engine: PlayerEngine; canCut: boolean; onTake: (take: Take) => void }) {
	const box = useRef<HTMLDivElement>(null);
	const lastIndex = useRef(-1);
	const words = clip.captions?.words ?? [];
	const removals = useMemo(() => concept?.removals ?? [], [concept]);
	const [pending, setPending] = useState<number[]>([]);
	const [picked, setPicked] = useState<{ indexes: number[]; x: number; y: number } | null>(null);
	useEffect(() => {
		setPending(JSON.parse(localStorage.getItem(pendingKey(clip, concept)) ?? "[]") as number[]);
	}, [clip, concept]);
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
		const word = activeAt(words, toClip(t, removals));
		const index = word?.i ?? -1;
		if (index === lastIndex.current) return;
		box.current?.querySelector(".is-now")?.classList.remove("is-now");
		lastIndex.current = index;
		if (index < 0) return;
		const node = box.current?.querySelector(`[data-i="${index}"]`);
		node?.classList.add("is-now");
		if (engine.state.playing) node?.scrollIntoView({ block: "center", behavior: "smooth" });
	});

	const readSelection = () => {
		if (!canCut) return;
		const indexes = selectedWords(box.current);
		const rect = window.getSelection()?.rangeCount ? window.getSelection()?.getRangeAt(0).getBoundingClientRect() : null;
		const frame = box.current?.getBoundingClientRect();
		setPicked(indexes.length > 0 && rect && frame ? { indexes, x: Math.min(frame.width - CUT_BUTTON_HALF, Math.max(CUT_BUTTON_HALF, rect.left - frame.left + rect.width / 2)), y: rect.bottom - frame.top } : null);
	};

	const cut = () => {
		if (!picked) return;
		const restoring = picked.indexes.every((index) => pending.includes(index));
		const next = restoring ? pending.filter((index) => !picked.indexes.includes(index)) : [...new Set([...pending, ...picked.indexes])];
		setPending(next);
		localStorage.setItem(pendingKey(clip, concept), JSON.stringify(next));
		setPicked(null);
		window.getSelection()?.removeAllRanges();
		if (next.length === 0) return toast("Cut undone");
		const prompt = cutPrompt(clip, concept, next);
		void copyText(prompt, "Copied. Paste in Claude.");
		const count = next.length;
		void fetch("/api/takes", { method: "POST", body: JSON.stringify({ guest: clip.guest, slug: clip.slug, prompt, preview: `Cut ${count} ${count === 1 ? "word" : "words"}: ${next.slice(0, 12).map((index) => words[index]?.text).join(" ")}` }) })
			.then((response) => response.json())
			.then(onTake)
			.catch(() => {});
	};

	useKeys(picked ? { Backspace: cut, Delete: cut } : {});

	if (words.length === 0) return <p className="rail-empty">No captions yet. They come from the Descript final cut.</p>;
	const gone = (start: number, end: number) => removals.some((span) => (start + end) / 2 >= span.from && (start + end) / 2 < span.to);
	return (
		<div ref={box} className="words" onPointerUp={() => window.setTimeout(readSelection)}>
			{clip.captions?.source === "srt-estimate" ? <p className="rail-note">Word timing here is estimated from phrases until the Descript per-word export lands.</p> : null}
			{paragraphs.map((group) => (
				<p key={group[0]?.i}>
					{group.map((word) => {
						const removed = gone(word.start, word.end);
						const classes = [word.em ? "is-em" : "", pending.includes(word.i) || removed ? "is-cut" : ""].filter(Boolean).join(" ");
						return (
							<button key={word.i} type="button" data-i={word.i} className={classes || undefined} onClick={() => !window.getSelection()?.toString() && engine.seek(toEdited(word.start, removals))}>
								{word.text}
							</button>
						);
					})}
				</p>
			))}
			{picked ? (
				<button type="button" className="cut-button" style={{ left: picked.x, top: picked.y + 8 }} onPointerDown={(event) => event.preventDefault()} onClick={cut}>
					{picked.indexes.every((index) => pending.includes(index)) ? "Undo cut" : "Cut"}
					<kbd>⌫</kbd>
				</button>
			) : null}
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

type RailProps = { open: boolean; manifest: Manifest; clip: ManifestClip; concept: ManifestConcept | null; render: RenderInfo | null; engine: PlayerEngine; onTake: (take: Take) => void; onPickRound: (round: number) => void; onCompareRounds: (earlier: number) => void };

export function Rail({ open, manifest, clip, concept, render, engine, onTake, onPickRound, onCompareRounds }: RailProps) {
	const review = manifest.mode === "review";
	const [tab, setTab] = useState<Tab>("Transcript");
	const [filesLive, setFilesLive] = useState(open);
	if (open && !filesLive) setFilesLive(true);
	useEffect(() => {
		document.querySelector(".rail-body")?.scrollTo(0, 0);
	}, [tab]);
	useEffect(() => {
		if (open) return;
		const timer = setTimeout(() => setFilesLive(false), RAIL_CLOSE_MS);
		return () => clearTimeout(timer);
	}, [open]);
	return (
		<aside className="rail" inert={!open}>
			<div className="rail-tabs" role="tablist">
				{TABS.map((name) => (
					<button key={name} type="button" role="tab" aria-selected={tab === name} className={tab === name ? "is-active" : undefined} onClick={() => setTab(name)}>
						{name}
					</button>
				))}
			</div>
			<div className="rail-body scroll">
				{tab === "Transcript" ? <WordsTab clip={clip} concept={concept} engine={engine} canCut={!review} onTake={onTake} /> : null}
				{tab === "Rounds" ? <RoundsTab concept={concept} render={render} review={review} onPick={onPickRound} onCompare={onCompareRounds} /> : null}
				{tab === "Files" && filesLive ? <FilesPanel engine={engine} clip={clip} concept={concept} /> : null}
			</div>
			{review ? <p className="rail-hint">Use the Inflight button to talk over any moment. Move through the video as you talk, and your notes stay tied to what's on screen.</p> : null}
		</aside>
	);
}
