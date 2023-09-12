import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import * as path from "path";

// https://vitejs.dev/config/
// vite와 Babel은 함께 사용할 때 충돌할 수 있으며, 기본적으로 Vite는 Es모듈을 사용하므로 대부분이 경우 Babel없이도 작동.
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
	},
	optimizeDeps: {
		include: ["vite-plugin-babel-macros"],
	},
});
