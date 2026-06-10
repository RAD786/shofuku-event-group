import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#f8f4eb",
        champagne: "#dcc58f",
        bronze: "#9a724a",
        emerald: "#153f35",
        celestial: "#8faac9",
        ink: "#161514",
      },
      boxShadow: {
        luxury: "0 24px 80px rgba(22, 21, 20, 0.12)",
        "luxury-dark": "0 24px 80px rgba(0, 0, 0, 0.45)",
      },
      backgroundImage: {
        "soft-radial":
          "radial-gradient(circle at top left, rgba(220,197,143,0.26), transparent 34%), radial-gradient(circle at bottom right, rgba(143,170,201,0.16), transparent 28%)",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
