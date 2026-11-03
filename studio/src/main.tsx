import "@fontsource-variable/mona-sans/wdth.css";
import "@fontsource-variable/mona-sans/wdth-italic.css";
import "@fontsource-variable/geist-mono/index.css";
import "./styles/base.css";
import "./styles/app.css";
import "./styles/clips.css";
import "./styles/room.css";
import "./styles/library.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";

const root = document.getElementById("root");
if (root) {
	createRoot(root).render(
		<StrictMode>
			<App />
		</StrictMode>,
	);
}
