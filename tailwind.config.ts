import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
    darkMode: ["class"],
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                body: ["Inter", "sans-serif"],
                headline: ["Inter", "sans-serif"],
            },
            colors: {
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                card: "hsl(var(--card))",
                "card-foreground": "hsl(var(--card-foreground))",
                border: "hsl(var(--border))",
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                "bd-green": {
                    DEFAULT: "#006A4E",
                    dark: "#004D38",
                    deep: "#003828",
                    light: "#008562",
                    emerald: "#059669",
                    soft: "#E8F5E9",
                    subtle: "#F0FDF4",
                },
                "bd-red": {
                    DEFAULT: "#CE1126",
                    hover: "#B30E1F",
                    dark: "#990C1B",
                    light: "#E11D48",
                    soft: "#FFEBEE",
                    subtle: "#FFF1F2",
                },
                "bd-gold": {
                    DEFAULT: "#D97706",
                    hover: "#B45309",
                    light: "#F59E0B",
                    soft: "#FEF3C7",
                    subtle: "#FFFBEB",
                },
                earth: {
                    DEFAULT: "#8D6E63",
                    light: "#D7CCC8",
                    soft: "#F5F5F5",
                },
            },
            boxShadow: {
                xs: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
                soft: "0 4px 20px -2px rgba(0, 0, 0, 0.05)",
                premium: "0 12px 36px -8px rgba(0, 0, 0, 0.08)",
                glass: "0 8px 32px 0 rgba(0, 0, 0, 0.08)",
                "glow-green": "0 0 25px -3px rgba(0, 106, 78, 0.35)",
                "glow-red": "0 0 25px -3px rgba(206, 17, 38, 0.35)",
                "glow-gold": "0 0 25px -3px rgba(217, 119, 6, 0.35)",
            },
            keyframes: {
                glow: {
                    "0%, 100%": { opacity: "0.85", filter: "drop-shadow(0 0 8px rgba(206,17,38,0.5))" },
                    "50%": { opacity: "1", filter: "drop-shadow(0 0 16px rgba(206,17,38,0.8))" },
                },
                float: {
                    "0%, 100%": { transform: "translateY(0px)" },
                    "50%": { transform: "translateY(-6px)" },
                },
            },
            animation: {
                glow: "glow 2.5s ease-in-out infinite",
                float: "float 4s ease-in-out infinite",
            },
        },
    },
    plugins: [tailwindcssAnimate],
} satisfies Config;
