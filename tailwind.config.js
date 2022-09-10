/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		// screens: {
		//     sm: '480px',
		//     md: '768px',
		//     lg: '976px',
		//     xl: '1440px'
		// },
		extend: {
			colors: {
				secondary: 'hsl(180, 66%, 69%)',
				primary: 'hsl(257, 27%, 26%)',
			},
			// fontFamily: {
			// 	sans: ['Poppins', 'sans-serif'],
			// 	alata: ['Alata']
			// },
			// keyframes: {
			// 	appear: {
			// 		'0%': { transform: 'translateY(-5px)', opacity: '0' },
			// 		'100%': { transform: 'translateY(0px)', opacity: '1' }
			// 	}
			// },
			// animation: {
			// 	'appear': 'appear .3s linear'
			// }

		},
	},
	plugins: [],
}
