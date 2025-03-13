import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        "green-accent": {
          DEFAULT: "hsl(var(--green-accent))", // finished
        },
        "blue-accent": {
          DEFAULT: "hsl(var(--blue-accent))", // releasing
        },
        "yellow-accent": {
          DEFAULT: "hsl(var(--yellow-accent))", // not yet released
        },
        "red-accent": {
          DEFAULT: "hsl(var(--red-accent))", // cancelled
        },
        "purple-accent": {
          DEFAULT: "hsl(var(--purple-accent))", // hiatus
        },
        "violet-accent": {
          DEFAULT: "hsl(var(--violet-accent))", // current
        },
        "cyan-accent": {
          DEFAULT: "hsl(var(--cyan-accent))", // planning
        },
        "light-green-accent": {
          DEFAULT: "hsl(var(--light-green-accent))", // completed
        },
        "pink-accent": {
          DEFAULT: "hsl(var(--pink-accent))", // dropped
        },
        "salmon-accent": {
          DEFAULT: "hsl(var(--salmon-accent))", // paused
        },
        "magenta-accent": {
          DEFAULT: "hsl(var(--magenta-accent))", // repeating
        },
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
