import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "header-background": "url('../../public/header-bg.svg')",
        "dot-background": "url('../../public/dots.svg')",
        "meIlustration-background": "url('../../public/me-ilustration.svg')",
      },
      colors: {
        primary: {
          1: "#623CEA",
          2: "#311E75",
        },
        secundary: {
          1: "#50CF9A",
          2: "#E5F8F0",
        },
        tertiary: {
          1: "#FF577F",
          2: "#FF577F", // COLOCAR UM ROSA MAIS CLARO
        },
        quarternary: {
          1: "#506CCF",
          2: "#E5E9F8",
        },
        grey: {
          0: "#0A0A0B",
          1: "#121214",
          2: "#868E96",
          3: "#E9ECEF",
          4: "#F8F9FA",
          5: "#F8F9FA",
        },
        social: {
          instagram: "#CF50AC",
          facebook: "#506CCF",
          linkedin: "#0E76A8",
          whatsapp: "#50C571",
        },
        brand: {
          1: "#623CEA",
          2: "#311E75",
        },
      },
      fontFamily: {
        titles: "Outfit, sans-serif;",
        texts: "Inter, sans-serif",
      },
      fontSize: {
        title1: "2.75rem",
        title2: "1.75rem",
        title3: "1.50rem",
        title4: "1.25rem",
        text1: "1rem",
        text2: "0.875rem",
        title1Mobile: "1.75rem",
        title2Mobile: "1.50rem",
      },
      screens: {
        sm: "481px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1920px",
      },
      backgroundPosition: {
        "right-center-2": "right -40% center",
        "right-center-3": "right -10% center",
        "right-center-4": "right 0% center",
      },
      keyframes: {
        scaleUp: {
          "0%": { transform: "translateY(15%)" },
          "100%": { transform: "translateY(-50%)" },
        },
      },
      animation: {
        scaleUp: "scaleUp 200ms",
      },
    },
  },
  plugins: [],
};
export default config;
