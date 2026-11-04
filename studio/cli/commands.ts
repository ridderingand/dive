import { copyFileSync, existsSync, mkdirSync, readFileSync, rmSync, statSync, writeFileSync } from "node:fs";
import path from "node:path";
import { cleanWord } from "../core/captions";
import { momentsFrom, stampsFrom, type RecordingEvent, type TranscriptSegment } from "../core/moments";
import { timecode } from "../core/time";
import { conceptChecks, emphasisFromCopy } from "../core/checks";
import { Captions, Concept, CONCEPT_STATUS, type Cut, type FormatId } from "../core/schema";
import { captionStyles } from "../system/dive";
import { templates } from "../templates/registry";
import { importMixture } from "./importers/mixture";
import { importNotion, type NotionRow } from "./importers/notion";
import { renderHash } from "./lib/hash";
import { findClip, loadAllClips, saveConcept, writeJson, type LoadedClip } from "./lib/load";
import { buildClip, MANIFEST_FILE, sync } from "./lib/manifest";
import { addTake, ensureSpeech, loadTakes, type TakeRequest } from "./lib/notes";
import { DIST, MEDIA, mediaPath, PUBLIC, renderDir, ROOT, WORK } from "./lib/paths";
import { bundleVideo, renderConcept, renderStill, withMedia } from "./lib/render";
import { capture, ffmpeg, probeDuration, run } from "./lib/run";
import type { Manifest } from "../core/manifest";

type Flags = Record<string, string | true>;
type Command = (args: string[], flags: Flags) => Promise<void>;

const REVIEW_BUDGET_BYTES = 46 * 1024 * 1024;
const REVIEW_FILE_LIMIT_BYTES = 24 * 1024 * 1024;

const text = (value: string | true | undefined) => (typeof value === "string" ? value : undefined);
const mb = (bytes: number) => `${(bytes / 1024 / 1024).toFixed(1)} MB`;

function pickConcept(loaded: LoadedClip, id: string) {
	const concept = loaded.concepts.find((item) => item.id === id);
	if (!concept) throw new Error(`${loaded.clip.slug} has no concept "${id}". It has: ${loaded.concepts.map((item) => item.id).join(", ") || "none"}`);
	return concept;
}

const FONTSHARE = [
	{ query: "clash-display@600", file: "ClashDisplay-Semibold.woff2" },
	{ query: "clash-display@700", file: "ClashDisplay-Bold.woff2" },
	{ query: "tanker@400", file: "Tanker-Regular.woff2" },
];

async function fetchFonts() {
	const dir = path.join(PUBLIC, "fonts");
	mkdirSync(dir, { recursive: true });
	for (const { query, file } of FONTSHARE) {
		const css = await (await fetch(`https://api.fontshare.com/v2/css?f[]=${query}&display=swap`, { headers: { "User-Agent": "Mozilla/5.0" } })).text();
		const url = /url\('([^']+\.woff2)'\)/.exec(css)?.[1];
		if (!url) throw new Error(`Fontshare has no ${query}`);
		writeFileSync(path.join(dir, file), new Uint8Array(await (await fetch(`https:${url}`)).arrayBuffer()));
	}
	copyFileSync(path.join(ROOT, "node_modules/@fontsource/archivo-black/files/archivo-black-latin-400-normal.woff2"), path.join(dir, "ArchivoBlack-Regular.woff2"));
}

function buildDraft(loaded: LoadedClip): Pick<Concept, "cuts" | "bubbles"> {
	const { clip } = loaded;
	const duration = clip.durationS ?? 0;
	const guest = clip.sources.find((source) => source.kind === "guest") ?? clip.sources[0];
	if (!guest) throw new Error(`${clip.slug} has no sources yet`);
	const screen = clip.sources.find((source) => source.kind === "screen");
	const cuts: Cut[] = [];
	const cutFor = (from: number, to: number, key: string): Cut => ({ source: key, from, to, sourceIn: from, rate: 1, focus: { x: 0.5, y: 0.5 }, scale: 1, offsetY: 0 });
	let cursor = 0;
	for (const beat of clip.beats) {
		if (beat.start === null || beat.end === null || beat.end <= cursor) continue;
		if (beat.start > cursor) cuts.push(cutFor(cursor, beat.start, guest.key));
		const wantsScreen = /screen|b-roll/i.test(beat.visual ?? "") && screen;
		cuts.push(cutFor(Math.max(beat.start, cursor), Math.min(beat.end, duration), wantsScreen ? screen.key : guest.key));
		cursor = Math.min(beat.end, duration);
	}
	if (cursor < duration) cuts.push(cutFor(cursor, duration, guest.key));
	const bubbles = cuts.filter((cut) => cut.source !== guest.key).map((cut) => ({ source: guest.key, from: cut.from, to: cut.to, focus: { x: 0.6, y: 0.42 } }));
	return { cuts, bubbles };
}

async function trimClip(args: string[], flags: Flags) {
	const loaded = findClip(args[0] ?? "");
	const raw = text(flags.raw);
	if (!raw) throw new Error("Pass the folder of raw tracks: --raw <dir>");
	const cuts = path.join(loaded.dir, "cuts.json");
	if (!existsSync(cuts)) throw new Error(`${loaded.clip.slug} has no cuts.json yet`);
	const out = mediaPath(`${loaded.clip.guest}/${loaded.clip.slug}`);
	await run(["python3", path.join(ROOT, "pipeline/dive_clip_trim.py"), raw, cuts, out, "--preset", text(flags.preset) ?? "veryfast", ...(flags["keep-audio"] ? ["--no-audio"] : [])]);
	const guestFile = path.join(out, "guest.mp4");
	if (existsSync(guestFile)) {
		const durationS = await probeDuration(guestFile);
		writeJson(path.join(loaded.dir, "clip.json"), { ...loaded.clip, durationS: Math.round(durationS * 1000) / 1000 });
	}
	await sync();
}

async function wordCaptions(args: string[], flags: Flags) {
	const loaded = findClip(args[0] ?? "");
	const dense = text(flags.dense);
	const srt = text(flags.srt);
	let file = text(flags.json);
	if (!file) {
		if (!dense || !srt) throw new Error("Pass Grok's captions with --json <file>, or both Descript exports with --dense <txt> --srt <srt>");
		file = path.join(WORK, `captions-${loaded.clip.slug}.json`);
		await run(["python3", path.join(ROOT, "pipeline/descript_word_captions.py"), dense, srt, file, "--clip", loaded.clip.slug, "--composition", text(flags.composition) ?? "unknown"]);
	}
	const fresh = JSON.parse(readFileSync(file, "utf8"));
	const bold = emphasisFromCopy(loaded.clip.captionCopy);
	const earlier = new Set(loaded.captions?.words.filter((word) => word.em).map((word) => cleanWord(word.text).toLowerCase()));
	const emphasis = bold.size > 0 ? bold : earlier;
	const words = fresh.words.map((word: { text: string }) => ({ ...word, em: emphasis.has(cleanWord(word.text).toLowerCase()) }));
	writeJson(path.join(loaded.dir, "captions.json"), Captions.parse({ ...fresh, words, source: "descript" }));
	await sync();
	console.log(`${loaded.clip.slug}: ${words.length} words, ${words.filter((word: { em: boolean }) => word.em).length} emphasised`);
}

async function renderCommand(args: string[], flags: Flags) {
	const targets: { loaded: LoadedClip; ids: string[] }[] = [];
	if (flags.all) {
		for (const loaded of loadAllClips()) {
			const built = await buildClip(loaded);
			const ids = built.concepts.filter((concept) => !concept.current || concept.stale || concept.current.round !== concept.round).map((concept) => concept.id);
			if (ids.length > 0 && built.files.every((file) => file.exists)) targets.push({ loaded, ids });
		}
	} else {
		const loaded = findClip(args[0] ?? "");
		const ids = args[1] ? [args[1]] : loaded.concepts.map((concept) => concept.id);
		if (ids.length === 0) throw new Error(`${loaded.clip.slug} has no concepts yet. Make one: bun run dive concept ${loaded.clip.slug} a --name "…"`);
		targets.push({ loaded, ids });
	}
	if (targets.length === 0) return console.log("Everything is up to date.");
	const blocked = targets.flatMap(({ loaded, ids }) => ids.flatMap((id) => conceptChecks(loaded.clip, pickConcept(loaded, id), loaded.captions).filter((check) => check.level === "fail").map((check) => `${loaded.clip.slug}/${id}: ${check.message}`)));
	if (blocked.length > 0) throw new Error(`Fix these before rendering:\n${blocked.map((line) => `  ${line}`).join("\n")}`);
	console.log("Bundling templates…");
	await bundleVideo();
	await withMedia(async (base) => {
		for (const { loaded, ids } of targets) {
			for (const id of ids) {
				const concept = pickConcept(loaded, id);
				console.log(`Rendering ${loaded.clip.slug} / ${concept.id} (${concept.name}), round ${concept.round}`);
				const { record } = await renderConcept(loaded, concept, { mediaBase: base, frames: text(flags.frames), concurrency: text(flags.concurrency) });
				console.log(`  ${record.renderSeconds}s · master ${mb(record.masterBytes)} · preview ${mb(record.previewBytes)}`);
			}
		}
	});
	await sync();
}

async function fitPreview(input: string, output: string, kbps: number) {
	const height = kbps < 700 ? 480 : kbps < 1100 ? 540 : 720;
	await ffmpeg(["-i", input, "-vf", `scale=-2:'min(${height},ih)'`, "-c:v", "libx264", "-preset", "slow", "-b:v", `${Math.round(kbps)}k`, "-maxrate", `${Math.round(kbps * 1.4)}k`, "-bufsize", `${Math.round(kbps * 2)}k`, "-g", "24", "-pix_fmt", "yuv420p", "-c:a", "aac", "-b:a", "80k", "-movflags", "+faststart", output]);
}

async function reviewCommand(args: string[], flags: Flags) {
	if (args.length === 0) throw new Error("Name the clips to review: bun run dive review <clip> [clip…]");
	const manifest = await sync();
	const chosen = args.map((query) => findClip(query).clip.slug);
	const clips = manifest.clips.filter((clip) => chosen.includes(clip.slug));
	const concepts = clips.flatMap((clip) => clip.concepts.filter((concept) => concept.current).map((concept) => ({ clip, concept })));
	if (concepts.length === 0) throw new Error("Nothing is rendered for those clips yet. Run: bun run dive render <clip>");
	const stale = concepts.filter(({ concept }) => concept.stale);
	if (stale.length > 0 && !flags.force) throw new Error(`Stale renders: ${stale.map(({ clip, concept }) => `${clip.slug}/${concept.id}`).join(", ")}. Render them first, or pass --force.`);

	process.env.VITE_DIVE_REVIEW = "1";
	await run(["bunx", "vite", "build", "--logLevel", "error"], { cwd: ROOT, quiet: true });
	for (const unused of ["fonts", "placeholder"]) rmSync(path.join(DIST, unused), { recursive: true, force: true });

	const copy = (relative: string) => {
		const to = path.join(DIST, "media", relative);
		mkdirSync(path.dirname(to), { recursive: true });
		copyFileSync(mediaPath(relative), to);
	};
	const fixed: string[] = [];
	for (const clip of clips) {
		for (const file of clip.files) if (file.proxy) fixed.push(file.proxy);
		for (const concept of clip.concepts) if (concept.current) fixed.push(concept.current.poster, concept.current.sprite);
	}
	const unique = [...new Set(fixed)];
	unique.forEach(copy);
	const fixedBytes = unique.reduce((sum, file) => sum + statSync(mediaPath(file)).size, 0);
	const appBytes = Number((await capture(["du", "-sk", DIST])).split("\t")[0]) * 1024 - fixedBytes;

	const previews = concepts.map(({ concept }) => concept.current).filter((render) => render !== null);
	const previewBytes = previews.reduce((sum, render) => sum + statSync(mediaPath(render.preview)).size, 0);
	const room = REVIEW_BUDGET_BYTES - fixedBytes - appBytes;
	const seconds = previews.reduce((sum, render) => sum + render.durationS, 0);
	if (previewBytes <= room && previews.every((render) => render.previewBytes <= REVIEW_FILE_LIMIT_BYTES)) {
		previews.forEach((render) => copy(render.preview));
	} else {
		if (room < 2 * 1024 * 1024) throw new Error("Too much for one review link. Share fewer clips.");
		const kbps = (room * 8) / 1024 / seconds - 84;
		console.log(`Fitting ${previews.length} previews into ${mb(room)} at about ${Math.round(kbps)} kbps`);
		for (const render of previews) {
			const to = path.join(DIST, "media", render.preview);
			mkdirSync(path.dirname(to), { recursive: true });
			await fitPreview(mediaPath(render.preview), to, kbps);
		}
	}

	const reviewManifest: Manifest = {
		...manifest,
		mode: "review",
		review: { title: text(flags.title) ?? (clips.length === 1 && clips[0] ? clips[0].title : `${clips.length} clips`), note: text(flags.note) ?? null },
		guests: manifest.guests.filter((guest) => clips.some((clip) => clip.guest === guest.slug)),
		clips: clips.map((clip) => ({
			...clip,
			stage: clip.stage === "final" ? "final" : "review",
			concepts: clip.concepts.filter((concept) => concept.current).map((concept) => ({ ...concept, status: concept.status === "draft" ? "in-review" : concept.status, renders: concept.current ? [concept.current] : [] })),
		})),
	};
	writeJson(path.join(DIST, "data", "studio.json"), reviewManifest);
	const total = Number((await capture(["du", "-sk", DIST])).split("\t")[0]) * 1024;
	console.log(`dist/ is ready: ${mb(total)} across ${concepts.length} concepts.`);
	console.log("Share it with Inflight share_app, build_dir studio/dist, then record the link: bun run dive shared <clip> <link>");
	if (total > 50 * 1024 * 1024) throw new Error("dist/ is over Inflight's 50 MB limit. Share fewer clips.");
}

export const commands: Record<string, Command> = {
	async setup() {
		await fetchFonts();
		await ensureSpeech();
		await sync();
		console.log(`Ready. Media folder: ${MEDIA}`);
	},

	async doctor() {
		const report = (ok: boolean, label: string) => console.log(`${ok ? "ok  " : "MISS"} ${label}`);
		for (const tool of ["ffmpeg", "ffprobe", "python3", "whisper-cli"]) report(Boolean(Bun.which(tool)), tool);
		for (const font of ["ClashDisplay-Semibold", "ClashDisplay-Bold", "Tanker-Regular", "ArchivoBlack-Regular"]) report(existsSync(path.join(PUBLIC, "fonts", `${font}.woff2`)), `${font} (run: bun run dive setup)`);
		report(existsSync(MEDIA), `media folder ${MEDIA}`);
		for (const loaded of loadAllClips()) {
			const missing = loaded.clip.sources.filter((source) => !existsSync(mediaPath(source.file)));
			report(missing.length === 0, `${loaded.clip.guest}/${loaded.clip.slug}${missing.length ? ` is missing ${missing.map((source) => source.key).join(", ")}` : ""}`);
		}
	},

	async list() {
		const manifest = await sync();
		for (const clip of manifest.clips) console.log(`${clip.stage.padEnd(9)} ${`${clip.guest}/${clip.slug}`.padEnd(66)} ${clip.concepts.map((concept) => `${concept.id}${concept.stale ? "*" : ""}`).join(" ")}`);
	},

	async styles() {
		console.log("Templates");
		for (const template of templates) console.log(`  ${template.id.padEnd(16)} ${template.formats.join(", ").padEnd(10)} ${template.name}`);
		console.log("\nCaption styles");
		for (const [id, style] of Object.entries(captionStyles)) console.log(`  ${id.padEnd(16)} ${style.description}`);
	},

	async sync(_args, flags) {
		const manifest = await sync();
		if (!flags.quiet) console.log(`${manifest.clips.length} clips synced to ${path.relative(ROOT, MANIFEST_FILE)}`);
	},

	async import(args) {
		const [kind, file, extra] = args;
		if (kind === "notion" && file) {
			const rows = JSON.parse(readFileSync(file, "utf8")) as NotionRow[];
			console.log(`Imported ${importNotion(rows, extra ?? path.join(WORK, "briefs")).length} clips`);
		} else if (kind === "descript" && file) {
			const project = JSON.parse(readFileSync(file, "utf8")) as { compositions: { id: string; name: string; duration: number }[] };
			let matched = 0;
			for (const loaded of loadAllClips()) {
				const short = loaded.clip.descriptUrl?.split("/").pop();
				const composition = short ? project.compositions.find((item) => item.id.startsWith(short)) : undefined;
				if (!composition) continue;
				matched += 1;
				writeJson(path.join(loaded.dir, "clip.json"), { ...loaded.clip, descriptDurationS: Math.round(composition.duration * 1000) / 1000, durationS: loaded.clip.durationS ?? Math.round(composition.duration * 1000) / 1000, removed: /REMOVED/i.test(composition.name) });
			}
			console.log(`Matched ${matched} compositions`);
		} else if (kind === "mixture" && file && extra) {
			importMixture(file, extra);
			console.log("Imported Mixture compositions");
		} else throw new Error("Usage: import notion <rows.json> [briefs dir], import descript <get_project.json>, or import mixture <dsl.json> <assets.json>");
		await sync();
	},

	trim: trimClip,
	captions: wordCaptions,

	async concept(args, flags) {
		const [clipQuery, id] = args;
		if (!clipQuery || !id) throw new Error('Usage: concept <clip> <id> --name "…" --template talk-square [--from a]');
		const loaded = findClip(clipQuery);
		if (loaded.concepts.some((concept) => concept.id === id)) throw new Error(`${loaded.clip.slug} already has a concept "${id}"`);
		const from = text(flags.from) ? pickConcept(loaded, text(flags.from) ?? "") : null;
		const template = templates.find((item) => item.id === (text(flags.template) ?? from?.template ?? "talk-square"));
		if (!template) throw new Error(`Unknown template. Choose from: ${templates.map((item) => item.id).join(", ")}`);
		const format = (text(flags.format) ?? template.formats[0]) as FormatId;
		if (!template.formats.includes(format)) throw new Error(`${template.id} does ${template.formats.join(", ")}, not ${format}`);
		const captionStyle = text(flags.captions) ?? from?.captionStyle ?? template.defaultCaptionStyle;
		if (!(captionStyle in captionStyles)) throw new Error(`Unknown caption style. Choose from: ${Object.keys(captionStyles).join(", ")}`);
		const base = from ? { cuts: from.cuts, bubbles: template.id === from.template ? from.bubbles : from.bubbles.map(({ x: _x, y: _y, size: _size, ...bubble }) => bubble), zooms: from.zooms } : { ...buildDraft(loaded), zooms: [] };
		const concept = Concept.parse({ ...base, id, name: text(flags.name) ?? id, intent: text(flags.intent) ?? "", template: template.id, format, captionStyle, history: [{ round: 1, date: new Date().toISOString().slice(0, 10), summary: from ? `Started from concept ${from.id}.` : "First draft from the beat sheet." }] });
		saveConcept(loaded.dir, concept);
		await sync();
		console.log(`Created ${loaded.clip.slug}/${id}`);
	},

	render: renderCommand,

	async still(args, flags) {
		const [clipQuery, id, ...seconds] = args;
		const loaded = findClip(clipQuery ?? "");
		const concept = pickConcept(loaded, id ?? "");
		await bundleVideo();
		await withMedia(async (base) => {
			for (const second of seconds) {
				const out = path.join(WORK, "stills", `${loaded.clip.slug}-${concept.id}-${second}.jpg`);
				await renderStill(loaded, concept, { mediaBase: base, frame: Math.round(Number(second) * loaded.clip.fps), out, scale: text(flags.scale) });
				console.log(out);
			}
		});
	},

	async round(args, flags) {
		const [clipQuery, id, summary] = args;
		if (!clipQuery || !id || !summary) throw new Error('Usage: round <clip> <concept> "what changed" [--feedback url] [--review url]');
		const loaded = findClip(clipQuery);
		const concept = pickConcept(loaded, id);
		const round = concept.round + 1;
		saveConcept(loaded.dir, { ...concept, round, history: [...concept.history, { round, date: new Date().toISOString().slice(0, 10), summary, feedbackUrl: text(flags.feedback), reviewUrl: text(flags.review) }] });
		await sync();
		console.log(`${loaded.clip.slug}/${id} is on round ${round}. Render it next.`);
	},

	async status(args) {
		const [clipQuery, id, status] = args;
		if (!CONCEPT_STATUS.some((item) => item === status)) throw new Error(`Status must be one of: ${CONCEPT_STATUS.join(", ")}`);
		const loaded = findClip(clipQuery ?? "");
		saveConcept(loaded.dir, Concept.parse({ ...pickConcept(loaded, id ?? ""), status }));
		await sync();
	},

	async posted(args, flags) {
		const loaded = findClip(args[0] ?? "");
		writeJson(path.join(loaded.dir, "clip.json"), { ...loaded.clip, posted: !flags.undo });
		await sync();
		console.log(`${loaded.clip.slug} is ${flags.undo ? "no longer marked" : "marked"} posted. Commit clip.json, and set Shipped Short in Notion to match.`);
	},

	async shared(args) {
		const [clipQuery, link] = args;
		if (!clipQuery || !link) throw new Error("Usage: shared <clip> <inflight link>");
		const loaded = findClip(clipQuery);
		const rendered = loaded.concepts.filter((concept) => existsSync(mediaPath(`${renderDir(loaded.clip.guest, loaded.clip.slug, concept.id, concept.round)}/render.json`)));
		for (const concept of rendered) {
			const history = concept.history.map((note) => (note.round === concept.round ? { ...note, reviewUrl: link } : note));
			saveConcept(loaded.dir, { ...concept, history, status: concept.status === "draft" ? "in-review" : concept.status });
		}
		await sync();
		console.log(`${loaded.clip.slug}: ${rendered.length} concepts out for review at ${link}. Commit the concept files. The link shows in the hosted Rounds tab from the next review build.`);
	},

	async check(args) {
		const manifest = await sync();
		const clips = args[0] ? manifest.clips.filter((clip) => clip.slug === findClip(args[0] ?? "").clip.slug) : manifest.clips;
		let failed = false;
		for (const clip of clips) {
			console.log(`\n${clip.guest}/${clip.slug}`);
			const rows = [...clip.checks.map((check) => ({ scope: "clip", check })), ...clip.concepts.flatMap((concept) => concept.checks.map((check) => ({ scope: concept.id, check })))];
			for (const { scope, check } of rows) {
				if (check.level === "fail") failed = true;
				console.log(`  ${check.level.padEnd(4)} ${scope.padEnd(5)} ${check.title}: ${check.message}`);
			}
		}
		if (failed) process.exitCode = 1;
	},

	async take(args) {
		const request = JSON.parse(readFileSync(args[0] ?? "", "utf8")) as TakeRequest;
		console.log(JSON.stringify(await addTake(request)));
	},

	async prompts(args, flags) {
		const { clip } = findClip(args[0] ?? "");
		const takes = loadTakes(clip.guest, clip.slug);
		if (flags.json) return console.log(JSON.stringify(takes));
		const latest = takes[0];
		console.log(latest ? latest.prompt : `${clip.slug} has no dictated prompts.`);
	},

	async moments(args, flags) {
		const loaded = findClip(args[0] ?? "");
		const transcriptFile = text(flags.transcript);
		const eventsFile = text(flags.events);
		if (!transcriptFile || !eventsFile) throw new Error("Pass the recording's data: --transcript <file> --events <file>");
		const { segments } = JSON.parse(readFileSync(transcriptFile, "utf8")) as { segments: TranscriptSegment[] };
		const { timeline } = JSON.parse(readFileSync(eventsFile, "utf8")) as { timeline: RecordingEvent[] };
		const moments = momentsFrom(segments, stampsFrom(timeline));
		if (moments.length === 0) throw new Error("This recording never touched a clip in the studio.");
		const out = path.join(WORK, "moments", loaded.clip.slug);
		mkdirSync(out, { recursive: true });
		const lines: string[] = [`# Notes on ${loaded.clip.title}`, ""];
		for (const [index, moment] of moments.entries()) {
			const concept = loaded.concepts.find((item) => item.id === moment.concept) ?? loaded.concepts[0];
			const span = moment.clipFrom === moment.clipTo ? timecode(moment.clipFrom, loaded.clip.fps) : `${timecode(moment.clipFrom, loaded.clip.fps)} to ${timecode(moment.clipTo, loaded.clip.fps)}`;
			lines.push(`${index + 1}. **${span}**${concept ? ` (concept ${concept.id})` : ""}: ${moment.text}`);
			if (!concept) continue;
			const master = mediaPath(`${renderDir(loaded.clip.guest, loaded.clip.slug, concept.id, moment.round ?? concept.round)}/master.mp4`);
			if (!existsSync(master)) continue;
			const frame = `${String(index + 1).padStart(3, "0")}.jpg`;
			await ffmpeg(["-ss", String(moment.clipFrom), "-i", master, "-frames:v", "1", "-q:v", "3", path.join(out, frame)]);
			lines.push(`   ![](${frame})`);
		}
		writeFileSync(path.join(out, "moments.md"), `${lines.join("\n")}\n`);
		console.log(path.join(out, "moments.md"));
	},

	review: reviewCommand,

	async final(args, flags) {
		const [clipQuery, id] = args;
		const loaded = findClip(clipQuery ?? "");
		const concept = pickConcept(loaded, id ?? "");
		if (concept.status !== "picked" && !flags.force) throw new Error(`${concept.id} is ${concept.status}. Mark the chosen one first: bun run dive status ${loaded.clip.slug} ${concept.id} picked`);
		const other = loaded.concepts.find((item) => item.status === "final" && item.id !== concept.id);
		if (other && !flags.force) throw new Error(`Concept ${other.id} is already final. Pass --force to export a second one.`);
		const folder = renderDir(loaded.clip.guest, loaded.clip.slug, concept.id, concept.round);
		const master = mediaPath(`${folder}/master.mp4`);
		if (!existsSync(master)) throw new Error("Render this round first.");
		const record = JSON.parse(readFileSync(mediaPath(`${folder}/render.json`), "utf8")) as { hash: string };
		if (record.hash !== renderHash(loaded, concept)) throw new Error("This render is stale. Render it again first.");
		const relative = `exports/${loaded.clip.guest}/${loaded.clip.slug}-${concept.id}.mp4`;
		mkdirSync(path.dirname(mediaPath(relative)), { recursive: true });
		copyFileSync(master, mediaPath(relative));
		saveConcept(loaded.dir, Concept.parse({ ...concept, status: "final" }));
		await sync();
		console.log(mediaPath(relative));
	},
};

