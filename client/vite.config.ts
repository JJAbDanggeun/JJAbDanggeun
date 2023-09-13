import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import macrosPlugin from "vite-plugin-babel-macros";
import envCompatible from "vite-plugin-env-compatible";
import svgrPlugin from "vite-plugin-svgr";
import * as path from "path";

// https://vitejs.dev/config/
// vite와 Babel은 함께 사용할 때 충돌할 수 있으며, 기본적으로 Vite는 Es모듈을 사용하므로 대부분이 경우 Babel없이도 작동.

export default defineConfig({
	plugins: [
		macrosPlugin(),
		react({
			babel: {
				plugins: ["babel-plugin-macros", "babel-plugin-styled-components"],
			},
		}),
		envCompatible(),
		svgrPlugin({
			svgrOptions: {
				icon: true,
			},
		}),
	],
	base: process.env.NODE_ENV === "development" ? "/" : "./",
	resolve: {
		alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
	},
});
