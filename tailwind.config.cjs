module.exports = {
	mode: 'jit',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			width: {
				640: '40rem',
				768: '48rem',
				1024: '64rem',
				1280: '80rem',
				1536: '96rem'
			},
			screens: {
				'3xl': '1920px'
			}
		},
		ripple: theme => ({
			colors: theme('colors')
		}),
	},
	plugins: [require('tailwindcss-ripple')()]
};
