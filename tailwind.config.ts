import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./sanity/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "475px",
      },
      colors: {
        primary: {
          "100": "#FFFFFF", // White
          DEFAULT: "#000000", // Black
        },
        secondary: "#000000", // Black
        black: {
          "100": "#333333", // Dark Gray
          "200": "#141413", // Very Dark Gray
          "300": "#7D8087", // Medium Gray
          DEFAULT: "#000000", // Black
        },
        white: {
          "100": "#F7F7F7", // Light Gray
          DEFAULT: "#FFFFFF", // White
        },
      },
      fontFamily: {
        "work-sans": ["var(--font-work-sans)"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
	  boxShadow: {
		100: "2px 2px 0 0 rgba(0,0,0,0.9)",
		200: "4px 4px 0 0 rgba(0,0,0,0.9)",
		300: "6px 6px 0 0 rgba(0,0,0,0.9)",
		'card': "2px 2px 0 0 rgba(0,0,0,0.9), 4px 4px 12px rgba(0,0,0,0.1)",
		'card-hover': "4px 4px 0 0 rgba(0,0,0,0.9), 6px 6px 16px rgba(0,0,0,0.1)",
		'container-hover': "0 4px 24px rgba(0,0,0,0.1)",
		'form-hover': "4px 4px 0 0 rgba(0,0,0,0.9), 0 2px 24px rgba(0,0,0,0.05)",
		'inset-card-hover': [
		'rgba(0, 0, 0, 0.1) 0px 20px 40px -8px inset',
		'rgba(0, 0, 0, 0.15) 0px 12px 24px -12px inset',
		'0 0 0 1px rgba(0,0,0,0.3)'
		],
	  },
      animation: {
        'card-float': 'card-float 3s ease-in-out infinite',
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};

export default config;