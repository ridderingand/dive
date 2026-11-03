import type { ComponentType } from "react";
import type { TemplateInput } from "@core/schema";
import { DemoWide } from "./demo-wide";
import { TalkSquare } from "./talk-square";
import { TalkVertical } from "./talk-vertical";

/** Add a template here and in registry.ts. */
export const components: Record<string, ComponentType<TemplateInput>> = {
	"talk-square": TalkSquare,
	"talk-vertical": TalkVertical,
	"demo-wide": DemoWide,
};

export function templateComponent(id: string): ComponentType<TemplateInput> {
	const component = components[id];
	if (!component) throw new Error(`Unknown template "${id}"`);
	return component;
}
