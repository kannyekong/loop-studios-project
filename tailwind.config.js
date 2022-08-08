/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1140px",
    },
    extend: {
      colors: {
        strongCyan: "hsl(171,66%,44%)",
        lightBlue: "hsl(233,100%,69%)",
        deepBlue: "#000033",
      },
      backgroundImage: {
        bgImgMobile: "url(/images/image-hero.jpg)",
        bgImgDesktop: "url(/images/image-hero.jpg)",
      },
    },
    fontFamily: {
      sans: ["Josefin Sans", "sans-serif"],
      alata: ["alata", "sans-serif"],
    },
  },
  plugins: [],
};
