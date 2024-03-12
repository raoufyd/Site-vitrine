/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      sm: "640px",
      xlm: { max: "1200px" },
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    extend: {
      colors: {
        primary: "#131424",
        secondary: "#393A47",
        accent: "#F13024",
      },
      backgroundImage: {
        explosion: 'url("/bg-explosion.png")',
        circles: 'url("/bg-circles.png")',
        circleStar: 'url("/circle-star.svg")',
        site: 'url("/site-bg.svg")',
      },
      keyframes: {
        openlabel: {
          // initial position
          "0%": { right: "-35px", opacity: 0 },
          // final position
          "100%": { right: "0px", opacity: 1 },
        },
        openlabel2: {
          // initial position
          "0%": { bottom: "10px", opacity: 0 },
          // final position
          "100%": { bottom: "50px", opacity: 1 },
        },
      },
      animation: {
        "spin-slow": "spin 6s linear infinite",
        openlabel: "openlabel 0.4s ease-in",
        openlabel2: "openlabel2 0.4s ease-in",
      },
      fontFamily: {
        poppins: [`var(--font-poppins)`, "sans-serif"],
        sora: [`var(--font-sora)`, "sans-serif"],
      },
    },
  },
  container: {
    padding: {
      DEFAULT: "15px",
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
