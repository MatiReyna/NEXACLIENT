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
                secondary: {
                    DEFAULT: '#f1f5f9',
                    foreground: '#1e293b',
                },
                destructive: {
                    DEFAULT: '#ef4444',
                    foreground: '#f8fafc',
                },
                muted: {
                    DEFAULT: '#f1f5f9',
                    foreground: '#64748b',
                },
                accent: {
                    DEFAULT: '#f1f5f9',
                    foreground: '#1e293b',
                },
                popover: {
                    DEFAULT: '#ffffff',
                    foreground: '#0f172a',
                },
                card: {
                    DEFAULT: '#ffffff',
                    foreground: '#0f172a',
                }
            },
            borderRadius: {
                lg: '16px',
                md: '12px',
                sm: '8px',
                xl: '20px',
                '2xl': '24px',
            },
        }
    },
    plugins: [require('tailwindcss-animate')],
}