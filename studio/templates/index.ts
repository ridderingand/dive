import { demoWide } from "./demo-wide";
import { talkSquare } from "./talk-square";
import { talkVertical } from "./talk-vertical";
import type { TemplateDef } from "./types";

export const templates: TemplateDef[] = [talkSquare, talkVertical, demoWide];

export function templateById(id: string): TemplateDef {
	const template = templates.find((item) => item.id === id);
	if (!template) throw new Error(`Unknown template "${id}"`);
	return template;
}
