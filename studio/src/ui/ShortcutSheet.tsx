const GROUPS = [
	{ title: "Playback", keys: [["Space", "Play or pause"], ["J / L", "Back or forward 5 seconds"], ["← / →", "One frame"], ["Shift ← / →", "One second"], ["[ / ]", "Previous or next cut"], ["M", "Mute"], [", / .", "Slower or faster"]] },
	{ title: "Looking", keys: [["1–9", "Choose a concept"], ["W", "Watch"], ["C", "Compare concepts"], ["F", "Files per person"], ["S", "Safe zones"], ["Shift F", "Fullscreen"]] },
	{ title: "Everywhere", keys: [["⌘K", "Jump to anything"], ["T", "Copy this moment for an agent"], ["G", "Back to clips"], ["?", "This sheet"]] },
];

export function ShortcutSheet({ review, onClose }: { review: boolean; onClose: () => void }) {
	const hidden = review ? ["Compare concepts", "Copy this moment for an agent", "Back to clips", "Jump to anything"] : [];
	return (
		<div className="overlay" onPointerDown={(event) => event.target === event.currentTarget && onClose()}>
			<div className="sheet pool" role="dialog" aria-label="Keyboard shortcuts">
				{GROUPS.map((group) => (
					<section key={group.title}>
						<h3 className="label">{group.title}</h3>
						{group.keys.filter(([, label]) => !hidden.includes(label ?? "")).map(([keys, label]) => (
							<div key={label} className="sheet-row">
								<span>{label}</span>
								<kbd>{keys}</kbd>
							</div>
						))}
					</section>
				))}
			</div>
		</div>
	);
}
