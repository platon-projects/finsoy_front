/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'binance-gold': '#F3BA2F',
                'binance-dark': '#1A2525',
            },
        },
    },
    plugins: [],
}