import { useRef } from "react";
import { timecode } from "@core/time";
import { ExpandIcon, LinkIcon, MuteIcon, PauseIcon, PlayIcon, SafeZoneIcon, SoundIcon, StepBackIcon, StepForwardIcon } from "../ui/icons";
import { useEngineFrame, useEngineState, type PlayerEngine } from "./engine";

export const RATES = [0.5, 1, 1.5, 2];

type Props = { engine: PlayerEngine; onCopyMoment: (() => void) | null; onFullscreen: () => void; safeZones: boolean; onSafeZones: () => void; disabled: boolean };

export function Transport({ engine, onCopyMoment, onFullscreen, safeZones, onSafeZones, disabled }: Props) {
	const state = useEngineState(engine);
	const code = useRef<HTMLSpanElement>(null);
	const frames = useRef<HTMLSpanElement>(null);
	useEngineFrame(engine, (t) => {
		const [clock = "", frame = ""] = timecode(t, engine.fps).split("·");
		if (code.current) code.current.textContent = clock;
		if (frames.current) frames.current.textContent = `·${frame}`;
	});
	return (
		<div className={`transport${disabled ? " is-disabled" : ""}`}>
			<div className="transport-left">
				<button type="button" className="transport-play" onClick={() => engine.toggle()} disabled={disabled} aria-label={state.playing ? "Pause" : "Play"}>
					{state.playing ? <PauseIcon /> : <PlayIcon />}
				</button>
				<button type="button" className="icon-button" onClick={() => engine.step(-1)} disabled={disabled} aria-label="Back one frame" title="Back one frame">
					<StepBackIcon />
				</button>
				<button type="button" className="icon-button" onClick={() => engine.step(1)} disabled={disabled} aria-label="Forward one frame" title="Forward one frame">
					<StepForwardIcon />
				</button>
			</div>
			<div className="timecode mono" aria-label="Timecode">
				<span ref={code} className="timecode-now">
					00:00
				</span>
				<span ref={frames} className="timecode-frames">
					·00
				</span>
				<span className="timecode-total">{timecode(state.duration, engine.fps)}</span>
			</div>
			<div className="transport-right">
				<div className="rate" role="group" aria-label="Playback speed">
					{RATES.map((rate) => (
						<button key={rate} type="button" className={state.rate === rate ? "is-active" : undefined} onClick={() => engine.setRate(rate)}>
							{rate}×
						</button>
					))}
				</div>
				<button type="button" className="icon-button" onClick={() => engine.toggleMute()} aria-label={state.muted ? "Unmute" : "Mute"} title="Mute">
					{state.muted ? <MuteIcon /> : <SoundIcon />}
				</button>
				<button type="button" className={`icon-button${safeZones ? " is-on" : ""}`} onClick={onSafeZones} aria-label="Safe zones" aria-pressed={safeZones} title="Safe zones">
					<SafeZoneIcon />
				</button>
				{onCopyMoment ? (
					<button type="button" className="icon-button" onClick={onCopyMoment} aria-label="Copy this moment for an agent" title="Copy this moment for an agent">
						<LinkIcon />
					</button>
				) : null}
				<button type="button" className="icon-button" onClick={onFullscreen} aria-label="Fullscreen" title="Fullscreen">
					<ExpandIcon />
				</button>
			</div>
		</div>
	);
}
