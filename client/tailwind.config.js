/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/**/*.{js,jsx}',
    ],
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                'xs': '375px',
                'sm': '640px',
                'md': '768px',
                'lg': '1024px',
                'xl': '1280px',
                '2xl': '1400px'
            }
        },
        extend: {
            colors: {
                border: '#e2e8f0',
                input: '#e2e8f0',
                ring: '#3b82f6',
                background: '#ffffff',
                foreground: '#0f172a',
                primary: {
                    DEFAULT: '#592e83',
                    foreground: '#ffffff',
                },
                brand: {
                    50: '#faf6fe',
                    100: '#f2ebfc',
                    200: '#e7dbf9',
                    300: '#d5bef4',
                    400: '#bb94ec',
                    500: '#a16be1',
                    600: '#8b4cd1',
                    700: '#7539b7',
                    800: '#643396',
                    900: '#361358',
                },
                dark: '#241f19',
            },
            borderRadius: {
                lg: '16px',
                md: '12px',
                sm: '8px',
                xl: '20px',
                '2xl': '24px',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
            },
            animation: {
                fadeIn: 'fadeIn 0.5s ease-in-out',
            }
        }
    },
    plugins: [require('tailwindcss-animate')],
}