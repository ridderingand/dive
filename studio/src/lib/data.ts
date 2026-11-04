import { useCallback, useEffect, useState } from "react";
import type { Manifest, ManifestClip } from "@core/manifest";
import type { Guest } from "@core/schema";

export function useManifest() {
	const [manifest, setManifest] = useState<Manifest | null>(null);
	const [error, setError] = useState<string | null>(null);
	const reload = useCallback(() => {
		fetch("/data/studio.json", { cache: "no-store" })
			.then((response) => {
				if (!response.ok) throw new Error("Run bun run dive sync to build the studio data.");
				return response.json();
			})
			.then(setManifest)
			.catch((reason: Error) => setError(reason.message));
	}, []);
	useEffect(reload, [reload]);
	return { manifest, error, reload };
}

export const mediaUrl = (file: string) => `/media/${file}`;

export function guestOf(manifest: Manifest, clip: ManifestClip): Guest {
	const guest = manifest.guests.find((item) => item.slug === clip.guest);
	if (!guest) throw new Error(`Unknown guest ${clip.guest}`);
	return guest;
}

export const clipPath = (clip: Pick<ManifestClip, "guest" | "slug">) => `/clips/${clip.guest}/${clip.slug}`;
