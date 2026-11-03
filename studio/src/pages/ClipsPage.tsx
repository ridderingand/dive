import { useMemo, useState } from "react";
import { STAGES, type Manifest, type ManifestClip, type StageId } from "@core/manifest";
import type { Guest } from "@core/schema";
import { shortTime } from "@core/time";
import { accents } from "../../system/dive";
import { clipPath, mediaUrl } from "../lib/data";
import { PlayIcon } from "../ui/icons";
import { StageMeter } from "../ui/StageMeter";

export const accentOf = (guest: Guest) => accents[guest.accent as keyof typeof accents]?.hex ?? accents.sky.hex;

const NEXT_STEP: Record<StageId, string> = {
	clip: "Waiting on tracks",
	files: "Ready for concepts",
	concepts: "Ready to render",
	review: "In review",
	final: "Exported",
};

function ClipRow({ clip }: { clip: ManifestClip }) {
	const posters = clip.concepts.filter((concept) => concept.current).slice(0, 4);
	const ready = clip.stage !== "clip";
	return (
		<a href={`#${clipPath(clip)}`} className="clip-row">
			<span className={`clip-row-play${ready ? "" : " is-idle"}`}>
				<PlayIcon width={14} height={14} />
			</span>
			<span className="clip-row-main">
				<span className="clip-row-title wide">{clip.title}</span>
				<span className="clip-row-hook role">{clip.hook.replace(/^[A-Z][a-z]+: /, "")}</span>
			</span>
			<span className="clip-row-concepts">
				{posters.map((concept) => (concept.current ? <img key={concept.id} src={mediaUrl(concept.current.poster)} alt="" loading="lazy" /> : null))}
			</span>
			<span className="clip-row-state">
				<StageMeter stage={clip.stage} />
				<span className="clip-row-next">{NEXT_STEP[clip.stage]}</span>
			</span>
			<span className="clip-row-time mono">{clip.durationS ? shortTime(clip.durationS) : "–"}</span>
		</a>
	);
}

export function ClipsPage({ manifest }: { manifest: Manifest }) {
	const [stage, setStage] = useState<StageId | null>(null);
	const counts = useMemo(() => Object.fromEntries(STAGES.map((item) => [item.id, manifest.clips.filter((clip) => clip.stage === item.id).length])), [manifest]);
	const review = manifest.review;
	const furthest = (guest: Guest) => Math.max(...manifest.clips.filter((clip) => clip.guest === guest.slug).map((clip) => STAGES.findIndex((item) => item.id === clip.stage)));
	const guests = useMemo(() => [...manifest.guests].sort((a, b) => furthest(b) - furthest(a)), [manifest]);
	return (
		<div className="clips-page scroll">
			<div className="clips-depth">
			<div className="surface" aria-hidden>
				<svg viewBox="0 0 1440 420" preserveAspectRatio="none">
					<defs>
						<linearGradient id="swell-a" x1="0" y1="0" x2="1" y2="1">
							<stop offset="0" stopColor="#4fccd2" stopOpacity="0.5" />
							<stop offset="1" stopColor="#0f6a78" stopOpacity="0.1" />
						</linearGradient>
						<linearGradient id="swell-b" x1="1" y1="0" x2="0" y2="1">
							<stop offset="0" stopColor="#2a9aa8" stopOpacity="0.5" />
							<stop offset="1" stopColor="#091314" stopOpacity="0" />
						</linearGradient>
					</defs>
					<path d="M0 0H1440V120C1180 330 760 400 0 300Z" fill="url(#swell-a)" />
					<path d="M1440 40C1240 250 820 340 300 330 200 328 90 322 0 310V420H1440Z" fill="url(#swell-b)" />
				</svg>
				<img className="surface-bubbles" src="/brand/bubbles-1.png" alt="" />
			</div>

			<div className="clips-inner">
				<header className="clips-hero">
					<h1 className="display">{review ? review.title : "Clips"}</h1>
					<p className="role">{review?.note ?? `${manifest.clips.length} clips from ${manifest.guests.length} episodes, from the cut to the file you ship.`}</p>
				</header>

				{review ? null : (
					<div className="stage-filter" role="group" aria-label="Filter by stage">
						{STAGES.map((item, index) => (
							<button key={item.id} type="button" className={stage === item.id ? "is-active" : undefined} onClick={() => setStage(stage === item.id ? null : item.id)} title={item.detail}>
								<span className="stage-filter-count display">{counts[item.id]}</span>
								<span>{item.label}</span>
								{index < STAGES.length - 1 ? <i aria-hidden /> : null}
							</button>
						))}
					</div>
				)}

				{guests.map((guest) => {
					const clips = manifest.clips.filter((clip) => clip.guest === guest.slug && (!stage || clip.stage === stage)).sort((a, b) => (b.score ?? 0) - (a.score ?? 0));
					if (clips.length === 0) return null;
					return (
						<section key={guest.slug} className="guest-group" style={{ "--accent": accentOf(guest) } as React.CSSProperties}>
							<header>
								<h2 className="wide">{guest.name}</h2>
								<span className="role dots">
									{clips.length} {clips.length === 1 ? "clip" : "clips"}
								</span>
							</header>
							<div className="clip-list">
								{clips.map((clip) => (
									<ClipRow key={clip.slug} clip={clip} />
								))}
							</div>
						</section>
					);
				})}
			</div>
			<img className="reef" src="/brand/sea-floor.webp" alt="" aria-hidden />
			</div>
		</div>
	);
}
