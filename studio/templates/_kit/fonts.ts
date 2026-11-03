import { useState } from "react";
import { continueRender, delayRender, staticFile } from "remotion";

const FACES = [
	{ family: "Clash Display", file: "ClashDisplay-Semibold.woff2", weight: "600" },
	{ family: "Clash Display", file: "ClashDisplay-Bold.woff2", weight: "700" },
	{ family: "Tanker", file: "Tanker-Regular.woff2", weight: "400" },
	{ family: "Archivo Black", file: "ArchivoBlack-Regular.woff2", weight: "400" },
];

let loading: Promise<unknown> | null = null;

function loadFaces() {
	loading ??= Promise.all(
		FACES.map(async ({ family, file, weight }) => {
			const face = new FontFace(family, `url(${staticFile(`fonts/${file}`)})`, { weight });
			await face.load();
			document.fonts.add(face);
		}),
	);
	return loading;
}

/** Holds the frame until caption fonts are in, so a render never captures fallback type. */
export function useDiveFonts() {
	useState(() => {
		const handle = delayRender("Loading Dive caption fonts");
		loadFaces().finally(() => continueRender(handle));
		return handle;
	});
}
