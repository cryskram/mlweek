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
        background: "#12111f",
        mBlue: "#8da3fc",
      },
      dropShadow: {
        down: "10px 10px 0 rgba(22, 72, 255, 0.8)",
      },
    },
  },
  plugins: [],
};
export default config;
