/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Include all files in the `app` folder
    './pages/**/*.{js,ts,jsx,tsx}', // If you're using the `pages` directory
    './components/**/*.{js,ts,jsx,tsx}',],
  theme: {
    extend: {},
  },
  plugins: [],
}

