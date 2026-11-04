import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { activeAt } from "@core/captions";
import type { Manifest, ManifestClip, ManifestConcept, RenderInfo } from "@core/manifest";
import { FORMATS, type FormatId } from "@core/formats";
import { timecode } from "@core/time";
import { guestOf, mediaUrl } from "../lib/data";
import { useKeys } from "../lib/keys";
import { nextStep } from "../lib/next-step";
import { navigate, replaceQuery, useRoute } from "../lib/router";
import { prefetchVideos } from "../lib/video-source";
import { templateName } from "../lib/templates";
import { PlayerEngine, useEngineState } from "../player/engine";
import { EngineVideo } from "../player/EngineVideo";
import { FilesWall } from "../player/FilesWall";
import { Rail } from "../player/Rail";
import { Timeline } from "../player/Timeline";
import { RATES, Transport } from "../player/Transport";
import { BackIcon, CopyIcon } from "../ui/icons";
import { StageMeter } from "../ui/StageMeter";
import { copyText } from "../ui/toast";
import { accentOf } from "./ClipsPage";

type Mode = "watch" | "compare" | "files";
type Pick = { concept: ManifestConcept; render: RenderInfo };

const MAX_COMPARE = 4;
const pickKey = (conceptId: string, round: number) => `${conceptId}@${round}`;

function renderOf(concept: ManifestConcept, round: number | null) {
	return concept.renders.find((render) => render.round === round) ?? concept.current;
}

function ConceptChip({ concept, index, active, inCompare, review, onClick }: { concept: ManifestConcept; index: number; active: boolean; inCompare: boolean; review: boolean; onClick: () => void }) {
	const poster = concept.current?.poster;
	return (
		<button type="button" className={`concept-chip${active ? " is-active" : ""}${inCompare ? " is-compare" : ""}`} onClick={onClick} title={concept.intent}>
			<span className="concept-bubble" style={poster ? { backgroundImage: `url(${mediaUrl(poster)})` } : undefined}>
				{poster ? null : concept.id.toUpperCase()}
			</span>
			<span className="concept-meta">
				<span className="concept-name wide">
					<kbd>{index + 1}</kbd> {concept.name}
				</span>
				<span className="concept-detail role">
					{templateName(concept.template)} · {FORMATS[concept.format].ratio} · R{concept.round}
					{concept.stale && !review ? " · stale" : ""}
					{concept.status === "picked" ? " · picked" : ""}
				</span>
			</span>
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
			<span>{zone.note}</span>
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

export function ClipRoom({ manifest, clip }: { manifest: Manifest; clip: ManifestClip }) {
	const { query } = useRoute();
	const guest = guestOf(manifest, clip);
	const concepts = clip.concepts;
	const rendered = concepts.filter((concept) => concept.current);
	const [activeId, setActiveId] = useState<string | null>(query.get("c") ?? rendered[0]?.id ?? concepts[0]?.id ?? null);
	const [round, setRound] = useState<number | null>(query.get("r") ? Number(query.get("r")) : null);
	const [mode, setMode] = useState<Mode>((query.get("v") as Mode) ?? "watch");
	const [compareKeys, setCompareKeys] = useState<string[]>(() => rendered.slice(0, MAX_COMPARE).map((concept) => pickKey(concept.id, concept.current?.round ?? 1)));
	const [masterId, setMasterId] = useState<string | null>(null);
	const main = useRef<HTMLDivElement>(null);
	const [safeZones, setSafeZones] = useState(false);

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

	const state = useEngineState(engine);
	useEffect(() => {
		if (state.playing) return;
		const t = engine.time > 0 ? engine.time.toFixed(2) : null;
		appliedTime.current = t;
		replaceQuery({ c: activeId, v: mode === "watch" ? null : mode, r: round === null ? null : String(round), t });
	}, [activeId, mode, round, engine, state.playing]);

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

	const describeMoment = useCallback(() => {
		const t = engine.time;
		const cut = concept?.cuts.find((item) => t >= item.from && t < item.to);
		const words = clip.captions?.words ?? [];
		const word = activeAt(words, t);
		const around = word ? words.slice(Math.max(0, word.i - 6), word.i + 7).map((item) => item.text).join(" ") : null;
		return [
			`Dive clip: ${clip.guest}/${clip.slug}`,
			concept ? `Concept ${concept.id} (${concept.name}), round ${render?.round ?? concept.round}, ${concept.template}` : null,
			`At ${timecode(t, clip.fps)} (${t.toFixed(2)}s)`,
			cut ? `On screen: ${cut.label ?? cut.source}` : null,
			around ? `Said: "${around}"` : null,
			"",
			"Change: ",
		].filter((line) => line !== null).join("\n");
	}, [engine, concept, clip, render]);

	const copyMoment = useCallback(() => void copyText(describeMoment(), "Moment copied"), [describeMoment]);
	const fullscreen = useCallback(() => void main.current?.requestFullscreen?.(), []);

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
		f: (event) => (event.shiftKey ? fullscreen() : setMode("files")),
		// The Inflight widget owns C and T on a hosted review.
		...(manifest.mode === "local" ? { t: copyMoment, c: () => rendered.length > 1 && setMode("compare") } : {}),
		...Object.fromEntries(concepts.slice(0, 9).map((item, index) => [String(index + 1), () => selectConcept(item.id)])),
	});

	const agentPrompt = () => `Dive clip ${clip.guest}/${clip.slug}${concept ? `, concept ${concept.id}` : ""}. Read studio/AGENTS.md first.\n\n`;
	const ratio = render ? render.width / render.height : 1;
	const reviewMany = manifest.mode === "review" && manifest.clips.length > 1;
	const next = nextStep(clip);

	return (
		<div className="room" style={{ "--accent": accentOf(guest) } as React.CSSProperties}>
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
						<span className={`role dots${next.warn ? " is-warn" : ""}`}>{next.text}</span>
					</span>
				</div>
				<StageMeter stage={clip.stage} />
				<div className="mode-switch" role="tablist" aria-label="View">
					<button type="button" role="tab" aria-selected={mode === "watch"} className={mode === "watch" ? "is-active" : undefined} onClick={() => setMode("watch")}>
						Watch
					</button>
					<button type="button" role="tab" aria-selected={mode === "compare"} className={mode === "compare" ? "is-active" : undefined} disabled={rendered.length < 2} onClick={() => setMode("compare")}>
						Compare
					</button>
					<button type="button" role="tab" aria-selected={mode === "files"} className={mode === "files" ? "is-active" : undefined} onClick={() => setMode("files")}>
						Files
					</button>
				</div>
			</header>

			<div ref={main} className="room-main">
				{concepts.length > 0 ? (
					<div className="concept-strip scroll-x">
						{concepts.map((item, index) => (
							<ConceptChip key={item.id} concept={item} index={index} review={manifest.mode === "review"} active={mode !== "compare" && item.id === activeId} inCompare={mode === "compare" && compareKeys.some((key) => key.startsWith(`${item.id}@`))} onClick={() => selectConcept(item.id)} />
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
					{mode === "files" ? <FilesWall engine={engine} clip={clip} concept={concept} render={render} /> : null}
				</div>

				<Transport engine={engine} onCopyMoment={manifest.mode === "local" ? copyMoment : null} onFullscreen={fullscreen} safeZones={safeZones} onSafeZones={() => setSafeZones((shown) => !shown)} disabled={!hasVideo} />
			</div>

			<Rail manifest={manifest} clip={clip} concept={concept} render={render} engine={engine} onPickRound={setRound} onCompareRounds={compareRounds} agentPrompt={agentPrompt} />
			<Timeline engine={engine} clip={clip} concept={concept} render={render} />
		</div>
	);
}
