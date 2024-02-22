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
				mainBlack: "#0B0A14",
				mainLightBlack: "#171622",
				mainOrange: "#FF5722",
			},
		},
		container: {
			center: true,
		},
	},
	plugins: [require("daisyui")],
};
