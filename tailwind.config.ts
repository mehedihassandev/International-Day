import type { Config } from "tailwindcss";

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
                border: "hsl(var(--border))",
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                "bd-green": {
                    DEFAULT: "#006A4E",
                    dark: "#004d39",
                    light: "#008562",
                    soft: "#E8F5E9",
                },
                "bd-red": {
                    DEFAULT: "#CE1126",
                    hover: "#a80d1d",
                    soft: "#FFEBEE",
                },
                "bd-gold": {
                    DEFAULT: "#FFB300",
                    muted: "#FFA000",
                    soft: "#FFF8E1",
                },
                earth: {
                    DEFAULT: "#8D6E63",
                    light: "#D7CCC8",
                    soft: "#F5F5F5",
                },
            },
            boxShadow: {
                soft: "0 4px 20px -2px rgba(0, 0, 0, 0.05)",
                premium: "0 10px 40px -10px rgba(0, 0, 0, 0.08)",
            },
            keyframes: {
                glow: {
                    "0%, 100%": { opacity: "0.8", filter: "brightness(1)" },
                    "50%": { opacity: "1", filter: "brightness(1.5)" },
                },
            },
            animation: {
                glow: "glow 2s ease-in-out infinite",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
} satisfies Config;
