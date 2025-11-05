import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#0A142F",
          blue: "#1E40AF",
          light: "#EDF2FF",
          accent: "#F97316"
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-manrope)", "Manrope", "sans-serif"]
      },
      backgroundImage: {
        "radial-gradient": "radial-gradient(circle at top, rgba(30,64,175,0.35), transparent 60%)",
        "grid-overlay": "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
