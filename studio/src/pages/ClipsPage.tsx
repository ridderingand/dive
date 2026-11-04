import { useMemo } from "react";
import { STAGES, type Manifest, type ManifestClip } from "@core/manifest";
import type { Guest } from "@core/schema";
import { shortTime } from "@core/time";
import { accents } from "../../system/dive";
import { clipPath } from "../lib/data";
import { nextStep } from "../lib/next-step";
import { PlayIcon } from "../ui/icons";

export const accentOf = (guest: Guest) => accents[guest.accent as keyof typeof accents]?.hex ?? accents.sky.hex;

function ClipRow({ clip }: { clip: ManifestClip }) {
	const next = nextStep(clip);
	const ready = clip.stage !== "clip";
	return (
		<a href={`#${clipPath(clip)}`} className="clip-row">
			<span className={`clip-row-play${ready ? "" : " is-idle"}`}>
				<PlayIcon width={14} height={14} />
			</span>
			<span className="clip-row-main">
				<span className="clip-row-title wide">{clip.title}</span>
				<span className="clip-row-hook role">{clip.hook}</span>
			</span>
			<span className={`status tone-${next.tone}`}>{next.text}</span>
			<span className="clip-row-time mono">{clip.durationS ? shortTime(clip.durationS) : "–"}</span>
		</a>
	);
}

export function ClipsPage({ manifest }: { manifest: Manifest }) {
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
							{/* The water dissolves toward the bottom left, so the swell never ends on a hard line there. */}
							<linearGradient id="swell-fade" x1="0" y1="1" x2="0.62" y2="0.1">
								<stop offset="0.16" stopColor="#000" />
								<stop offset="0.62" stopColor="#fff" />
							</linearGradient>
							<mask id="swell-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="1440" height="420">
								<rect width="1440" height="420" fill="url(#swell-fade)" />
							</mask>
						</defs>
						<g mask="url(#swell-mask)">
							<path d="M0 0H1440V120C1180 330 760 400 0 300Z" fill="url(#swell-a)" />
							<path d="M1440 40C1240 250 820 340 300 330 200 328 90 322 0 310V420H1440Z" fill="url(#swell-b)" />
						</g>
					</svg>
					<img className="surface-bubbles" src="/brand/bubbles-1.png" alt="" />
				</div>

				<div className="clips-inner">
					<header className="clips-hero">
						<h1 className="display">{review ? review.title : "Clips"}</h1>
						{review?.note ? <p className="role">{review.note}</p> : null}
					</header>

					{guests.map((guest) => {
						const clips = manifest.clips.filter((clip) => clip.guest === guest.slug && !clip.removed).sort((a, b) => Number(a.posted) - Number(b.posted) || (b.score ?? 0) - (a.score ?? 0));
						if (clips.length === 0) return null;
						return (
							<section key={guest.slug} className="guest-group" style={{ "--accent": accentOf(guest) } as React.CSSProperties}>
								<h2 className="wide">{guest.name}</h2>
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
