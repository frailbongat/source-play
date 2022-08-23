/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: [
			{
				emerald: {
					...require('daisyui/src/colors/themes')['[data-theme=emerald]'],
					primary: '#0E9F6E'
				},
				dark: {
					...require('daisyui/src/colors/themes')['[data-theme=dark]'],
					primary: '#31C48D'
				}
			}
		]
	}
};
