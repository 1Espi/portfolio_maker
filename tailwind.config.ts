import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        menta: "#add0cc",
        blanquito: "#f2edf2",
        ClaroMorado: "#512a6d",
        OscuMorado: "#2c163d",
        negro: "#09010c",
      },
      fontFamily: {
        ubuntu: ["ubuntu", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
