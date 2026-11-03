export async function run(command: string[], options: { cwd?: string; quiet?: boolean } = {}) {
	const proc = Bun.spawn(command, { cwd: options.cwd, env: process.env, stdout: options.quiet ? "pipe" : "inherit", stderr: options.quiet ? "pipe" : "inherit" });
	const code = await proc.exited;
	if (code !== 0) {
		const detail = options.quiet ? await new Response(proc.stderr).text() : "";
		throw new Error(`${command.slice(0, 2).join(" ")} failed with code ${code}\n${detail.slice(-1500)}`);
	}
}

export async function capture(command: string[]): Promise<string> {
	const proc = Bun.spawn(command, { stdout: "pipe", stderr: "pipe" });
	const [text, code] = await Promise.all([new Response(proc.stdout).text(), proc.exited]);
	if (code !== 0) throw new Error(`${command[0]} failed: ${(await new Response(proc.stderr).text()).slice(-600)}`);
	return text;
}

export const ffmpeg = (args: string[]) => run(["ffmpeg", "-y", "-v", "error", ...args], { quiet: true });

export async function probeDuration(file: string): Promise<number> {
	return Number((await capture(["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", file])).trim());
}
