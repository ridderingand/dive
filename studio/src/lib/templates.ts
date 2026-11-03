/** Names only, so the clips pages don't pull Remotion into their chunk. */
export const templateSummaries = [
	{ id: "talk-square", name: "Talk square" },
	{ id: "talk-vertical", name: "Talk vertical" },
	{ id: "demo-wide", name: "Demo wide" },
];

export const templateName = (id: string) => templateSummaries.find((template) => template.id === id)?.name ?? id;
