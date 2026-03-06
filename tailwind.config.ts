import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: "#FAFAFA",
        text: "#0B0B0B",
        accent: "#FF5055",
        border: "#171717",
        button: {
          bg: "transparent",
          text: "#0B0B0B",
          border: "#FF5055",
          hover: "#FFE9EA",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "monospace"],
        signature: ["var(--font-signature)", "serif"],
      },
      boxShadow: {
        card: "0 2px 0 rgba(0,0,0,0.08)",
      },
    },
  },
};

export default config;
