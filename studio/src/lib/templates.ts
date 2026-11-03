import { templates } from "../../templates/registry";

export const templateName = (id: string) => templates.find((template) => template.id === id)?.name ?? id;
