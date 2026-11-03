import { useEffect, useState } from "react";

let show: (message: string) => void = () => {};

export function toast(message: string) {
	show(message);
}

export async function copyText(value: string, message: string) {
	await navigator.clipboard.writeText(value).catch(() => {});
	toast(message);
}

export function ToastHost() {
	const [message, setMessage] = useState<string | null>(null);
	useEffect(() => {
		let timer = 0;
		show = (next) => {
			setMessage(next);
			window.clearTimeout(timer);
			timer = window.setTimeout(() => setMessage(null), 1800);
		};
		return () => window.clearTimeout(timer);
	}, []);
	return message ? (
		<div className="toast" role="status">
			{message}
		</div>
	) : null;
}
