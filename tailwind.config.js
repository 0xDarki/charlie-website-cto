/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'charlie-yellow': '#F4C430', // Classic Charlie Brown shirt yellow
        'charlie-black': '#000000',
        'charlie-red': '#E53935',
        'charlie-blue': '#1E88E5',
      },
      fontFamily: {
        'comic': ['"Baloo 2"', 'cursive', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
