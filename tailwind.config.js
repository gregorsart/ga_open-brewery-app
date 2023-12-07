/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        primaryColor: "#FF9D00",
        secondaryColor: "#8A6D61",
        almostBlackColor: "#242422",
        softBackgroundColor: "#F3F3F3",
        mediumBackgroundColor: "#D5D5D5",
      },
      fontFamily: {
        serif: ["var(--font-bitter)"],
        sans: ["var(--font-work)"],
      },
    },
  },
  plugins: [],
};
