/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#06b6d4',
        secondary: '#64748b',
        black: '#0f172a',
      },
      screens: {
        '2xl': '1320px'
      },
    },
  },
  plugins: [],
}
