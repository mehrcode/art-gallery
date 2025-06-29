/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    safelist: [
        "keen-slider",
        "keen-slider__slide",
    ],
    theme: {
        extend: {
            fontFamily: {
                vazir: ["Vazirmatn", "sans-serif"],
            },
            colors: {
                background: "#0d0d0d",
                foreground: "#eeeeee",
                accent: "#be94f5",
            },
            spacing: {
                '128': '32rem',
            },
            screens: {
                '3xl': '1600px',
            },
        },
    },
    darkMode: 'class',
    plugins: [],
};
