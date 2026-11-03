import { Player } from "@remotion/player";
import { useMemo, useState } from "react";
import type { Manifest } from "@core/manifest";
import { FORMATS, type FormatId } from "@core/formats";
import type { TemplateInput } from "@core/schema";
import { templateComponent } from "../../templates";
import { templateInfo, templates, type TemplateInfo } from "../../templates/registry";
import { captionStyles } from "../../system/dive";
import { clipPath } from "../lib/data";
import { placeholderInput } from "../lib/placeholder";
import { BackIcon, CopyIcon } from "../ui/icons";
import { copyText } from "../ui/toast";

const SHOWCASE_FRAME = 140;

function TemplatePlayer({ template, format, captionStyle, controls }: { template: TemplateInfo; format: FormatId; captionStyle: string; controls: boolean }) {
	const input = useMemo<TemplateInput>(() => placeholderInput(format, captionStyle), [format, captionStyle]);
	const { width, height } = FORMATS[format];
	return <Player component={templateComponent(template.id)} inputProps={input} durationInFrames={Math.round(input.clip.durationS * 24)} fps={24} compositionWidth={width} compositionHeight={height} loop autoPlay={!controls} controls={controls} initialFrame={SHOWCASE_FRAME} acknowledgeRemotionLicense style={{ width: "100%", height: "100%" }} />;
}

function usage(manifest: Manifest, id: string) {
	return manifest.clips.flatMap((clip) => clip.concepts.filter((concept) => concept.template === id).map((concept) => ({ clip, concept })));
}

export function TemplatesPage({ manifest }: { manifest: Manifest }) {
	return (
		<div className="library-page scroll">
			<div className="library-inner">
				<header className="library-hero">
					<h1 className="display">Templates</h1>
					<p className="role">Every concept is a template plus a clip's cuts. Pick one to read it, then ask an agent to change it.</p>
				</header>
				<div className="template-grid">
					{templates.map((template) => {
						const format = template.formats[0] ?? "square";
						const used = usage(manifest, template.id).length;
						return (
							<a key={template.id} href={`#/templates/${template.id}`} className="template-card pool">
								<div className="template-card-stage">
									<div className={`template-card-frame format-${format}`}>
										<TemplatePlayer template={template} format={format} captionStyle={template.defaultCaptionStyle} controls={false} />
									</div>
								</div>
								<div className="template-card-text">
									<h2 className="wide">{template.name}</h2>
									<p>{template.summary}</p>
									<span className="role">
										{FORMATS[format].ratio}
										<span className="dots">{used === 1 ? "1 concept" : `${used} concepts`}</span>
									</span>
								</div>
							</a>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export function TemplatePage({ manifest, id }: { manifest: Manifest; id: string }) {
	const template = templateInfo(id);
	const [format, setFormat] = useState<FormatId>(template.formats[0] ?? "square");
	const [captionStyle, setCaptionStyle] = useState(template.defaultCaptionStyle);
	const used = usage(manifest, template.id);
	const prompt = `Edit the Dive template "${template.id}" (studio/templates/${template.id}). `;
	return (
		<div className="library-page scroll">
			<div className="library-inner template-detail">
				<a href="#/templates" className="library-back">
					<BackIcon width={15} height={15} /> Templates
				</a>
				<div className="template-layout">
					<div className="template-stage">
						<div className="template-frame" style={{ aspectRatio: `${FORMATS[format].width} / ${FORMATS[format].height}`, "--ratio": FORMATS[format].width / FORMATS[format].height } as React.CSSProperties}>
							<TemplatePlayer key={`${format}-${captionStyle}`} template={template} format={format} captionStyle={captionStyle} controls />
						</div>
					</div>
					<aside className="template-side">
						<h1 className="display">{template.name}</h1>
						<p className="template-summary">{template.summary}</p>
						<p className="role">{template.bestFor}</p>

						<button type="button" className="template-prompt" onClick={() => void copyText(prompt, "Prompt copied. Add what you want changed.")}>
							<span>
								<strong className="wide">Want to change it?</strong>
								<span className="mono">{prompt}</span>
							</span>
							<CopyIcon />
						</button>

						<section>
							<h3 className="label">Preview captions in</h3>
							<div className="option-row">
								{Object.entries(captionStyles).map(([key, style]) => (
									<button key={key} type="button" className={captionStyle === key ? "is-active" : undefined} onClick={() => setCaptionStyle(key)}>
										{style.name}
									</button>
								))}
							</div>
						</section>
						{template.formats.length > 1 ? (
							<section>
								<h3 className="label">Format</h3>
								<div className="option-row">
									{template.formats.map((item) => (
										<button key={item} type="button" className={format === item ? "is-active" : undefined} onClick={() => setFormat(item)}>
											{FORMATS[item].label}
										</button>
									))}
								</div>
							</section>
						) : null}
						<section>
							<h3 className="label">Anatomy</h3>
							<ul className="plain-list">{template.anatomy.map((item) => <li key={item}>{item}</li>)}</ul>
						</section>
						{template.knobs.length > 0 ? (
							<section>
								<h3 className="label">Settings a concept can override</h3>
								<ul className="plain-list">
									{template.knobs.map((knob) => (
										<li key={knob.key}>
											<span className="mono">{knob.key}</span> {knob.description}, default {knob.fallback}
										</li>
									))}
								</ul>
							</section>
						) : null}
						<section>
							<h3 className="label">Used by</h3>
							{used.length === 0 ? <p className="role">No concepts yet.</p> : null}
							<div className="used-list">
								{used.map(({ clip, concept }) => (
									<a key={`${clip.slug}-${concept.id}`} href={`#${clipPath(clip)}?c=${concept.id}`}>
										<span>{clip.title}</span>
										<span className="role">{concept.name}</span>
									</a>
								))}
							</div>
						</section>
					</aside>
				</div>
			</div>
		</div>
	);
}
