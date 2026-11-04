import { execFile } from "node:child_process";
import { createReadStream, existsSync, statSync } from "node:fs";
import path from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig, type Plugin } from "vite";

const media = path.resolve(process.env.DIVE_MEDIA ?? "media");

const CONTENT_TYPES: Record<string, string> = { ".mp4": "video/mp4", ".m4a": "audio/mp4", ".jpg": "image/jpeg", ".png": "image/png", ".json": "application/json", ".svg": "image/svg+xml" };

/** Video seeking needs Range requests, which Vite's static handling doesn't give a folder outside public/. */
function mediaFolder(): Plugin {
	return {
		name: "dive-media",
		configureServer(server) {
			// The one thing the studio writes itself. Everything else goes through an agent.
			server.middlewares.use("/api/posted", (req, res) => {
				const url = new URL(req.url ?? "", "http://localhost");
				const clip = url.searchParams.get("clip") ?? "";
				if (req.method !== "POST" || !/^[a-z0-9-]+\/[a-z0-9-]+$/.test(clip)) {
					res.statusCode = 400;
					return res.end();
				}
				execFile("bun", ["cli/dive.ts", "posted", clip, ...(url.searchParams.get("undo") ? ["--undo"] : [])], (error) => {
					res.statusCode = error ? 500 : 200;
					res.end();
				});
			});
			server.middlewares.use("/media", (req, res, next) => {
				const relative = decodeURIComponent((req.url ?? "").split("?")[0] ?? "");
				const file = path.join(media, relative);
				if (!file.startsWith(media) || !existsSync(file) || !statSync(file).isFile()) return next();
				const size = statSync(file).size;
				res.setHeader("Content-Type", CONTENT_TYPES[path.extname(file)] ?? "application/octet-stream");
				res.setHeader("Accept-Ranges", "bytes");
				const range = /bytes=(\d*)-(\d*)/.exec(req.headers.range ?? "");
				if (!range) {
					res.setHeader("Content-Length", size);
					return createReadStream(file).pipe(res);
				}
				const start = Number(range[1] || 0);
				const end = Math.min(range[2] ? Number(range[2]) : size - 1, size - 1);
				res.statusCode = 206;
				res.setHeader("Content-Range", `bytes ${start}-${end}/${size}`);
				res.setHeader("Content-Length", end - start + 1);
				createReadStream(file, { start, end }).pipe(res);
			});
		},
	};
}

export default defineConfig({
	plugins: [react(), mediaFolder()],
	resolve: {
		alias: {
			"@core": path.resolve("core"),
			"@": path.resolve("src"),
		},
	},
	build: { outDir: "dist", emptyOutDir: true, chunkSizeWarningLimit: 900 },
});
