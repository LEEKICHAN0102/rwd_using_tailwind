import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        maple: ['maple', 'sans-serif'],
      },
      colors: {
        "warrior": "#F06C70",
        "archer" : "#ACF06C",
        "wizard" : "#6CD5F0",
        "bandit" : "#9B2CF5",
        "pirate" : "#8B8FAE",
      }
    },
  },
  plugins: [],
};
export default config;
