import { useEffect, useRef, useState } from "react";
import type { Take } from "@core/moments";
import { CheckIcon, CopyIcon, HistoryIcon } from "../ui/icons";
import { copyText } from "../ui/toast";

const when = new Intl.DateTimeFormat(undefined, { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" });

export function PromptHistory({ takes }: { takes: Take[] }) {
	const [open, setOpen] = useState(false);
	const [copiedId, setCopiedId] = useState<string | null>(null);
	const box = useRef<HTMLDivElement>(null);
	const copiedTimer = useRef(0);
	useEffect(() => () => window.clearTimeout(copiedTimer.current), []);
	useEffect(() => {
		if (!open) return;
		const close = (event: PointerEvent) => {
			if (!box.current?.contains(event.target as Node)) setOpen(false);
		};
		window.addEventListener("pointerdown", close);
		return () => window.removeEventListener("pointerdown", close);
	}, [open]);
	if (takes.length === 0) return null;
	const copy = (take: Take) => {
		void copyText(take.prompt, "Copied. Paste it into Claude.");
		setCopiedId(take.id);
		window.clearTimeout(copiedTimer.current);
		copiedTimer.current = window.setTimeout(() => setCopiedId(null), 1600);
	};
	return (
		<div ref={box} className="history">
			<button type="button" className={`icon-button${open ? " is-on" : ""}`} onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Past prompts" data-tip="Past prompts">
				<HistoryIcon />
			</button>
			{open ? (
				<div className="history-pop scroll">
					{takes.map((take) => {
						const copied = copiedId === take.id;
						return (
							<button key={take.id} type="button" onClick={() => copy(take)}>
								<span className="history-when">{when.format(new Date(take.createdAt))}</span>
								<span className={`history-copy${copied ? " is-copied" : ""}`}>
									{copied ? <CheckIcon /> : <CopyIcon />}
									{copied ? "Copied" : "Copy"}
								</span>
								<span className="history-text">{take.notes[0]?.text}</span>
							</button>
						);
					})}
				</div>
			) : null}
		</div>
	);
}
