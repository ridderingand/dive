import { lazy, Suspense, useState } from "react";
import type { Manifest } from "@core/manifest";
import { useKeys } from "./lib/keys";
import { useManifest } from "./lib/data";
import { navigate, useRoute } from "./lib/router";
import { ClipRoom } from "./pages/ClipRoom";
import { ClipsPage } from "./pages/ClipsPage";
import { SystemPage } from "./pages/SystemPage";
import { CommandPalette } from "./ui/CommandPalette";
import { ShortcutSheet } from "./ui/ShortcutSheet";
import { TopBar } from "./ui/TopBar";
import { ToastHost } from "./ui/toast";

const TemplatesPage = lazy(() => import("./pages/TemplatesPage").then((module) => ({ default: module.TemplatesPage })));
const TemplatePage = lazy(() => import("./pages/TemplatesPage").then((module) => ({ default: module.TemplatePage })));

function Routes({ manifest }: { manifest: Manifest }) {
	const { pathname } = useRoute();
	const parts = pathname.split("/").filter(Boolean);
	if (parts[0] === "clips" && parts[1] && parts[2]) {
		const clip = manifest.clips.find((item) => item.guest === parts[1] && item.slug === parts[2]);
		if (clip) return <ClipRoom key={`${clip.guest}/${clip.slug}`} manifest={manifest} clip={clip} />;
	}
	if (manifest.mode === "local" && parts[0] === "templates") {
		return <Suspense fallback={<div className="page-loading" />}>{parts[1] ? <TemplatePage manifest={manifest} id={parts[1]} /> : <TemplatesPage manifest={manifest} />}</Suspense>;
	}
	if (manifest.mode === "local" && parts[0] === "system") return <SystemPage />;
	const only = manifest.clips[0];
	if (manifest.mode === "review" && manifest.clips.length === 1 && only) return <ClipRoom manifest={manifest} clip={only} />;
	return <ClipsPage manifest={manifest} />;
}

export function App() {
	const { manifest, error } = useManifest();
	const [palette, setPalette] = useState(false);
	const [shortcuts, setShortcuts] = useState(false);
	useKeys({
		"mod+k": () => setPalette((open) => !open),
		"?": () => setShortcuts((open) => !open),
		Escape: () => {
			setPalette(false);
			setShortcuts(false);
		},
		g: () => navigate("/"),
	});
	if (error) return <div className="fatal">{error}</div>;
	if (!manifest) return <div className="page-loading" />;
	return (
		<div className="app">
			<TopBar manifest={manifest} onSearch={() => setPalette(true)} onShortcuts={() => setShortcuts(true)} />
			<main className="app-main">
				<Routes manifest={manifest} />
			</main>
			<div className="grain" />
			{palette ? <CommandPalette manifest={manifest} onClose={() => setPalette(false)} /> : null}
			{shortcuts ? <ShortcutSheet onClose={() => setShortcuts(false)} /> : null}
			<ToastHost />
		</div>
	);
}
