const plugin = require('tailwindcss/plugin')

module.exports = {
	theme: {
	  extend: {
		colors: {
			'primary-medium': '#EF8451',
			'secundary-medium': '#202020',
			'secundary-semilight': '#33393D',
			'secundary-light': '#576166',
			'secundary-lightest': '#6B7280',
			'neutral-dark': '#EEEBE3',
			'neutral-medium': '#F5F3EE',
			'neutral-light': '#FDF8EE',
			'neutral-lightest': '#6B7280',
			'neutral-white': '#FFFFFF',
			'feedback-error-dark': '#8C0002',
			'feedback-error-medium': '#D80003',
			'feedback-error-light': '#FF2A2D',
			'feedback-success-dark': '#469409',
			'feedback-success-medium': '#66C10C',
			'feedback-success-light': '#85E30E',
		},
		fontFamily: {
			'base': [ 'Open Sans', 'sans-serif' ],
			'highlight': [ 'Bitter' ],
		},
		lineHeight: {
			'base': '1.3rem',
			'short': '1.4rem',
			'medium': '1.5rem',
			'long': '1.7rem',
			'large': '1.75rem',
		},
		fontSize: {
			'nano': '0.875rem',
			'xs': '1rem',
			's': '1.125rem',
			'sm': '1.5rem',
			'md': '2rem',
			'l': '2.25rem',
			'lg': '2.5rem',
			'xl': '3rem',
			'xxl': '3.75rem',
			'huge': '4.5rem'
		},
		fontWeight: {
			'bold': 600,
			'medium': 500,
			'regular': 400,
		},
		borderRadius: {
		  '4xl': '2rem',
		}
	  }
	},
	variants: {
	  extend: {	},
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
		  };
		  addUtilities(newUtilities)
		}),
	] 
}
