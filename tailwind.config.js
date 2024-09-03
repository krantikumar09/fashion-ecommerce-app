/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/App.jsx",
    "./src/pages/About.jsx",
    "./src/pages/Cart.jsx",
    "./src/pages/Collection.jsx",
    "./src/pages/Contact.jsx",
    "./src/pages/Home.jsx",
    "./src/pages/Login.jsx",
    "./src/pages/Orders.jsx",
    "./src/pages/PlaceOrder.jsx",
    "./src/pages/Product.jsx",
    "./src/components/Navbar.jsx",
    "./src/components/Hero.jsx"
  ],
  theme: {
    extend: {
      screens: {
        'xs': '489px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px'
      },
      colors: {
        "gold": "#E6C744",
        "white": "#ffffff",
        "black": "#000000",
        "gray": "#C2C8DA",
        "navbar-text": "#242323",
        "hero": '#F4F6F5'
      },
      backgroundColor: {
        "gold": "#E6C744",
        "white": "#ffffff",
        "black": "#000000",
        "gray": "#C2C8DA",
        "navbar": "#242323"
      }
    },
  },
  plugins: [require('daisyui')],
}

