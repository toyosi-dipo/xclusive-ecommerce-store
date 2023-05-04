/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "480px",
        "2xl": "1440px",
      },
      fontFamily: {
        inter: ["'Inter'", "sans-serif"],
        poppins: ["'Poppins'", "sans-serif"],
      },
      colors: {
        primary: "#FFF",
        primary1: "#363738",
        secondary: "#F5F5F5",
        secondary1: "#FEFAF1",
        secondary2: "#DB4444",
        text: "#FAFAFA",
        text1: "#7D8184",
        text2: "#000",
        button: "#000",
        button1: "#00FF66",
        button2: "#DB4444",
        hoverButton: "#E07575",
        hoverButton1: "#A0BCE0",
      },
    },
  },
  plugins: [],
};
