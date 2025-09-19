/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: "#f9fafb",
        card: "#ffffff",
        accent: "#3b82f6",
      },
    },
  },
  plugins: [],
};
