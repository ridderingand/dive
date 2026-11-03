import { accents, bubble, captionStyles, gradients, motion, neutrals, type as typeScale, type CaptionStyle } from "../../system/dive";
import { rules, type Rule } from "../../system/rules";
import { copyText } from "../ui/toast";

const SPECIMEN = 0.3;

function Swatch({ name, value, background }: { name: string; value: string; background?: string }) {
	return (
		<button type="button" className="swatch" onClick={() => void copyText(value, `${value} copied`)}>
			<span className="swatch-color" style={{ background: background ?? value }} />
			<span className="swatch-name">{name}</span>
			<span className="mono">{value}</span>
		</button>
	);
}

function CaptionSpecimen({ style }: { style: CaptionStyle }) {
	if (style.kind === "label") {
		const pad = (values: readonly number[]) => values.map((value) => `${value * SPECIMEN}px`).join(" ");
		const face = (look: typeof style.base) => ({ fontFamily: `"${style.family}"`, fontWeight: look.weight, fontSize: look.size * SPECIMEN, color: look.text, background: look.fill, padding: pad(look.padding), borderRadius: style.radius * SPECIMEN, letterSpacing: style.letterSpacing, lineHeight: 1 });
		return (
			<span className="specimen-row">
				<span style={face(style.base)}>JUST GET</span>
				<span style={face(style.emphasis)}>RANDOM</span>
			</span>
		);
	}
	const face = (look: typeof style.base) => ({
		fontFamily: `"${style.family}"`,
		fontWeight: look.weight,
		fontSize: look.size * SPECIMEN,
		color: look.color,
		lineHeight: 1,
		textShadow: style.shadow.replace(/(\d+)px/g, (_, value: string) => `${Number(value) * SPECIMEN}px`),
		WebkitTextStroke: style.stroke ? `${style.stroke.width * 2 * SPECIMEN}px ${style.stroke.color}` : undefined,
		paintOrder: "stroke fill",
		letterSpacing: style.letterSpacing,
	});
	return (
		<span className="specimen-row">
			<span style={face(style.base)}>JUST</span>
			<span style={face(style.emphasis)}>RANDOM</span>
		</span>
	);
}

const GROUPS: Rule["group"][] = ["Pacing", "Picture", "Captions", "Process"];

export function SystemPage() {
	return (
		<div className="library-page scroll">
			<div className="library-inner system">
				<header className="library-hero">
					<h1 className="display">System</h1>
					<p className="role">What every Dive clip shares. Templates read these values directly, so a change here reaches every concept on its next render.</p>
				</header>

				<section className="system-section">
					<h2 className="wide">Colour</h2>
					<div className="swatch-grid">{Object.values(accents).map((accent) => <Swatch key={accent.name} name={accent.name} value={accent.hex} />)}</div>
					<div className="swatch-grid">{Object.entries(gradients).map(([name, [from, to]]) => <Swatch key={name} name={`${name[0]?.toUpperCase()}${name.slice(1)} gradient`} value={`${from} → ${to}`} background={`linear-gradient(90deg, ${from}, ${to})`} />)}</div>
					<div className="swatch-grid">{Object.entries(neutrals).map(([name, value]) => <Swatch key={name} name={name.replace(/([A-Z])/g, " $1").replace(/^./, (letter) => letter.toUpperCase())} value={value} />)}</div>
				</section>

				<section className="system-section">
					<h2 className="wide">Captions</h2>
					<div className="caption-grid">
						{Object.entries(captionStyles).map(([key, style]) => (
							<div key={key} className="caption-card pool">
								<div className="caption-stage">
									<CaptionSpecimen style={style} />
								</div>
								<strong className="wide">{style.name}</strong>
								<p>{style.description}</p>
								<span className="mono">{key}</span>
							</div>
						))}
					</div>
				</section>

				<section className="system-section">
					<h2 className="wide">Type</h2>
					<div className="type-list">
						{Object.values(typeScale).map((face) => (
							<div key={face.family}>
								<span className="type-sample" style={{ fontFamily: `"${face.family}"`, fontStretch: face.family.startsWith("Mona") ? "125%" : undefined, fontWeight: face.weights[face.weights.length - 1] }}>
									{face.family.replace(" Variable", "")}
								</span>
								<span className="role">{face.use}</span>
							</div>
						))}
					</div>
				</section>

				<section className="system-section">
					<h2 className="wide">Timing</h2>
					<div className="timing-list">
						{Object.values(motion).map((item) => (
							<div key={item.use}>
								<span className="mono">{item.seconds === 0 ? "0" : `${item.seconds}s`}</span>
								<span>{item.use}</span>
								<span className="role">{item.easing}</span>
							</div>
						))}
						<div>
							<span className="mono">{bubble.square.size}px</span>
							<span>Speaker bubble, with a {bubble.square.border}px Sky rim</span>
							<span className="role">1080 canvas</span>
						</div>
					</div>
				</section>

				<section className="system-section">
					<h2 className="wide">House rules</h2>
					<div className="rule-columns">
						{GROUPS.map((group) => (
							<div key={group}>
								<h3 className="label">{group}</h3>
								{rules.filter((rule) => rule.group === group).map((rule) => (
									<div key={rule.id} className="rule">
										<strong>{rule.title}{rule.check ? <i title="Checked automatically">auto</i> : null}</strong>
										<p>{rule.detail}</p>
									</div>
								))}
							</div>
						))}
					</div>
				</section>

				<section className="system-section">
					<h2 className="wide">Library</h2>
					<div className="asset-grid">
						{[
							{ src: "/brand/wordmark.svg", name: "Wordmark", invert: true },
							{ src: "/brand/snorkel.png", name: "Snorkel" },
							{ src: "/brand/bubbles-1.png", name: "Bubbles 01" },
							{ src: "/brand/bubbles-2.png", name: "Bubbles 02" },
							{ src: "/brand/sea-floor.webp", name: "Sea floor" },
						].map((asset) => (
							<figure key={asset.name} className="pool">
								<img src={asset.src} alt={asset.name} className={asset.invert ? "is-invert" : undefined} />
								<figcaption>{asset.name}</figcaption>
							</figure>
						))}
					</div>
				</section>
			</div>
		</div>
	);
}
