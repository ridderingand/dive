import { useRef, type RefObject } from "react";
import { timecode } from "@core/time";
import { ExpandIcon, MicIcon, MuteIcon, PauseIcon, PlayIcon, SafeZoneIcon, SoundIcon, StepBackIcon, StepForwardIcon } from "../ui/icons";
import type { DictationState } from "../lib/dictation";
import { useEngineFrame, useEngineState, type PlayerEngine } from "./engine";

export const RATES = [0.5, 1, 1.5, 2];

type Dictation = { state: DictationState; toggle: () => void; level: RefObject<HTMLElement | null> };

function TalkButton({ dictation }: { dictation: Dictation }) {
	const { state, toggle, level } = dictation;
	const listening = state === "listening";
	return (
		<button type="button" ref={level as RefObject<HTMLButtonElement | null>} className={`talk-button is-${state}`} onClick={toggle} disabled={state === "transcribing"} title="Move through the video and say what you'd change. Each note lands on the moment you're on.">
			{listening ? <i className="talk-level" /> : <MicIcon width={16} height={16} />}
			{state === "transcribing" ? "Writing notes" : listening ? "Done" : "Talk"}
		</button>
	);
}

type Props = { engine: PlayerEngine; dictation: Dictation | null; onFullscreen: () => void; safeZones: boolean; onSafeZones: () => void; disabled: boolean };

export function Transport({ engine, dictation, onFullscreen, safeZones, onSafeZones, disabled }: Props) {
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
				{dictation ? <TalkButton dictation={dictation} /> : null}
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
				<button type="button" className={`icon-button${safeZones ? " is-on" : ""}`} onClick={onSafeZones} aria-label="Show safe zones" aria-pressed={safeZones} title="Show where platform buttons and crops cover the video">
					<SafeZoneIcon />
				</button>
				<button type="button" className="icon-button" onClick={onFullscreen} aria-label="Fullscreen" title="Fullscreen">
					<ExpandIcon />
				</button>
			</div>
		</div>
	);
}
