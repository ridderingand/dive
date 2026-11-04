import { useEffect, useLayoutEffect, useRef, useState } from "react";

const OPEN_DELAY = 400;
const WARM_FOR = 400;
const GAP = 8;
const EDGE = 8;

const KEY_FACES: Record<string, string> = { ArrowLeft: "←", ArrowRight: "→" };

type Tip = { anchor: HTMLElement; text: string; keys: string[]; warm: boolean };

function anchorOf(target: EventTarget | null) {
	return target instanceof Element ? target.closest<HTMLElement>("[data-tip]:not(:disabled)") : null;
}

/** Any element with data-tip gets a tooltip, and its aria-keyshortcuts show as keycaps beside the text. */
export function TipHost() {
	const [tip, setTip] = useState<Tip | null>(null);
	const box = useRef<HTMLDivElement>(null);

	useEffect(() => {
		let current: HTMLElement | null = null;
		let shown = false;
		let closedAt = -Infinity;
		let timer = 0;
		const close = () => {
			window.clearTimeout(timer);
			if (shown) closedAt = performance.now();
			shown = false;
			setTip(null);
		};
		const moveTo = (anchor: HTMLElement | null) => {
			current = anchor;
			close();
			if (!anchor) return;
			const warm = performance.now() - closedAt < WARM_FOR;
			const show = () => {
				shown = true;
				setTip({ anchor, text: anchor.dataset.tip ?? "", keys: anchor.getAttribute("aria-keyshortcuts")?.split(" ") ?? [], warm });
			};
			if (warm) show();
			else timer = window.setTimeout(show, OPEN_DELAY);
		};
		const onOver = (event: PointerEvent) => {
			if (event.pointerType === "touch") return;
			const next = anchorOf(event.target);
			if (next !== current) moveTo(next);
		};
		const onOut = (event: PointerEvent) => {
			if (!event.relatedTarget) moveTo(null);
		};
		const onFocus = (event: FocusEvent) => {
			if (event.target instanceof Element && event.target.matches(":focus-visible")) moveTo(anchorOf(event.target));
		};
		const onBlur = () => moveTo(null);
		// Leaves `current` alone, so a pressed control stays quiet until the pointer leaves it.
		const dismissals = ["pointerdown", "keydown", "wheel"] as const;
		window.addEventListener("pointerover", onOver);
		window.addEventListener("pointerout", onOut);
		window.addEventListener("focusin", onFocus);
		window.addEventListener("focusout", onBlur);
		for (const name of dismissals) window.addEventListener(name, close, { passive: true });
		return () => {
			close();
			window.removeEventListener("pointerover", onOver);
			window.removeEventListener("pointerout", onOut);
			window.removeEventListener("focusin", onFocus);
			window.removeEventListener("focusout", onBlur);
			for (const name of dismissals) window.removeEventListener(name, close);
		};
	}, []);

	useLayoutEffect(() => {
		const element = box.current;
		if (!tip || !element) return;
		// The top layer keeps tips above a fullscreen player and clear of every overflow clip.
		if (!element.matches(":popover-open")) element.showPopover();
		const from = tip.anchor.getBoundingClientRect();
		const { offsetWidth: width, offsetHeight: height } = element;
		const above = from.top - GAP - height >= EDGE;
		const left = from.left + from.width / 2 - width / 2;
		element.style.left = `${Math.max(EDGE, Math.min(left, window.innerWidth - width - EDGE))}px`;
		element.style.top = `${above ? from.top - GAP - height : from.bottom + GAP}px`;
		element.dataset.side = above ? "top" : "bottom";
	}, [tip]);

	if (!tip) return null;
	return (
		<div ref={box} popover="manual" role="tooltip" className={`tip${tip.warm ? " is-warm" : ""}`}>
			<span>{tip.text}</span>
			{tip.keys.length > 0 ? (
				<span className="tip-keys">
					{tip.keys.map((key) => (
						<kbd key={key}>{KEY_FACES[key] ?? key}</kbd>
					))}
				</span>
			) : null}
		</div>
	);
}
