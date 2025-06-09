import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#f0f7ff',
                    100: '#e0eeff',
                    200: '#bbd6fe',
                    300: '#8ab6fe',
                    400: '#5a8efa',
                    500: '#3b6ff5',
                    600: '#2d51e9',
                    700: '#2642d3',
                    800: '#2437aa',
                    900: '#223285',
                },
                secondary: {
                    50: '#f4f7fb',
                    100: '#e9eef7',
                    200: '#cedced',
                    300: '#a3bfdd',
                    400: '#729bc8',
                    500: '#517db4',
                    600: '#3f629a',
                    700: '#35507d',
                    800: '#2f4468',
                    900: '#1e293b',
                },
                accent: {
                    50: '#eefbf3',
                    100: '#d6f5e1',
                    200: '#b0eac8',
                    300: '#7dd8aa',
                    400: '#47be86',
                    500: '#22c55e',
                    600: '#1a9d4b',
                    700: '#197b3f',
                    800: '#1a6136',
                    900: '#164f2e',
                },
                gray: {
                    50: '#f8fafc',
                    100: '#f1f5f9',
                    200: '#e2e8f0',
                    300: '#cbd5e1',
                    400: '#94a3b8',
                    500: '#64748b',
                    600: '#475569',
                    700: '#334155',
                    800: '#1e293b',
                    900: '#0f172a',
                }
            },
            fontFamily: {
                sans: ['var(--font-inter)'],
                mono: ['var(--font-roboto-mono)'],
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-in-out',
                'slide-up': 'slideUp 0.5s ease-out',
                'gradient': 'gradient 15s ease infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                gradient: {
                    '0%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                    '100%': { backgroundPosition: '0% 50%' },
                },
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
        },
    },
    plugins: [],
}

export default config 