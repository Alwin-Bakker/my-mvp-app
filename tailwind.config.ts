import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        parchment: '#F5DEB3', // Parchment-like background color
        mysticBrown: '#3b2f2f', // Mystic brown for text and borders
      },
      fontFamily: {
        uncial: ['Uncial Antiqua', 'cursive'],
      },
    },
  },
  plugins: [],
};

export default config;
