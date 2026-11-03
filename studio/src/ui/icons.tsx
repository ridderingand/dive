import type { SVGProps } from "react";

const base = { width: 18, height: 18, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" } as const;
type Props = SVGProps<SVGSVGElement>;

export const PlayIcon = (props: Props) => (
	<svg {...base} {...props} stroke="none" fill="currentColor">
		<path d="M7 4.8c0-1 1-1.6 1.9-1.1l11.4 6.9c.9.5.9 1.8 0 2.3L8.9 19.8c-.9.5-1.9-.1-1.9-1.1V4.8Z" transform="translate(0 .5)" />
	</svg>
);
export const PauseIcon = (props: Props) => (
	<svg {...base} {...props} stroke="none" fill="currentColor">
		<rect x="6" y="4" width="4.5" height="16" rx="1.4" />
		<rect x="13.5" y="4" width="4.5" height="16" rx="1.4" />
	</svg>
);
export const BackIcon = (props: Props) => (
	<svg {...base} {...props}>
		<path d="M15 5 8 12l7 7" />
	</svg>
);
export const StepBackIcon = (props: Props) => (
	<svg {...base} {...props}>
		<path d="M18 6 11 12l7 6V6Z" />
		<path d="M6 6v12" />
	</svg>
);
export const StepForwardIcon = (props: Props) => (
	<svg {...base} {...props}>
		<path d="m6 6 7 6-7 6V6Z" />
		<path d="M18 6v12" />
	</svg>
);
export const SoundIcon = (props: Props) => (
	<svg {...base} {...props}>
		<path d="M4 9.5v5h3.5L12 18.5v-13L7.5 9.5H4Z" />
		<path d="M16 9a4.2 4.2 0 0 1 0 6M18.5 6.5a7.8 7.8 0 0 1 0 11" />
	</svg>
);
export const MuteIcon = (props: Props) => (
	<svg {...base} {...props}>
		<path d="M4 9.5v5h3.5L12 18.5v-13L7.5 9.5H4Z" />
		<path d="m16 9.5 5 5M21 9.5l-5 5" />
	</svg>
);
export const LinkIcon = (props: Props) => (
	<svg {...base} {...props}>
		<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1" />
		<path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1" />
	</svg>
);
export const ExpandIcon = (props: Props) => (
	<svg {...base} {...props}>
		<path d="M9 4H4v5M15 4h5v5M9 20H4v-5M15 20h5v-5" />
	</svg>
);
export const SearchIcon = (props: Props) => (
	<svg {...base} {...props}>
		<circle cx="11" cy="11" r="6.5" />
		<path d="m16 16 4.5 4.5" />
	</svg>
);
export const CheckIcon = (props: Props) => (
	<svg {...base} {...props}>
		<path d="m5 12.5 4.5 4.5L19 7.5" />
	</svg>
);
export const AlertIcon = (props: Props) => (
	<svg {...base} {...props}>
		<path d="M12 8v5M12 16.5v.01" />
		<circle cx="12" cy="12" r="8.5" />
	</svg>
);
export const ArrowOutIcon = (props: Props) => (
	<svg {...base} {...props}>
		<path d="M8 16 17 7M9 7h8v8" />
	</svg>
);
export const CopyIcon = (props: Props) => (
	<svg {...base} {...props}>
		<rect x="9" y="9" width="11" height="11" rx="2.5" />
		<path d="M5.5 15H5a1.5 1.5 0 0 1-1.5-1.5V5A1.5 1.5 0 0 1 5 3.5h8.5A1.5 1.5 0 0 1 15 5v.5" />
	</svg>
);
