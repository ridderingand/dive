import type { SVGProps } from "react";

// Central icons only. Add one at a time; the license forbids publishing the set. See AGENTS.md.
const base = { width: 18, height: 18, viewBox: "0 0 24 24", fill: "none" } as const;
type Props = SVGProps<SVGSVGElement>;

export const PlayIcon = (props: Props) => (
	<svg {...base} {...props}>
		<path d="M11.1967 2.71828C8.53683 0.970354 5 2.8783 5 6.0611V17.9387C5 21.1215 8.53684 23.0294 11.1967 21.2815L20.234 15.3427C22.6384 13.7627 22.6384 10.2371 20.234 8.65706L11.1967 2.71828Z" fill="currentColor" />
	</svg>
);
export const PauseIcon = (props: Props) => (
	<svg {...base} {...props}>
		<path d="M4 6C4 4.34315 5.34315 3 7 3C8.65685 3 10 4.34315 10 6V18C10 19.6569 8.65685 21 7 21C5.34315 21 4 19.6569 4 18V6Z" fill="currentColor" />
		<path d="M14 6C14 4.34315 15.3431 3 17 3C18.6569 3 20 4.34315 20 6V18C20 19.6569 18.6569 21 17 21C15.3431 21 14 19.6569 14 18V6Z" fill="currentColor" />
	</svg>
);
export const BackIcon = (props: Props) => (
	<svg {...base} {...props}>
		<path d="M15 20L9.12136 14.1213C7.94978 12.9498 7.94978 11.0503 9.12135 9.8787L15 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
	</svg>
);
export const SoundIcon = (props: Props) => (
	<svg {...base} {...props}>
		<path d="M19.071 4.92968C20.8807 6.73932 22 9.23932 22 12.0007C22 14.7622 20.8807 17.2622 19.071 19.0718M15.8891 8.11132C16.8844 9.10662 17.5 10.4816 17.5 12.0004C17.5 13.5192 16.8844 14.8942 15.8891 15.8895M4 7.99999H5.2759C5.74377 7.99999 6.19684 7.83596 6.55627 7.53643L10.3598 4.36681C11.0111 3.82403 12 4.28719 12 5.13503V18.8649C12 19.7128 11.0111 20.1759 10.3598 19.6332L6.55627 16.4635C6.19684 16.164 5.74377 16 5.2759 16H4C2.89543 16 2 15.1046 2 14V9.99999C2 8.89542 2.89543 7.99999 4 7.99999Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
	</svg>
);
export const MuteIcon = (props: Props) => (
	<svg {...base} {...props}>
		<path d="M21.5 9.99999L19.3787 12.1213M19.3787 12.1213L17.2574 14.2426M19.3787 12.1213L17.2574 9.99999M19.3787 12.1213L21.5 14.2426M4 7.99999H5.2759C5.74377 7.99999 6.19684 7.83596 6.55627 7.53643L10.3598 4.36681C11.0111 3.82403 12 4.28719 12 5.13503V18.8649C12 19.7128 11.0111 20.1759 10.3598 19.6332L6.55627 16.4635C6.19684 16.164 5.74377 16 5.2759 16H4C2.89543 16 2 15.1046 2 14V9.99999C2 8.89542 2.89543 7.99999 4 7.99999Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
	</svg>
);
export const LinkIcon = (props: Props) => (
	<svg {...base} {...props}>
		<path d="M13 18L11.6213 19.3787C10.4497 20.5503 8.55023 20.5503 7.37866 19.3787L4.62129 16.6213C3.44972 15.4497 3.44972 13.5503 4.62129 12.3787L5.99997 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
		<path d="M11 5.99955L12.3787 4.62087C13.5503 3.44929 15.4497 3.44929 16.6213 4.62087L19.3787 7.37823C20.5503 8.5498 20.5503 10.4493 19.3787 11.6209L18 12.9995" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
		<path d="M9 15L15 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
	</svg>
);
export const ExpandIcon = (props: Props) => (
	<svg {...base} {...props}>
		<path d="M8 4H7C5.34315 4 4 5.34315 4 7V8M16 4H17C18.6569 4 20 5.34315 20 7V8M20 16V17C20 18.6569 18.6569 20 17 20H16M8 20H7C5.34315 20 4 18.6569 4 17V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
	</svg>
);
export const SearchIcon = (props: Props) => (
	<svg {...base} {...props}>
		<path d="M11 18C14.866 18 18 14.866 18 11C18 7.13401 14.866 4 11 4C7.13401 4 4 7.13401 4 11C4 14.866 7.13401 18 11 18Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
		<path d="M20 20L16.05 16.05" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
	</svg>
);
export const CheckIcon = (props: Props) => (
	<svg {...base} {...props}>
		<path d="M5 12.75L10 19L19 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
	</svg>
);
export const ArrowOutIcon = (props: Props) => (
	<svg {...base} {...props}>
		<path d="M18 15V6M18 6H9M18 6L6.25 17.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
	</svg>
);
export const CopyIcon = (props: Props) => (
	<svg {...base} {...props}>
		<path d="M15 9V5.25C15 4.00736 13.9926 3 12.75 3H5.25C4.00736 3 3 4.00736 3 5.25V12.75C3 13.9926 4.00736 15 5.25 15H9M11.25 9H18.75C19.9926 9 21 10.0074 21 11.25V18.75C21 19.9926 19.9926 21 18.75 21H11.25C10.0074 21 9 19.9926 9 18.75V11.25C9 10.0074 10.0074 9 11.25 9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
	</svg>
);
export const SidebarOpenIcon = (props: Props) => (
	<svg {...base} {...props}>
		<path d="M3 8C3 6.34315 4.34315 5 6 5H18C19.6569 5 21 6.34315 21 8V16C21 17.6569 19.6569 19 18 19H6C4.34315 19 3 17.6569 3 16V8Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
		<path d="M15 5V12V19" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
	</svg>
);
export const SidebarClosedIcon = (props: Props) => (
	<svg {...base} {...props}>
		<path d="M3 8C3 6.34315 4.34315 5 6 5H18C19.6569 5 21 6.34315 21 8V16C21 17.6569 19.6569 19 18 19H6C4.34315 19 3 17.6569 3 16V8Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
		<path d="M17 9V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
	</svg>
);
export const MicIcon = (props: Props) => (
	<svg {...base} {...props}>
		<path d="M12.0013 19V21M12.0013 19C8.32307 19 6.14811 16.7451 5.01562 15M12.0013 19C15.6795 19 17.8545 16.7451 18.987 15M16.0013 7V11C16.0013 13.2091 14.2104 15 12.0013 15C9.79215 15 8.00129 13.2091 8.00129 11V7C8.00129 4.79086 9.79215 3 12.0013 3C14.2104 3 16.0013 4.79086 16.0013 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
	</svg>
);
export const HistoryIcon = (props: Props) => (
	<svg {...base} {...props}>
		<path d="M3 5V9H7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M3.51172 15C4.74723 18.4956 8.08094 21 11.9996 21C16.9702 21 20.9996 16.9706 20.9996 12C20.9996 7.02944 16.9702 3 11.9996 3C8.27045 3 5.07102 5.26806 3.70551 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 8V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
	</svg>
);
