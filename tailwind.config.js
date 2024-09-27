/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        "custom": "0 0 2em #8f17ff",
      },
    },
  },
  plugins: [],
};
