const plugin = require('tailwindcss/plugin')

module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		screens: {
			sm: '640px',
			// => @media (min-width: 640px) { ... }

			'761md': '761px',

			md: '768px',
			// => @media (min-width: 768px) { ... }

			lg: '1024px',
			// => @media (min-width: 1024px) { ... }

			xl: '1280px',
			// => @media (min-width: 1280px) { ... }

			'2xl': '1536px',
			// => @media (min-width: 1536px) { ... }
		},
	},
	variants: {
		extend: {},
	},
	plugins: [
		plugin(function({ addUtilities }) {
		  const newUtilities = {
			/* Hide scrollbar for Chrome, Safari and Opera */
			'.no-scrollbar::-webkit-scrollbar': {
			  display: 'none',
			},
			/* Hide scrollbar for IE, Edge and Firefox */
			'.no-scrollbar': {
			  '-ms-overflow-style': 'none', /* IE and Edge */
			   'scrollbar-width': 'none' /* Firefox */
			},
		  }
	
		  addUtilities(newUtilities)
		})
	]
};