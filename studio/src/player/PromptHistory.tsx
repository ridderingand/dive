import { useEffect, useRef, useState } from "react";
import type { Take } from "@core/moments";
import { HistoryIcon } from "../ui/icons";
import { copyText } from "../ui/toast";

const when = new Intl.DateTimeFormat(undefined, { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" });

export function PromptHistory({ takes }: { takes: Take[] }) {
	const [open, setOpen] = useState(false);
	const box = useRef<HTMLDivElement>(null);
	useEffect(() => {
		if (!open) return;
		const close = (event: PointerEvent) => {
			if (!box.current?.contains(event.target as Node)) setOpen(false);
		};
		window.addEventListener("pointerdown", close);
		return () => window.removeEventListener("pointerdown", close);
	}, [open]);
	if (takes.length === 0) return null;
	return (
		<div ref={box} className="history">
			<button type="button" className={`icon-button${open ? " is-on" : ""}`} onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Past prompts" title="Past prompts">
				<HistoryIcon />
			</button>
			{open ? (
				<div className="history-pop scroll">
					{takes.map((take) => (
						<button
							key={take.id}
							type="button"
							onClick={() => {
								void copyText(take.prompt, "Copied. Paste it into Claude.");
								setOpen(false);
							}}
						>
							<span className="history-when">{when.format(new Date(take.createdAt))}</span>
							<span className="history-text">{take.notes[0]?.text}</span>
						</button>
					))}
				</div>
			) : null}
		</div>
	);
}
