import { useEffect, useRef } from "react";

type Bindings = Record<string, (event: KeyboardEvent) => void>;

/** Reads through shadow roots, because the Inflight widget's composer lives in one and retargets events to its host. */
function isTyping(event: KeyboardEvent) {
	const target = event.composedPath()[0];
	return target instanceof HTMLElement && (target.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName));
}

/** Keys are event.key values, lower-cased, with "shift+" or "mod+" in front when held. */
export function useKeys(bindings: Bindings) {
	const latest = useRef(bindings);
	latest.current = bindings;
	useEffect(() => {
		const onKey = (event: KeyboardEvent) => {
			const mod = event.metaKey || event.ctrlKey;
			if (isTyping(event) && !mod && event.key !== "Escape") return;
			const key = event.key.length === 1 ? event.key.toLowerCase() : event.key;
			const name = `${mod ? "mod+" : ""}${event.shiftKey && key.length > 1 ? "shift+" : ""}${key}`;
			const handler = latest.current[name];
			if (!handler) return;
			event.preventDefault();
			handler(event);
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, []);
}
