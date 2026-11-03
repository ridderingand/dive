import { AbsoluteFill } from "remotion";
import { accents, neutrals } from "../../system/dive";

export function Backdrop() {
	return (
		<AbsoluteFill
			style={{
				background: `radial-gradient(120% 70% at 18% -10%, ${accents.sky.hex}55 0%, transparent 60%), radial-gradient(90% 60% at 100% 110%, ${accents.blue.hex}26 0%, transparent 65%), ${neutrals.abyss}`,
			}}
		/>
	);
}
