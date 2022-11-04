/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#0e7490',
        secondary: '#64748b',
        black: '#0f172a',
        bgDark: '#282C34',
        textDark: '#cbd5e1',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}
