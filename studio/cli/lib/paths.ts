import { existsSync, readdirSync } from "node:fs";
import path from "node:path";

export const ROOT = path.resolve(import.meta.dir, "../..");
export const CLIPS = path.join(ROOT, "clips");
export const MEDIA = path.resolve(process.env.DIVE_MEDIA ?? path.join(ROOT, "media"));
export const PUBLIC = path.join(ROOT, "public");
export const WORK = path.join(ROOT, ".work");
export const DIST = path.join(ROOT, "dist");

export const clipDir = (guest: string, slug: string) => path.join(CLIPS, guest, slug);
export const mediaPath = (file: string) => path.join(MEDIA, file);
export const renderDir = (guest: string, slug: string, concept: string, round: number) => `renders/${guest}/${slug}/${concept}/r${round}`;
export const derivedDir = (guest: string, slug: string) => `derived/${guest}/${slug}`;

export function listDirs(dir: string): string[] {
	if (!existsSync(dir)) return [];
	return readdirSync(dir, { withFileTypes: true }).filter((entry) => entry.isDirectory() && !entry.name.startsWith("_") && !entry.name.startsWith(".")).map((entry) => entry.name).sort();
}
