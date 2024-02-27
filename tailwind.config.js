/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				roboto: ["Montserrat", "sans-serif"],
			},
			colors: {
				mainBlack: "#171521",
				mainLightBlack: "#1C1D21",
				mainPink: "#F51E51",
			},
			screens: {
				"2lg": "1100px",
			},
		},
		container: {
			center: true,
		},
	},
	plugins: [require("daisyui")],
};
