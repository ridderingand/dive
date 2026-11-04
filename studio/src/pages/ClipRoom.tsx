import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { Manifest, ManifestClip, ManifestConcept, RenderInfo } from "@core/manifest";
import type { Note } from "@core/moments";
import { FORMATS, type FormatId } from "@core/formats";
import { guestOf, mediaUrl } from "../lib/data";
import { useKeys } from "../lib/keys";
import { nextStep } from "../lib/next-step";
import { useDictation } from "../lib/dictation";
import { navigate, replaceQuery, useRoute } from "../lib/router";
import { prefetchVideos } from "../lib/video-source";
import { templateName } from "../lib/templates";
import { PlayerEngine, useEngineFrame } from "../player/engine";
import { EngineVideo } from "../player/EngineVideo";
import { Rail, type RailTab } from "../player/Rail";
import { Timeline } from "../player/Timeline";
import { RATES, Transport } from "../player/Transport";
import { BackIcon, CheckIcon, CopyIcon, SidebarClosedIcon, SidebarOpenIcon } from "../ui/icons";
import { copyText, toast } from "../ui/toast";
import { accentOf } from "./ClipsPage";

type Mode = "watch" | "compare";
type Pick = { concept: ManifestConcept; render: RenderInfo };

const MAX_COMPARE = 4;
const STAMP_EVERY_MS = 500;
const RAIL_KEY = "dive-studio:rail";
const pickKey = (conceptId: string, round: number) => `${conceptId}@${round}`;

// Storage can throw on a hosted review page, and the rail has to work there too.
function railWasClosed() {
	try {
		return localStorage.getItem(RAIL_KEY) === "closed";
	} catch {
		return false;
	}
}

function rememberRail(open: boolean) {
	try {
		localStorage.setItem(RAIL_KEY, open ? "open" : "closed");
	} catch {}
}

function renderOf(concept: ManifestConcept, round: number | null) {
	return concept.renders.find((render) => render.round === round) ?? concept.current;
}

function ConceptTab({ concept, active, onClick }: { concept: ManifestConcept; active: boolean; onClick: () => void }) {
	return (
		<button type="button" className={`concept-tab${active ? " is-active" : ""}`} onClick={onClick} title={`${concept.intent} ${templateName(concept.template)}, ${FORMATS[concept.format].ratio}, round ${concept.round}.`}>
			{concept.name}
		</button>
	);
}

const SAFE_ZONES: Record<FormatId, { top: number; bottom: number; right: number; left: number; note: string }> = {
	vertical: { top: 13, bottom: 21, right: 12, left: 4, note: "Reels, Shorts and TikTok buttons" },
	square: { top: 4, bottom: 10, right: 4, left: 4, note: "Feed crop and caption bar" },
	wide: { top: 5, bottom: 12, right: 5, left: 5, note: "Player controls" },
};

function SafeZones({ format }: { format: FormatId }) {
	const zone = SAFE_ZONES[format];
	return (
		<div className="safe-zones" aria-hidden>
			<div style={{ inset: `${zone.top}% ${zone.right}% ${zone.bottom}% ${zone.left}%` }} />
			<span>Keep text and faces inside the box. {zone.note} can cover the rest.</span>
		</div>
	);
}

function WaitingStage({ clip, guestName }: { clip: ManifestClip; guestName: string }) {
	const missing = [...clip.files.filter((file) => !file.exists).map((file) => file.file.split("/").pop()), ...(clip.audioExists ? [] : ["audio.m4a"])];
	const command = `bun run dive render ${clip.slug}`;
	if (clip.concepts.length > 0 && missing.length === 0) {
		return (
			<div className="waiting">
				<img src="/brand/snorkel.png" alt="" />
				<h2 className="wide">Ready to render</h2>
				<p className="role">The concepts are set. Render them to see them here.</p>
				<button type="button" className="pill-button mono" onClick={() => void copyText(command, "Command copied")}>
					{command}
					<CopyIcon width={14} height={14} />
				</button>
			</div>
		);
	}
	if (missing.length === 0) {
		const prompt = `Make the first concepts for the Dive clip ${clip.guest}/${clip.slug}. Follow studio/AGENTS.md.`;
		return (
			<div className="waiting">
				<img src="/brand/snorkel.png" alt="" />
				<h2 className="wide">Files are in</h2>
				<p className="role">Every track is here. Next, an agent builds the first concepts.</p>
				<button type="button" className="pill-button" onClick={() => void copyText(prompt, "Prompt copied")}>
					Copy the prompt
					<CopyIcon width={14} height={14} />
				</button>
			</div>
		);
	}
	const staleCut = clip.checks.find((check) => check.id === "cut-fresh" && check.level === "fail");
	if (clip.removed) {
		return (
			<div className="waiting">
				<img src="/brand/snorkel.png" alt="" />
				<h2 className="wide">Removed in Descript</h2>
				<p className="role">This clip's composition is marked removed, so nothing is needed here.</p>
			</div>
		);
	}
	if (staleCut) {
		const recut = `Re-export the cut list and per-word captions for ${clip.guest}/${clip.slug} from its Descript composition, then replace cuts.json and captions.json. Follow studio/AGENTS.md.`;
		return (
			<div className="waiting">
				<img src="/brand/snorkel.png" alt="" />
				<h2 className="wide">Cut list out of date</h2>
				<p className="role">{staleCut.message}</p>
				<button type="button" className="pill-button" onClick={() => void copyText(recut, "Prompt copied")}>
					Copy the prompt
					<CopyIcon width={14} height={14} />
				</button>
			</div>
		);
	}
	const prompt = `Fetch the Riverside tracks for ${guestName} into the Dive Club Clips Raw Drive folder, as guest.mp4, ridd.mp4 and screenshare.mp4, then trim ${clip.slug}.`;
	return (
		<div className="waiting">
			<img src="/brand/snorkel.png" alt="" />
			<h2 className="wide">Waiting on tracks</h2>
			<p className="role">The brief and cut are in. This clip still needs its files.</p>
			<div className="waiting-files mono">
				{missing.map((name) => (
					<span key={name}>{name}</span>
				))}
			</div>
			<button type="button" className="pill-button" onClick={() => void copyText(prompt, "Prompt copied")}>
				Copy the prompt for Grok
				<CopyIcon width={14} height={14} />
			</button>
		</div>
	);
}

function CompareGrid({ engine, picks, master, onMaster }: { engine: PlayerEngine; picks: Pick[]; master: string; onMaster: (id: string) => void }) {
	const rows = picks.length === 4 ? [picks.slice(0, 2), picks.slice(2)] : [picks];
	return (
		<div className="compare-grid" style={{ "--rows": rows.length } as React.CSSProperties}>
			{rows.map((row, rowIndex) => (
				<div key={rowIndex} className="compare-row">
					{row.map(({ concept, render }) => {
						const id = pickKey(concept.id, render.round);
						const isMaster = master === id;
						const ratio = render.width / render.height;
						return (
							<figure key={id} className={isMaster ? "is-master" : undefined} style={{ "--ratio": ratio } as React.CSSProperties}>
								<button type="button" className="compare-frame" onClick={() => onMaster(id)} title="Listen to this one" style={{ aspectRatio: `${render.width} / ${render.height}` }}>
									<EngineVideo engine={engine} id={id} src={mediaUrl(render.preview)} poster={mediaUrl(render.poster)} master={isMaster} />
								</button>
								<figcaption>
									<span className="wide">{concept.name}</span>
									<span className="role">R{render.round}{isMaster ? " · listening" : ""}</span>
								</figcaption>
							</figure>
						);
					})}
				</div>
			))}
		</div>
	);
}

export function ClipRoom({ manifest, clip, onChanged }: { manifest: Manifest; clip: ManifestClip; onChanged: () => void }) {
	const { query } = useRoute();
	const guest = guestOf(manifest, clip);
	const concepts = clip.concepts;
	const rendered = concepts.filter((concept) => concept.current);
	const [activeId, setActiveId] = useState<string | null>(query.get("c") ?? rendered[0]?.id ?? concepts[0]?.id ?? null);
	const [round, setRound] = useState<number | null>(query.get("r") ? Number(query.get("r")) : null);
	const [mode, setMode] = useState<Mode>(query.get("v") === "compare" ? "compare" : "watch");
	const [compareKeys, setCompareKeys] = useState<string[]>(() => rendered.slice(0, MAX_COMPARE).map((concept) => pickKey(concept.id, concept.current?.round ?? 1)));
	const [masterId, setMasterId] = useState<string | null>(null);
	const main = useRef<HTMLDivElement>(null);
	const [safeZones, setSafeZones] = useState(false);
	const [railOpen, setRailOpen] = useState(() => !railWasClosed());

	const engine = useMemo(() => new PlayerEngine(clip.fps, clip.durationS ?? 0), [clip]);
	useEffect(() => () => engine.dispose(), [engine]);

	const selected = concepts.find((item) => item.id === activeId) ?? null;

	const askedTime = query.get("t");
	const appliedTime = useRef<string | null>(null);
	useEffect(() => {
		if (askedTime === null || askedTime === appliedTime.current) return;
		appliedTime.current = askedTime;
		if (Math.abs(engine.time - Number(askedTime)) > 0.05) engine.seek(Number(askedTime));
	}, [askedTime, engine]);

	useEffect(() => {
		const previews = concepts.flatMap((item) => (item.current ? [mediaUrl(item.current.preview)] : []));
		void prefetchVideos([...previews, ...clip.files.flatMap((file) => (file.proxy ? [mediaUrl(file.proxy)] : []))]);
	}, [clip, concepts]);

	useEffect(() => {
		document.title = `${clip.title} · Dive Studio`;
		return () => {
			document.title = "Dive Studio";
		};
	}, [clip]);

	const picks = useMemo<Pick[]>(() => {
		const list: Pick[] = [];
		for (const key of compareKeys) {
			const [id, round] = key.split("@");
			const item = concepts.find((entry) => entry.id === id);
			const found = item?.renders.find((entry) => entry.round === Number(round));
			if (item && found) list.push({ concept: item, render: found });
		}
		return list;
	}, [compareKeys, concepts]);
	const compareMaster = masterId && picks.some((pick) => pickKey(pick.concept.id, pick.render.round) === masterId) ? masterId : picks[0] ? pickKey(picks[0].concept.id, picks[0].render.round) : "";

	const listening = mode === "compare" ? picks.find((pick) => pickKey(pick.concept.id, pick.render.round) === compareMaster) : undefined;
	const concept = listening?.concept ?? selected;
	const render = listening?.render ?? (selected ? renderOf(selected, round) : null);
	const hasVideo = Boolean(render);

	useEffect(() => {
		replaceQuery({ c: concept?.id ?? null, v: mode === "watch" ? null : mode, r: round === null ? null : String(round) });
	}, [concept, mode, round]);

	// Screen recordings log URL changes on the same clock as the voice, so keeping the playhead here
	// ties everything said to the moment on screen. Safari allows about 3 URL changes a second.
	const lastStamp = useRef(0);
	useEngineFrame(engine, (t) => {
		const now = performance.now();
		if (now - lastStamp.current < STAMP_EVERY_MS) return;
		const value = t > 0 ? t.toFixed(2) : null;
		if (value === appliedTime.current) return;
		lastStamp.current = now;
		appliedTime.current = value;
		replaceQuery({ t: value });
	});

	const selectConcept = useCallback(
		(id: string) => {
			if (mode === "compare") {
				const item = concepts.find((entry) => entry.id === id);
				if (!item?.current) return;
				const key = pickKey(id, item.current.round);
				setCompareKeys((keys) => (keys.some((entry) => entry.startsWith(`${id}@`)) ? keys.filter((entry) => !entry.startsWith(`${id}@`)) : [...keys, key].slice(-MAX_COMPARE)));
				return;
			}
			setActiveId(id);
			setRound(null);
		},
		[mode, concepts],
	);

	const compareRounds = useCallback(
		(earlier: number) => {
			if (!concept || !render) return;
			setCompareKeys([pickKey(concept.id, earlier), pickKey(concept.id, render.round)]);
			setMasterId(pickKey(concept.id, render.round));
			setMode("compare");
		},
		[concept, render],
	);

	const [notes, setNotes] = useState<Note[]>([]);
	useEffect(() => {
		if (manifest.mode !== "local") return;
		fetch(mediaUrl(`notes/${clip.guest}/${clip.slug}/notes.json`), { cache: "no-store" })
			.then((response) => (response.ok ? response.json() : []))
			.then(setNotes)
			.catch(() => {});
	}, [manifest.mode, clip]);
	const [railTab, setRailTab] = useState<RailTab>("Transcript");
	const dictation = useDictation({
		engine,
		guest: clip.guest,
		slug: clip.slug,
		count: () => notes.length,
		current: () => ({ concept: concept?.id ?? null, round: render?.round ?? null }),
		onNotes: (next) => {
			setNotes(next);
			setRailTab("Notes");
			rememberRail(true);
			setRailOpen(true);
		},
		onError: toast,
	});
	const saveNotes = (next: Note[]) => {
		setNotes(next);
		void fetch("/api/notes/save", { method: "POST", body: JSON.stringify({ clip: `${clip.guest}/${clip.slug}`, notes: next }) });
	};

	const togglePosted = () => {
		void fetch(`/api/posted?clip=${clip.guest}/${clip.slug}${clip.posted ? "&undo=1" : ""}`, { method: "POST" }).then((response) => {
			if (response.ok) onChanged();
			else toast("Couldn't save that. Is the studio running with bun run dev?");
		});
	};

	const fullscreen = useCallback(() => void main.current?.requestFullscreen?.(), []);
	const toggleRail = () => {
		rememberRail(!railOpen);
		setRailOpen(!railOpen);
	};

	const jumpCut = (direction: 1 | -1) => {
		const edges = (concept?.cuts ?? []).map((cut) => cut.from).sort((a, b) => a - b);
		const t = engine.time;
		const next = direction > 0 ? edges.find((edge) => edge > t + 0.01) : [...edges].reverse().find((edge) => edge < t - 0.2);
		if (next !== undefined) engine.seek(next);
	};

	const stepRate = (direction: 1 | -1) => {
		const index = RATES.indexOf(engine.state.rate);
		const next = RATES[Math.min(RATES.length - 1, Math.max(0, index + direction))];
		if (next) engine.setRate(next);
	};

	useKeys({
		" ": () => engine.toggle(),
		k: () => engine.toggle(),
		j: () => engine.seek(engine.time - 5),
		l: () => engine.seek(engine.time + 5),
		ArrowLeft: () => engine.step(-1),
		ArrowRight: () => engine.step(1),
		"shift+ArrowLeft": () => engine.seek(engine.time - 1),
		"shift+ArrowRight": () => engine.seek(engine.time + 1),
		"[": () => jumpCut(-1),
		"]": () => jumpCut(1),
		",": () => stepRate(-1),
		".": () => stepRate(1),
		m: () => engine.toggleMute(),
		s: () => setSafeZones((shown) => !shown),
		w: () => setMode("watch"),
		f: fullscreen,
		"\\": toggleRail,
		// The Inflight widget owns C on a hosted review.
		...(manifest.mode === "local" ? { t: dictation.toggle, c: () => rendered.length > 1 && setMode("compare") } : {}),
		...Object.fromEntries(concepts.slice(0, 9).map((item, index) => [String(index + 1), () => selectConcept(item.id)])),
	});

	const ratio = render ? render.width / render.height : 1;
	const reviewMany = manifest.mode === "review" && manifest.clips.length > 1;
	const next = nextStep(clip);

	return (
		<div className={`room${railOpen ? "" : " is-rail-closed"}`} style={{ "--accent": accentOf(guest) } as React.CSSProperties}>
			<header className="room-head">
				{manifest.mode === "local" || reviewMany ? (
					<button type="button" className="icon-button" onClick={() => navigate("/")} aria-label="All clips">
						<BackIcon />
					</button>
				) : null}
				<div className="room-title">
					<h1 className="wide">{clip.title}</h1>
					<span className="room-guest">
						<span className="room-guest-name">{guest.name}</span>
						{next ? <span className={`status tone-${next.tone}`}>{next.text}</span> : null}
					</span>
				</div>
				{manifest.mode === "local" ? (
					<button type="button" className={`pill-button posted-button${clip.posted ? " is-posted" : ""}`} onClick={togglePosted} aria-pressed={clip.posted}>
						{clip.posted ? <CheckIcon width={15} height={15} /> : null}
						{clip.posted ? "Posted" : "Mark as posted"}
					</button>
				) : null}
				{rendered.length > 1 ? (
					<div className="mode-switch" role="tablist" aria-label="View">
						<button type="button" role="tab" aria-selected={mode === "watch"} className={mode === "watch" ? "is-active" : undefined} onClick={() => setMode("watch")}>
							Watch
						</button>
						<button type="button" role="tab" aria-selected={mode === "compare"} className={mode === "compare" ? "is-active" : undefined} onClick={() => setMode("compare")}>
							Compare
						</button>
					</div>
				) : null}
				<button type="button" className="icon-button" onClick={toggleRail} aria-label={railOpen ? "Hide sidebar" : "Show sidebar"} aria-expanded={railOpen} title={railOpen ? "Hide sidebar" : "Show sidebar"}>
					{railOpen ? <SidebarOpenIcon /> : <SidebarClosedIcon />}
				</button>
			</header>

			<div ref={main} className="room-main">
				{concepts.length > 1 ? (
					<div className="concept-tabs" role="group" aria-label="Concepts">
						{concepts.map((item) => (
							<ConceptTab key={item.id} concept={item} active={mode === "compare" ? compareKeys.some((key) => key.startsWith(`${item.id}@`)) : item.id === activeId} onClick={() => selectConcept(item.id)} />
						))}
					</div>
				) : null}

				<div className="stage">
					{mode === "watch" && render && concept ? (
						<div className="stage-frame" style={{ aspectRatio: `${render.width} / ${render.height}`, "--ratio": ratio } as React.CSSProperties}>
							<EngineVideo key={`${concept.id}@${render.round}`} engine={engine} id={`${concept.id}@${render.round}`} src={mediaUrl(render.preview)} poster={mediaUrl(render.poster)} master />
							<button type="button" className="stage-hit" aria-label="Play or pause" onClick={() => engine.toggle()} />
							{safeZones ? <SafeZones format={concept.format} /> : null}
						</div>
					) : null}
					{mode === "watch" && !render ? <WaitingStage clip={clip} guestName={guest.name} /> : null}
					{mode === "compare" ? <CompareGrid engine={engine} picks={picks} master={compareMaster} onMaster={setMasterId} /> : null}
				</div>

				<Transport engine={engine} dictation={manifest.mode === "local" && hasVideo ? dictation : null} onFullscreen={fullscreen} safeZones={safeZones} onSafeZones={() => setSafeZones((shown) => !shown)} disabled={!hasVideo} />
			</div>

			<Rail open={railOpen} manifest={manifest} clip={clip} concept={concept} render={render} engine={engine} tab={railTab} onTab={setRailTab} notes={notes} onNotes={saveNotes} onPickRound={setRound} onCompareRounds={compareRounds} />
			<Timeline engine={engine} clip={clip} concept={concept} render={render} notes={notes} />
		</div>
	);
}
