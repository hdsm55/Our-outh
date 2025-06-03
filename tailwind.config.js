/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
        './node_modules/daisyui/dist/**/*.js',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: '#005A9C',
                secondary: '#F2C94C',
                dark: '#1A1A1A',
                light: '#F7F7F7',
            },
        },
        screens: {
            sm: '640px', md: '768px', lg: '1024px', xl: '1280px',
        },
    },
    plugins: [require('daisyui')],
};
