import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        border: "hsl(var(--border))",
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        // MGS specific colors
        "mgs-green": "hsl(var(--mgs-green))",
        "mgs-green-dark": "hsl(var(--mgs-green-dark))",
        "mgs-black": "hsl(var(--mgs-black))",
        "mgs-dark-gray": "hsl(var(--mgs-dark-gray))",
        "mgs-gray": "hsl(var(--mgs-gray))",
        "mgs-military-green": "hsl(var(--mgs-military-green))",
        "mgs-red": "hsl(var(--mgs-red))",
        "mgs-white": "hsl(var(--mgs-white))",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        display: ["Metal Gear", "MGS2", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
        roboto: ["Roboto", "sans-serif"],
        garamond: ["EB Garamond", "serif"],
        arialBlack: ["Arial Black", "Arial", "sans-serif"],
        // MGS fonts
        "metal-gear": ["Metal Gear", "sans-serif"],
        "mgs2": ["MGS2", "sans-serif"],
        "mgs2-menu": ["MGS2 Menu", "sans-serif"],
        "tactical": ["Tactical Espionage", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-pattern": "url('/hero-pattern.svg')",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 8s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      boxShadow: {
        glow: "0 0 15px 5px rgba(106, 189, 140, 0.3)",
        "glow-green": "0 0 20px 5px rgba(106, 189, 140, 0.5)",
        "glow-red": "0 0 20px 5px rgba(204, 0, 0, 0.5)",
        "glow-military": "0 0 15px 5px rgba(74, 95, 74, 0.5)",
        "codec": "inset 0 0 0 2px rgba(106, 189, 140, 0.8)",
      },
    },
  },
  plugins: [],
};
export default config;
