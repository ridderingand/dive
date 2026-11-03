#!/usr/bin/env bun
import { readFileSync } from "node:fs";
import path from "node:path";
import { commands } from "./commands";

const [name = "help", ...rest] = process.argv.slice(2);
const flags: Record<string, string | true> = {};
const args: string[] = [];
for (let i = 0; i < rest.length; i += 1) {
	const part = rest[i] ?? "";
	if (!part.startsWith("--")) {
		args.push(part);
		continue;
	}
	const [key = "", inline] = part.slice(2).split("=");
	const next = rest[i + 1];
	if (inline !== undefined) flags[key] = inline;
	else if (next !== undefined && !next.startsWith("--")) {
		flags[key] = next;
		i += 1;
	} else flags[key] = true;
}

const command = commands[name];
if (!command) {
	console.error(`Unknown command "${name}".\n`);
	console.log(readFileSync(path.join(import.meta.dir, "usage.txt"), "utf8"));
	process.exit(name === "help" ? 0 : 1);
}
try {
	await command(args, flags);
} catch (error) {
	console.error(error instanceof Error ? error.message : error);
	process.exit(1);
}
