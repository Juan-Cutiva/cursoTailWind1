/** @type {import('tailwindcss').Config} */
import animations from '@midudev/tailwind-animations'
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary': '#f3c614',
				'secondary': '#353535',
				'tertiary': '#353535',
			}
		},
	},
	plugins: [animations],
}
