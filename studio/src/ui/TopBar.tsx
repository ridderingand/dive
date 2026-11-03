import type { Manifest } from "@core/manifest";
import { useRoute } from "../lib/router";
import { SearchIcon } from "./icons";

const LINKS = [
	{ to: "/", label: "Clips", match: (path: string) => path === "/" || path.startsWith("/clips") },
	{ to: "/templates", label: "Templates", match: (path: string) => path.startsWith("/templates") },
	{ to: "/system", label: "System", match: (path: string) => path.startsWith("/system") },
];

export function TopBar({ manifest, onSearch, onShortcuts }: { manifest: Manifest; onSearch: () => void; onShortcuts: () => void }) {
	const { pathname } = useRoute();
	const review = manifest.mode === "review";
	return (
		<header className="topbar">
			<a href="#/" className="topbar-brand" aria-label="Dive Studio home">
				<img src="/brand/wordmark.svg" alt="" className="wordmark" />
				<span className="topbar-studio">{review ? "Review" : "Studio"}</span>
			</a>
			{review ? null : (
				<nav className="topbar-nav">
					{LINKS.map((link) => (
						<a key={link.to} href={`#${link.to}`} className={link.match(pathname) ? "is-active" : undefined}>
							{link.label}
						</a>
					))}
				</nav>
			)}
			<div className="topbar-tools">
				{review ? null : (
					<button type="button" className="pill-button topbar-search" onClick={onSearch}>
						<SearchIcon width={15} height={15} />
						Jump to
						<kbd>⌘K</kbd>
					</button>
				)}
				<button type="button" className="icon-button" onClick={onShortcuts} aria-label="Keyboard shortcuts">
					<kbd>?</kbd>
				</button>
			</div>
		</header>
	);
}
