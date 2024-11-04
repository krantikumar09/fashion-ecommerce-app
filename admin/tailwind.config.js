/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/Navbar.jsx",
    "./src/components/Login.jsx",
  ],
  theme: {
    extend: {
      screens: {
        xs: "489px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      colors: {
        gold: "#E6C744",
        white: "#ffffff",
        black: "#000000",
        gray: "#C2C8DA",
        "navbar-text": "#242323",
        hero: "#F4F6F5",
        yellow: "#FDEC5E",
        footer: "#8E8E8E",
      },
      backgroundColor: {
        gold: "#E6C744",
        white: "#ffffff",
        black: "#000000",
        gray: "#C2C8DA",
        navbar: "#242323",
        yellow: "#FDEC5E",
        footer: "#8E8E8E",
      },
      backgroundImage: {
        bannerImg: "url(./src/assets/banner_img.jpg)",
      },
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require("daisyui"),
  ],
};
