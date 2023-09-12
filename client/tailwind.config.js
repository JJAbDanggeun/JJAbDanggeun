/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			//공식 색상 설정
			colors: {
				MAIN_LIGHT_MINT: "#3AF0CF",
				MAIN_DEEP_MINT: "#18816E",
				LIGHT_MINT_50: "rgba(58, 240, 207, 0.5)",
				LIGHT_MINT_20: "rgba(58, 240, 207, 0.2)",
				DEEP_MINT_60: "rgba(24, 129, 110, 0.6)",
				DDEP_MINT_20: "rgba(24, 129, 110, 0.2)",
				MAIN_LIGHT_GRAY: "#F1F1F1",
				MAIN_POINT_ORAGNE: "#FC9502",
			},
		},
	},
	plugins: [],
};
