import { useRef, type RefObject } from "react";
import { timecode } from "@core/time";
import { CheckIcon, ExpandIcon, MicIcon, MuteIcon, PauseIcon, PlayIcon, SoundIcon } from "../ui/icons";
import type { Take } from "@core/moments";
import type { DictationState } from "../lib/dictation";
import { useEngineFrame, useEngineState, type PlayerEngine } from "./engine";
import { PromptHistory } from "./PromptHistory";

export const RATES = [0.5, 1, 1.5, 2];

type Dictation = { state: DictationState; toggle: () => void; level: RefObject<HTMLElement | null> };

const TALK_LABEL: Record<DictationState, string> = { idle: "Talk", listening: "Done", transcribing: "Writing prompt", copied: "Copied. Paste in Claude" };

const TALK_TIP: Partial<Record<DictationState, string>> = { idle: "Move through the video and say what you'd change. Press Done and the prompt is copied.", listening: "Stop and copy the prompt" };

function TalkButton({ dictation }: { dictation: Dictation }) {
	const { state, toggle, level } = dictation;
	return (
		<button type="button" ref={level as RefObject<HTMLButtonElement | null>} className={`talk-button is-${state}`} onClick={toggle} disabled={state === "transcribing"} aria-live="polite" data-tip={TALK_TIP[state]} aria-keyshortcuts={TALK_TIP[state] ? "T" : undefined}>
			<span key={state} className="talk-content">
				{state === "idle" ? <MicIcon width={16} height={16} /> : null}
				{state === "listening" ? <i className="talk-level" /> : null}
				{state === "transcribing" ? <i className="talk-spinner" /> : null}
				{state === "copied" ? <CheckIcon width={16} height={16} /> : null}
				<span className="talk-label">{TALK_LABEL[state]}</span>
			</span>
		</button>
	);
}

type Props = { engine: PlayerEngine; dictation: Dictation | null; takes: Take[]; onFullscreen: () => void; disabled: boolean };

export function Transport({ engine, dictation, takes, onFullscreen, disabled }: Props) {
	const state = useEngineState(engine);
	const code = useRef<HTMLSpanElement>(null);
	const frames = useRef<HTMLSpanElement>(null);
	useEngineFrame(engine, (t) => {
		const [clock = "", frame = ""] = timecode(t, engine.fps).split("·");
		if (code.current) code.current.textContent = clock;
		if (frames.current) frames.current.textContent = `·${frame}`;
	});
	return (
		<div className={`transport${disabled ? " is-disabled" : ""}${dictation && dictation.state !== "idle" ? " is-dictating" : ""}`}>
			<div className="transport-left">
				<button type="button" className="transport-play" onClick={() => engine.toggle()} disabled={disabled} aria-label={state.playing ? "Pause" : "Play"} data-tip={state.playing ? "Pause" : "Play"} aria-keyshortcuts="Space">
					{state.playing ? <PauseIcon /> : <PlayIcon />}
				</button>
				<div className="timecode mono" aria-label="Timecode">
					<span ref={code} className="timecode-now">
						00:00
					</span>
					<span ref={frames} className="timecode-frames">
						·00
					</span>
					<span className="timecode-total">{timecode(state.duration, engine.fps)}</span>
				</div>
			</div>
			<div className="transport-right">
				{dictation ? (
					<>
						<PromptHistory takes={takes} />
						<TalkButton dictation={dictation} />
					</>
				) : null}
				<div className="rate" role="group" aria-label="Playback speed" aria-keyshortcuts=", .">
					<button type="button" className="rate-current mono" aria-label={`Speed ${state.rate}×`}>
						{state.rate}×
					</button>
					<div className="rate-menu">
						{[...RATES].reverse().map((rate) => (
							<button key={rate} type="button" className={`mono${state.rate === rate ? " is-active" : ""}`} onClick={() => engine.setRate(rate)}>
								{rate}×
							</button>
						))}
					</div>
				</div>
				<button type="button" className="icon-button" onClick={() => engine.toggleMute()} aria-label={state.muted ? "Unmute" : "Mute"} data-tip={state.muted ? "Unmute" : "Mute"} aria-keyshortcuts="M">
					{state.muted ? <MuteIcon /> : <SoundIcon />}
				</button>
				<button type="button" className="icon-button" onClick={onFullscreen} aria-label="Fullscreen" data-tip="Fullscreen" aria-keyshortcuts="F">
					<ExpandIcon />
				</button>
			</div>
		</div>
	);
}
