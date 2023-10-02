/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			maxWidth: {
				container: "1440px",
			},
			colors: {
				primary: "#FFFFFF",
			},
			backgroundImage: {
				bgContainer: "url('./src/assets/bgcontainer.png')",
			},
		},
	},
	plugins: [],
};
