import { STAGES, type StageId } from "@core/manifest";

export function StageMeter({ stage }: { stage: StageId }) {
	const reached = STAGES.findIndex((item) => item.id === stage);
	const current = STAGES[reached];
	return (
		<div className="stage-meter" role="img" aria-label={`Stage: ${current?.label}`} title={`${current?.label}: ${current?.detail}`}>
			{STAGES.map((item, index) => (
				<i key={item.id} className={index < reached ? "is-done" : index === reached ? "is-now" : undefined} />
			))}
		</div>
	);
}
