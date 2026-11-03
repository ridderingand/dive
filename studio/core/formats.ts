export const FORMATS = {
	square: { width: 1080, height: 1080, label: "Square", ratio: "1:1" },
	vertical: { width: 1080, height: 1920, label: "Vertical", ratio: "9:16" },
	wide: { width: 1920, height: 1080, label: "Wide", ratio: "16:9" },
} as const;
export type FormatId = keyof typeof FORMATS;
