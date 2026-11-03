import { existsSync, statSync } from "node:fs";
import path from "node:path";
import { MEDIA } from "./paths";

/** Serves the media folder with Range support, so renders and proxies read footage the same way the browser does. */
export function startMediaServer() {
	const server = Bun.serve({
		port: 0,
		idleTimeout: 255,
		fetch(request) {
			const relative = decodeURIComponent(new URL(request.url).pathname).replace(/^\/+/, "");
			const file = path.join(MEDIA, relative);
			if (!file.startsWith(MEDIA) || !existsSync(file)) return new Response("Not found", { status: 404 });
			const size = statSync(file).size;
			const headers = { "Accept-Ranges": "bytes", "Access-Control-Allow-Origin": "*" };
			const range = /bytes=(\d*)-(\d*)/.exec(request.headers.get("range") ?? "");
			if (!range) return new Response(Bun.file(file), { headers: { ...headers, "Content-Length": String(size) } });
			const start = Number(range[1] || 0);
			const end = Math.min(range[2] ? Number(range[2]) : size - 1, size - 1);
			return new Response(Bun.file(file).slice(start, end + 1), { status: 206, headers: { ...headers, "Content-Range": `bytes ${start}-${end}/${size}`, "Content-Length": String(end - start + 1) } });
		},
	});
	return { base: `http://localhost:${server.port}/`, stop: () => server.stop(true) };
}
