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
        sans: ["var(--font-source-sans)", "sans-serif"],
        serif: ["var(--font-libre-baskerville)", "serif"],
      },
      keyframes: {
        "slide-in-left": {
          "0%": { opacity: "0", transform: "translateX(-24px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "slide-in-right": {
          "0%": { opacity: "0", transform: "translateX(24px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "pop-in": {
          "0%": { transform: "translateY(2px) scale(0.92)" },
          "60%": { transform: "translateY(0) scale(1.06)" },
          "100%": { transform: "translateY(0) scale(1)" },
        },
        "gradient-shift": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        "cta-dash": {
          "0%": { "stroke-dashoffset": "0" },
          "100%": { "stroke-dashoffset": "-100" },
        },
      },
      animation: {
        "slide-in-left": "slide-in-left 450ms cubic-bezier(0.2, 0.9, 0.2, 1) 120ms both",
        "slide-in-right": "slide-in-right 450ms cubic-bezier(0.2, 0.9, 0.2, 1) 180ms both",
        "ring-spin": "spin 3.2s linear infinite",
        "phone-pop": "pop-in 420ms cubic-bezier(0.2, 0.9, 0.2, 1) 220ms both",
        "gradient-shift": "gradient-shift 12s ease-in-out infinite",
        "cta-dash": "cta-dash 2.8s linear infinite",
      },
      colors: {
        primary: {
          50: '#e6f9f8',
          100: '#ccf3f1',
          200: '#99e7e3',
          300: '#66dbd5',
          400: '#43e4a3',
          500: '#2cbfc7',
          600: '#2399a0',
          700: '#1a7379',
          800: '#124d52',
          900: '#09262b',
        },
      },
    },
  },
  plugins: [],
};
export default config;
