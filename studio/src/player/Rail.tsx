import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import type { Check } from "@core/checks";
import type { Manifest, ManifestClip, ManifestConcept, RenderInfo } from "@core/manifest";
import { activeAt } from "@core/captions";
import { shortTime } from "@core/time";
import { rules } from "../../system/rules";
import { AlertIcon, ArrowOutIcon, CheckIcon, CopyIcon } from "../ui/icons";
import { copyText } from "../ui/toast";
import { mediaUrl } from "../lib/data";
import { useEngineFrame, type PlayerEngine } from "./engine";

const TABS = ["Brief", "Words", "Files", "Rules", "Rounds"] as const;
type Tab = (typeof TABS)[number];

function Quote({ label, text, at, engine }: { label: string; text: string; at?: number; engine: PlayerEngine }) {
	return (
		<section className="rail-block">
			<h4 className="label">{label}</h4>
			{at === undefined ? (
				<p className="rail-quote">{text}</p>
			) : (
				<button type="button" className="rail-quote rail-seek" onClick={() => engine.seek(at)}>
					{text}
				</button>
			)}
		</section>
	);
}

function payoffTime(clip: ManifestClip) {
	const words = clip.captions?.words ?? [];
	const sentences = words.filter((word, index) => index === 0 || /[.!?]$/.test(words[index - 1]?.text ?? ""));
	return sentences[sentences.length - 1]?.start;
}

function BriefTab({ clip, concept, engine, review }: { clip: ManifestClip; concept: ManifestConcept | null; engine: PlayerEngine; review: boolean }) {
	return (
		<>
			{concept?.intent ? (
				<section className="rail-block rail-intent">
					<h4 className="label">This concept</h4>
					<p>{concept.intent}</p>
				</section>
			) : null}
			<Quote label="Hook" text={clip.hook} at={0} engine={engine} />
			<Quote label="Payoff" text={clip.payoff} at={payoffTime(clip)} engine={engine} />
			{clip.arc ? <Quote label="Arc" text={clip.arc} engine={engine} /> : null}
			{clip.beats.length > 0 ? (
				<section className="rail-block">
					<h4 className="label">Beats</h4>
					<div className="beat-list">
						{clip.beats.map((beat) => (
							<button key={`${beat.start}-${beat.line}`} type="button" onClick={() => beat.start !== null && engine.seek(beat.start)}>
								<span className="mono">{beat.start !== null ? shortTime(beat.start) : "–"}</span>
								<span>
									{beat.visual}
									{beat.line ? <em className="role">{beat.line}</em> : null}
								</span>
							</button>
						))}
					</div>
				</section>
			) : null}
			{clip.broll.length > 0 ? (
				<section className="rail-block">
					<h4 className="label">B-roll moments</h4>
					<ul className="rail-list">
						{clip.broll.map((item) => (
							<li key={item.name}>
								<strong>{item.name.replace(/-/g, " ")}</strong>
								{item.note ? <span>{item.note}</span> : null}
								{item.rawTimecode ? <span className="mono rail-tiny">{item.rawTimecode}</span> : null}
							</li>
						))}
					</ul>
				</section>
			) : null}
			{clip.visualNotes.length > 0 ? (
				<section className="rail-block">
					<h4 className="label">Visual notes</h4>
					<ul className="rail-list">{clip.visualNotes.map((note) => <li key={note}>{note}</li>)}</ul>
				</section>
			) : null}
			{clip.openIssues.length > 0 ? (
				<section className="rail-block">
					<h4 className="label">Open issues</h4>
					<ul className="rail-list is-warn">{clip.openIssues.map((issue) => <li key={issue}>{issue}</li>)}</ul>
				</section>
			) : null}
			{review ? null : (
				<section className="rail-block rail-links">
					<span className="chip">Notion: {clip.status}</span>
					{clip.notionUrl ? <a className="pill-button" href={clip.notionUrl} target="_blank" rel="noreferrer">Notion <ArrowOutIcon width={14} height={14} /></a> : null}
					{clip.descriptUrl ? <a className="pill-button" href={clip.descriptUrl} target="_blank" rel="noreferrer">Descript <ArrowOutIcon width={14} height={14} /></a> : null}
				</section>
			)}
		</>
	);
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

function FilesTab({ clip }: { clip: ManifestClip }) {
	const required = [...clip.files.map((file) => ({ key: file.key, label: file.label, kind: file.kind, name: file.file.split("/").pop() ?? file.file, exists: file.exists, bytes: file.bytes })), { key: "audio", label: "Final mix", kind: "audio", name: "audio.m4a", exists: clip.audioExists, bytes: 0 }];
	return (
		<>
			<section className="rail-block">
				<h4 className="label">One file per person</h4>
				<div className="file-list">
					{required.map((file) => (
						<div key={file.key} className={file.exists ? undefined : "is-missing"}>
							<span className="file-status">{file.exists ? <CheckIcon width={14} height={14} /> : <AlertIcon width={14} height={14} />}</span>
							<span>
								<strong>{file.label}</strong>
								<span className="mono rail-tiny">{file.name}</span>
							</span>
							<span className="mono rail-tiny">{file.exists ? (file.bytes ? bytes(file.bytes) : "ready") : "missing"}</span>
						</div>
					))}
				</div>
			</section>
			{clip.sourceNote ? (
				<section className="rail-block">
					<h4 className="label">Source note</h4>
					<p className="rail-quote">{clip.sourceNote}</p>
				</section>
			) : null}
		</>
	);
}

function CheckRow({ check, engine }: { check: Check; engine: PlayerEngine }) {
	const content: ReactNode = (
		<>
			<span className={`check-dot level-${check.level}`} />
			<span>
				<strong>{check.title}</strong>
				<span>{check.message}</span>
			</span>
		</>
	);
	return check.at === undefined ? <div className="check-row">{content}</div> : <button type="button" className="check-row" onClick={() => engine.seek(check.at ?? 0)}>{content}</button>;
}

function RulesTab({ clip, concept, engine }: { clip: ManifestClip; concept: ManifestConcept | null; engine: PlayerEngine }) {
	const checked = [...clip.checks, ...(concept?.checks ?? [])];
	const judged = new Set(checked.map((check) => check.id));
	return (
		<>
			<section className="rail-block">
				<h4 className="label">Checks{concept ? ` for concept ${concept.id.toUpperCase()}` : ""}</h4>
				<div className="check-list">{checked.map((check) => <CheckRow key={check.id} check={check} engine={engine} />)}</div>
			</section>
			<section className="rail-block">
				<h4 className="label">By eye</h4>
				<ul className="rail-list">{rules.filter((rule) => !judged.has(rule.id) && !rule.check && rule.group !== "Process").map((rule) => <li key={rule.id}><strong>{rule.title}</strong><span>{rule.detail}</span></li>)}</ul>
			</section>
		</>
	);
}

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
	const tabs = review ? TABS.filter((name) => name !== "Rules") : TABS;
	const [tab, setTab] = useState<Tab>("Brief");
	useEffect(() => {
		document.querySelector(".rail-body")?.scrollTo(0, 0);
	}, [tab]);
	const warnings = [...clip.checks, ...(concept?.checks ?? [])].filter((check) => check.level !== "pass").length;
	return (
		<aside className="rail">
			<div className="rail-tabs" role="tablist">
				{tabs.map((name) => (
					<button key={name} type="button" role="tab" aria-selected={tab === name} className={tab === name ? "is-active" : undefined} onClick={() => setTab(name)}>
						{name}
						{name === "Rules" && warnings > 0 ? <i>{warnings}</i> : null}
					</button>
				))}
			</div>
			<div className="rail-body scroll">
				{tab === "Brief" ? <BriefTab clip={clip} concept={concept} engine={engine} review={manifest.mode === "review"} /> : null}
				{tab === "Words" ? <WordsTab clip={clip} engine={engine} /> : null}
				{tab === "Files" ? <FilesTab clip={clip} /> : null}
				{tab === "Rules" ? <RulesTab clip={clip} concept={concept} engine={engine} /> : null}
				{tab === "Rounds" ? <RoundsTab concept={concept} render={render} review={manifest.mode === "review"} onPick={onPickRound} onCompare={onCompareRounds} /> : null}
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
