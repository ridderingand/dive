import { copyFileSync, existsSync, mkdirSync, readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import { Captions, Clip, type ClipInput, type Guest } from "../../core/schema";
import { loadGuests, writeJson } from "../lib/load";
import { clipDir } from "../lib/paths";

export type NotionRow = {
	url: string;
	Title: string;
	Status: string;
	Length: number | null;
	Designer: string | null;
	Guest: string | null;
	Topic: string | null;
	Hook: string | null;
	Payoff: string | null;
	"Descript composition": string | null;
	"Source tracks": string | null;
	"Mixture link": string | null;
};

export function splitTitle(raw: string) {
	const match = /^\((\d+)\)\s*(.+)$/.exec(raw.trim());
	return match ? { score: Number(match[1]), title: match[2] ?? raw } : { score: null, title: raw.trim() };
}

export function slugify(text: string) {
	return text.toLowerCase().normalize("NFKD").replace(/['’]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

const pageId = (url: string) => url.replace(/\?.*$/, "").split("/").pop()?.replace(/-/g, "") ?? "";

function guestForRow(row: NotionRow, guests: Guest[]) {
	const linked: string[] = row.Guest ? JSON.parse(row.Guest) : [];
	const id = linked[0] ? pageId(linked[0]) : "";
	return guests.find((guest) => guest.notionUrl && pageId(guest.notionUrl) === id);
}

function srtSeconds(stamp: string) {
	const [h = "0", m = "0", s = "0"] = stamp.trim().replace(",", ".").split(":");
	return Number(h) * 3600 + Number(m) * 60 + Number(s);
}

/** Spreads each phrase's words across its cue by length. Good enough to preview until Descript word timing lands. */
export function srtToWords(srt: string) {
	const words: Captions["words"] = [];
	for (const block of srt.trim().split(/\n\s*\n/)) {
		const lines = block.trim().split("\n");
		const stamp = lines.find((line) => line.includes("-->"));
		if (!stamp) continue;
		const [startRaw = "0", endRaw = "0"] = stamp.split("-->");
		const start = srtSeconds(startRaw);
		const end = srtSeconds(endRaw);
		const parts = lines.slice(lines.indexOf(stamp) + 1).join(" ").replace(/^\[?[A-Z][\w .'-]{0,30}\]?:\s*/, "").split(/\s+/).filter(Boolean);
		const total = parts.reduce((sum, word) => sum + word.length + 1, 0);
		let cursor = start;
		for (const text of parts) {
			const next = cursor + ((end - start) * (text.length + 1)) / total;
			words.push({ i: words.length, text, start: Math.round(cursor * 100) / 100, end: Math.round(next * 100) / 100 });
			cursor = next;
		}
	}
	return words;
}

function readBrief(briefs: string, guest: string, slug: string) {
	const file = path.join(briefs, guest, slug, "brief.json");
	return existsSync(file) ? (JSON.parse(readFileSync(file, "utf8")) as Record<string, unknown>) : {};
}

function cutsFile(folder: string) {
	if (!existsSync(folder)) return null;
	const name = readdirSync(folder).find((file) => file.endsWith("cuts.json"));
	return name ? path.join(folder, name) : null;
}

function captionsFile(folder: string) {
	if (!existsSync(folder)) return null;
	const name = readdirSync(folder).find((file) => file.includes("captions") && file.includes("srt"));
	return name ? path.join(folder, name) : null;
}

/** Writes clip.json for every Notion row. Existing tracks and concepts are left alone. */
export function importNotion(rows: NotionRow[], briefs: string) {
	const guests = loadGuests();
	const written: string[] = [];
	for (const row of rows) {
		const guest = guestForRow(row, guests);
		if (!guest) {
			console.warn(`Skipped "${row.Title}": its Guest has no folder in clips/`);
			continue;
		}
		const { score, title } = splitTitle(row.Title);
		const slug = slugify(title);
		const dir = clipDir(guest.slug, slug);
		const clipFile = path.join(dir, "clip.json");
		const existing: Partial<ClipInput> = existsSync(clipFile) ? JSON.parse(readFileSync(clipFile, "utf8")) : {};
		const brief = readBrief(briefs, guest.slug, slug);
		const briefFolder = path.join(briefs, guest.slug, slug);
		mkdirSync(dir, { recursive: true });

		const cuts = cutsFile(briefFolder);
		let durationS = existing.durationS ?? null;
		let hasScreen = false;
		if (cuts) {
			copyFileSync(cuts, path.join(dir, "cuts.json"));
			const parsed = JSON.parse(readFileSync(cuts, "utf8")) as { duration_s?: number; pieces?: Record<string, unknown>[] };
			durationS ??= parsed.duration_s ?? null;
			hasScreen = Boolean(parsed.pieces?.some((piece) => "screenshare_in" in piece || "screen_in" in piece));
		}
		if (existsSync(path.join(briefFolder, "brief.md"))) copyFileSync(path.join(briefFolder, "brief.md"), path.join(dir, "brief.md"));

		const base = `${guest.slug}/${slug}`;
		const defaultSources = [
			{ key: "guest", kind: "guest" as const, label: guest.name, file: `${base}/guest.mp4` },
			{ key: "ridd", kind: "host" as const, label: "Ridd", file: `${base}/ridd.mp4` },
			...(hasScreen ? [{ key: "screenshare", kind: "screen" as const, label: "Screen share", file: `${base}/screenshare.mp4` }] : []),
		];

		const clip = Clip.parse({
			...existing,
			slug,
			guest: guest.slug,
			title,
			score: score ?? (brief.score as number | null) ?? null,
			status: row.Status,
			designer: row.Designer,
			topics: row.Topic ? JSON.parse(row.Topic) : [],
			hook: row.Hook ?? "",
			payoff: row.Payoff ?? "",
			arc: (brief.arc as string | null) ?? null,
			lengthTargetS: row.Length,
			durationS,
			format: (brief.format as Clip["format"]) ?? existing.format ?? null,
			notionUrl: row.url,
			descriptUrl: row["Descript composition"],
			mixtureUrl: row["Mixture link"],
			sourceNote: row["Source tracks"],
			audio: existing.audio ?? `${base}/audio.m4a`,
			sources: existing.sources?.length ? existing.sources : defaultSources,
			beats: ((brief.beats as Clip["beats"]) ?? []).map((beat) => ({ ...beat, line: beat.line?.replace(/\*\*/g, "") ?? null })),
			broll: ((brief.broll as Clip["broll"]) ?? []).map((item) => ({ ...item, note: item.note ?? null, rawTimecode: item.rawTimecode ?? null })),
			captionCopy: (brief.captionCopy as string | null) ?? null,
			visualNotes: (brief.visualNotes as string[]) ?? [],
			openIssues: (brief.openIssues as string[]) ?? [],
		});
		writeJson(clipFile, clip);

		const captionsPath = path.join(dir, "captions.json");
		const srt = captionsFile(briefFolder);
		if (!existsSync(captionsPath) && srt) {
			writeJson(captionsPath, Captions.parse({ format: "dive-word-captions/v1", clip: slug, source: "srt-estimate", duration_s: durationS ?? undefined, words: srtToWords(readFileSync(srt, "utf8")) }));
		}
		written.push(`${guest.slug}/${slug}`);
	}
	return written;
}
