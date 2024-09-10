import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			animation: {
				'blur-out-expand-fwd':
					'blur-out-expand-fwd 1s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both',
			},
			keyframes: {
				'blur-out-expand-fwd': {
					'0%': {
						transform: 'translateZ(0)',
						filter: 'blur(.01)',
					},
					to: {
						'letter-spacing': '1em',
						transform: 'translateZ(300px)',
						filter: 'blur(12px) opacity(0%)',
					},
				},
			},
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
			},
		},
		fontFamily: {
			DotGothic16: ['var(--font-DotGothic16)'],
		},
	},
	plugins: [],
};

export default config;
