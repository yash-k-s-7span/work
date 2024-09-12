/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./app/**/**/*.{js,jsx}",
  ],
  theme: {
    fontFamily: {
      body: ["Plus Jakarta Sans"],
      content: ['"Poppins"', "sans-serif"],
      display: ["Literata", "serif"],
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        xs: "540px",
        sm: "720px",
        md: "900px",
        lg: "1140px",
        xl: "1280px",
      },
    },
    extend: {
      colors: {
        // Red Shade
        primary: {
          200: "#E4E4E4",
          300: "#9D9D9D",
          400: "#6D6D6D",
          500: "#171616",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        rb: "4px 4px 0 0 #171616",
      },
    },
  },
  plugins: [],
};
