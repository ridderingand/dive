export const END_CAP_SECONDS = 4;

export function timecode(seconds: number, fps = 24): string {
	const safe = Math.max(0, seconds);
	const whole = Math.floor(safe + 1e-6);
	const frames = Math.floor((safe - whole) * fps + 1e-6);
	const m = Math.floor(whole / 60);
	const s = whole % 60;
	return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}:${String(frames).padStart(2, "0")}`;
}

export function shortTime(seconds: number): string {
	const whole = Math.round(Math.max(0, seconds));
	return `${Math.floor(whole / 60)}:${String(whole % 60).padStart(2, "0")}`;
}
