import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        cyan: {
          500: "#06b6d4",
          600: "#0891b2",
          950: "#083344",
        },
      },
      animation: {
        // Animación de entrada suave tipo iPhone
        "reveal": "reveal 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
        // Pulso suave para elementos activos (Dopamina)
        "pulse-glow": "pulse-glow 2s infinite ease-in-out",
      },
      keyframes: {
        reveal: {
          "0%": { opacity: "0", transform: "translateY(20px) scale(0.98)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.02)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "premium-dark": "linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(0,0,0,0) 100%)",
      },
      borderRadius: {
        "3xl": "24px",
        "4xl": "32px",
        "5xl": "40px",
      },
    },
  },
  plugins: [],
};

export default config;