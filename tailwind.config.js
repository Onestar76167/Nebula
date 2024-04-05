/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,jsx}"],
	theme: {
		extend: {
			strokeWidth: {
				'slim': '0.5',
			  },
			fontSize:{
				'small-font':'24px'
			},
			lineHeight: {
				'small-line-height': '29.05px', // Example custom line height (28px)
			  },
		},
	},
	plugins: [],
};
