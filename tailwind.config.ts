import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: "1rem",
			},
		},
		extend: {
			colors: {
				// Element Colors
				"ele-primary": "#14B697", // ALOHA
				"ele-secondary": "#077d7f", // TOBERNITE
				"ele-tertiary": "#0a7460", // TURQUOISE CYAN
				"ele-quarter": "#243c40", // PONDEROSA PINE
				"ele-danger": "#b13736", // RED CONTRAST

				// Other Colors
				"other-icon": "#255c59", // BAYBERRY
				"other-dot": "#d9b65b", // STRIKE IT RICH
				"other-geneva": "#1f7b70", // GENEVA GREEN
				"other-green": "#0a6f5c", // BELLA VISTA
				"other-jade": "#1c8f7e", // MIAMI JADE
				"other-meadow": "#17ac8c", // DARK MOUNTAIN MEADOW
				// Background Colors
				"lay-primary": "#24292d", // CINDER
				"lay-secondary": "#2f363e", // BLUE PLAZA
				"lay-tertiary": "#255c59", // WASHED BLACK
				"lay-quarter": "#2e3641", // ANCHORMAN
			},
		},
	},
	darkMode: "class",
	plugins: [nextui()],
};
export default config;
