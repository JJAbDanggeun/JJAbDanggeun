import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import Providers from "./components/providers/Providers.tsx";
//import { worker } from "./mocks/worker.ts";

// if (process.env.NODE_ENV === "development") {
// 	worker.start();
// }

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<Providers>
			<App />
		</Providers>
	</React.StrictMode>,
);
