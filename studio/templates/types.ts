import type { ComponentType } from "react";
import type { FormatId, TemplateInput } from "@core/schema";

export type TemplateKnob = { key: string; type: string; fallback: string; description: string };

export type TemplateDef = {
	id: string;
	name: string;
	summary: string;
	bestFor: string;
	formats: FormatId[];
	defaultCaptionStyle: string;
	anatomy: string[];
	knobs: TemplateKnob[];
	component: ComponentType<TemplateInput>;
};
