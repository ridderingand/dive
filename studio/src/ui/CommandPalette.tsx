import { useMemo, useState } from "react";
import type { Manifest } from "@core/manifest";
import { shortTime } from "@core/time";
import { clipPath } from "../lib/data";
import { navigate } from "../lib/router";
import { templates } from "../../templates/registry";
import { SearchIcon } from "./icons";

type Item = { id: string; title: string; detail: string; to: string };

const MAX_SAID = 8;

/** Finds a phrase in what was said, so a line you remember opens the clip at that moment. */
function searchWords(manifest: Manifest, needle: string): Item[] {
	const hits: Item[] = [];
	for (const clip of manifest.clips) {
		const words = clip.captions?.words ?? [];
		const text = words.map((word) => word.text).join(" ").toLowerCase();
		const offsets: number[] = [];
		let length = 0;
		for (const word of words) {
			offsets.push(length);
			length += word.text.length + 1;
		}
		let at = text.indexOf(needle);
		while (at !== -1 && hits.length < MAX_SAID) {
			const index = offsets.findLastIndex((offset) => offset <= at);
			const word = words[index];
			if (word) {
				hits.push({ id: `said-${clip.slug}-${index}`, title: `"${words.slice(Math.max(0, index - 3), index + 6).map((item) => item.text).join(" ")}"`, detail: `${clip.title} · ${shortTime(word.start)}`, to: `${clipPath(clip)}?t=${word.start}` });
			}
			at = text.indexOf(needle, at + needle.length);
		}
	}
	return hits;
}

export function CommandPalette({ manifest, onClose }: { manifest: Manifest; onClose: () => void }) {
	const [query, setQuery] = useState("");
	const [active, setActive] = useState(0);
	const items = useMemo<Item[]>(() => {
		const guestName = (slug: string) => manifest.guests.find((guest) => guest.slug === slug)?.name ?? slug;
		return [
			...manifest.clips.map((clip) => ({ id: `clip-${clip.slug}`, title: clip.title, detail: guestName(clip.guest), to: clipPath(clip) })),
			...templates.map((template) => ({ id: `template-${template.id}`, title: template.name, detail: "Template", to: `/templates/${template.id}` })),
			{ id: "clips", title: "All clips", detail: "Page", to: "/" },
			{ id: "system", title: "System", detail: "Colour, type, captions, motion and rules", to: "/system" },
		];
	}, [manifest]);
	const needle = query.trim().toLowerCase();
	const named = needle ? items.filter((item) => `${item.title} ${item.detail}`.toLowerCase().includes(needle)) : items;
	const said = useMemo(() => (needle.length >= 3 ? searchWords(manifest, needle) : []), [manifest, needle]);
	const results = [...named, ...said];
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
						placeholder="Clip, guest, template or something said"
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
