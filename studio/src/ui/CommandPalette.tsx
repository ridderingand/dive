import { useMemo, useState } from "react";
import type { Manifest } from "@core/manifest";
import { clipPath } from "../lib/data";
import { navigate } from "../lib/router";
import { templateSummaries } from "../lib/templates";
import { SearchIcon } from "./icons";

type Item = { id: string; title: string; detail: string; to: string };

export function CommandPalette({ manifest, onClose }: { manifest: Manifest; onClose: () => void }) {
	const [query, setQuery] = useState("");
	const [active, setActive] = useState(0);
	const items = useMemo<Item[]>(() => {
		const guestName = (slug: string) => manifest.guests.find((guest) => guest.slug === slug)?.name ?? slug;
		return [
			...manifest.clips.map((clip) => ({ id: `clip-${clip.slug}`, title: clip.title, detail: guestName(clip.guest), to: clipPath(clip) })),
			...templateSummaries.map((template) => ({ id: `template-${template.id}`, title: template.name, detail: "Template", to: `/templates/${template.id}` })),
			{ id: "clips", title: "All clips", detail: "Page", to: "/" },
			{ id: "system", title: "System", detail: "Colour, type, captions, motion and rules", to: "/system" },
		];
	}, [manifest]);
	const needle = query.trim().toLowerCase();
	const results = needle ? items.filter((item) => `${item.title} ${item.detail}`.toLowerCase().includes(needle)) : items;
	const go = (item: Item | undefined) => {
		if (!item) return;
		navigate(item.to);
		onClose();
	};
	return (
		<div className="overlay" onPointerDown={(event) => event.target === event.currentTarget && onClose()}>
			<div className="palette pool" role="dialog" aria-label="Jump to">
				<label className="palette-input">
					<SearchIcon />
					<input
						autoFocus
						value={query}
						placeholder="Clip, guest or template"
						onChange={(event) => {
							setQuery(event.target.value);
							setActive(0);
						}}
						onKeyDown={(event) => {
							if (event.key === "ArrowDown") {
								event.preventDefault();
								setActive((index) => Math.min(index + 1, results.length - 1));
							} else if (event.key === "ArrowUp") {
								event.preventDefault();
								setActive((index) => Math.max(index - 1, 0));
							} else if (event.key === "Enter") go(results[active]);
						}}
					/>
				</label>
				<div className="palette-list scroll">
					{results.length === 0 ? <div className="palette-empty">Nothing matches.</div> : null}
					{results.map((item, index) => (
						<button key={item.id} type="button" className={index === active ? "is-active" : undefined} onMouseEnter={() => setActive(index)} onClick={() => go(item)}>
							<span>{item.title}</span>
							<span className="role">{item.detail}</span>
						</button>
					))}
				</div>
			</div>
		</div>
	);
}
