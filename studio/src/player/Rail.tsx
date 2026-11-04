import { useEffect, useMemo, useRef, useState } from "react";
import type { Manifest, ManifestClip, ManifestConcept, RenderInfo } from "@core/manifest";
import { activeAt } from "@core/captions";
import { notesPrompt, type Note } from "@core/moments";
import { timecode } from "@core/time";
import { ArrowOutIcon, CloseIcon } from "../ui/icons";
import { copyText } from "../ui/toast";
import { mediaUrl } from "../lib/data";
import { useEngineFrame, type PlayerEngine } from "./engine";
import { FilesPanel } from "./FilesPanel";

// Outlasts the fade in room.css, so the Files videos stop only once the rail is out of sight.
const RAIL_CLOSE_MS = 280;
const TABS = ["Transcript", "Notes", "Rounds", "Files"] as const;
export type RailTab = (typeof TABS)[number];

function NotesTab({ clip, notes, engine, concepts, onNotes }: { clip: ManifestClip; notes: Note[]; engine: PlayerEngine; concepts: ManifestConcept[]; onNotes: (notes: Note[]) => void }) {
	if (notes.length === 0) return <p className="rail-empty">Press Talk, move through the video and say what you'd change. Each note lands on the moment you're on.</p>;
	const ordered = [...notes].sort((a, b) => a.clipFrom - b.clipFrom);
	const conceptName = (id: string | null) => (concepts.length > 1 ? concepts.find((item) => item.id === id)?.name : undefined);
	const prompt = () => notesPrompt(clip, concepts, notes, timecode);
	return (
		<div className="notes">
			{ordered.map((note) => (
				<div key={note.id} className="note">
					<div className="note-head">
						<button type="button" className="note-time mono" onClick={() => engine.seek(note.clipFrom)}>
							{timecode(note.clipFrom, clip.fps)}
						</button>
						{conceptName(note.concept) ? <span className="role">{conceptName(note.concept)}</span> : null}
						<button type="button" className="note-delete" aria-label="Delete note" onClick={() => onNotes(notes.filter((item) => item.id !== note.id))}>
							<CloseIcon width={14} height={14} />
						</button>
					</div>
					<textarea aria-label="Note" rows={1} defaultValue={note.text} ref={fitTextarea} onInput={(event) => fitTextarea(event.currentTarget)} onBlur={(event) => event.target.value !== note.text && onNotes(notes.map((item) => (item.id === note.id ? { ...item, text: event.target.value } : item)))} />
				</div>
			))}
			<div className="notes-actions">
				<button type="button" className="send-notes" onClick={() => void copyText(prompt(), "Copied. Paste it into Claude.")}>
					Copy notes for Claude
				</button>
				<button type="button" className="pill-button" onClick={() => onNotes([])}>
					Clear
				</button>
			</div>
		</div>
	);
}

function fitTextarea(node: HTMLTextAreaElement | null) {
	if (!node) return;
	node.style.height = "auto";
	node.style.height = `${node.scrollHeight}px`;
}

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

type RailProps = { open: boolean; manifest: Manifest; clip: ManifestClip; concept: ManifestConcept | null; render: RenderInfo | null; engine: PlayerEngine; tab: RailTab; onTab: (tab: RailTab) => void; notes: Note[]; onNotes: (notes: Note[]) => void; onPickRound: (round: number) => void; onCompareRounds: (earlier: number) => void };

export function Rail({ open, manifest, clip, concept, render, engine, tab, onTab, notes, onNotes, onPickRound, onCompareRounds }: RailProps) {
	const review = manifest.mode === "review";
	const tabs = review ? TABS.filter((name) => name !== "Notes") : TABS;
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
				{tabs.map((name) => (
					<button key={name} type="button" role="tab" aria-selected={tab === name} className={tab === name ? "is-active" : undefined} onClick={() => onTab(name)}>
						{name}
						{name === "Notes" && notes.length > 0 ? <i>{notes.length}</i> : null}
					</button>
				))}
			</div>
			<div className="rail-body scroll">
				{tab === "Transcript" ? <WordsTab clip={clip} engine={engine} /> : null}
				{tab === "Notes" ? <NotesTab clip={clip} notes={notes} engine={engine} concepts={clip.concepts} onNotes={onNotes} /> : null}
				{tab === "Rounds" ? <RoundsTab concept={concept} render={render} review={review} onPick={onPickRound} onCompare={onCompareRounds} /> : null}
				{tab === "Files" && filesLive ? <FilesPanel engine={engine} clip={clip} concept={concept} /> : null}
			</div>
			{review ? <p className="rail-hint">Use the Inflight button to talk over any moment. Move through the video as you talk, and your notes stay tied to what's on screen.</p> : null}
		</aside>
	);
}
