import { useCallback, useSyncExternalStore } from "react";

function read() {
	const hash = window.location.hash.replace(/^#/, "") || "/";
	const [pathname = "/", search = ""] = hash.split("?");
	return { pathname, search };
}

let snapshot = read();
function subscribe(listener: () => void) {
	const update = () => {
		snapshot = read();
		listener();
	};
	window.addEventListener("hashchange", update);
	return () => window.removeEventListener("hashchange", update);
}

export function useRoute() {
	const route = useSyncExternalStore(subscribe, () => snapshot);
	return { ...route, query: new URLSearchParams(route.search) };
}

export function navigate(to: string) {
	window.location.hash = to;
}

/** Keeps the URL on the moment being looked at without adding a history step, so any screen can be linked. */
export function replaceQuery(values: Record<string, string | null>) {
	const { pathname, search } = read();
	const query = new URLSearchParams(search);
	for (const [key, value] of Object.entries(values)) {
		if (value === null) query.delete(key);
		else query.set(key, value);
	}
	const next = query.toString();
	window.history.replaceState(null, "", `#${pathname}${next ? `?${next}` : ""}`);
	snapshot = read();
}

export function useNavigate() {
	return useCallback(navigate, []);
}
