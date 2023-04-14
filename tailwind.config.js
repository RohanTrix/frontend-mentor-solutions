/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
      colors: {
        "light-cyan": "#cee3e9",
        "neon-green": "#52ffa8",
        "grayish-blue": "#4e5d73",
        "dark-grayish-blue": "#323a49",
        "dark-blue": "#1f2632",
      },
      fontSize: {
        quote: "28px",
      },
    },
  },
  plugins: [],
};
