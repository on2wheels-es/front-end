const plugin = require('tailwindcss/plugin')

module.exports = {
	theme: {
	colors: {
		'color-brand-primary-medium': '#EF8451',
		'color-brand-secundary-medium': '#202020',
		'color-brand-secundary-semilight': '#33393D',
		'color-brand-secundary-light': '#576166',
		'color-brand-secundary-lightest': '#6B7280',
		'color-neutral-dark': '#EEEBE3',
		'color-neutral-medium': '#F5F3EE',
		'color-neutral-light': '#FDF8EE',
		'color-neutral-lightest': '#6B7280',
		'color-neutral-white': '#FFFFFF',
		'color-feedback-error-dark': '#8C0002',
		'color-feedback-error-medium': '#D80003',
		'color-feedback-error-light': '#FF2A2D',
		'color-feedback-success-dark': '#469409',
		'color-feedback-success-medium': '#66C10C',
		'color-feedback-success-light': '#85E30E',
	},
	fontFamily: {
		'font-family-base': [ 'Open Sans', 'sans-serif' ],
		'font-family-highlight': [ 'Bitter' ],
	},
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
	lineHeight: {
		'font-lineheight-base': '1.3rem',
		'font-lineheight-short': '1.4rem',
		'font-lineheight-medium': '1.5rem',
		'font-lineheight-long': '1.7rem',
		'font-lineheight-large': '1.75rem',
	},
	fontSize: {
		'font-size-nano': '0.875rem',
		'font-size-xs': '1rem',
		'font-size-s': '1.125rem',
		'font-size-sm': '1.5rem',
		'font-size-md': '2rem',
		'font-size-l': '2.25rem',
		'font-size-lg': '2.5rem',
		'font-size-xl': '3rem',
		'font-size-xxl': '3.75rem',
		'font-size-huge': '4.5rem'
	},
	fontWeight: {
		'font-weight-bold': 600,
		'font-weight-medium': 500,
		'font-weight-regular': 400,
	},
	  extend: {
		spacing: {
		  '128': '32rem',
		  '144': '36rem',
		},
		borderRadius: {
		  '4xl': '2rem',
		}
	  }
	},
	variants: {
	  extend: {
		borderColor: ['focus-visible'],
		opacity: ['disabled'],
	  }
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
