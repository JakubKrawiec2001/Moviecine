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
				hoverPink: "#a41234",
			},
			screens: {
				smMobile: "320px",
				mdMobile: "375px",
				lgMobile: "414px",
				"2lg": "1100px",
				"3xl": "1600px",
				"4xl": "1900px",
			},
		},
		container: {
			center: true,
		},
	},
	plugins: [require("daisyui")],
};
