/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6E734E",
        primaryLight: "#B2B697FF",
        light: "#fffefc",
        bgfooter: "#C9CDABFF",
      },
      backgroundImage: {
        login:
          "url('https://i.pinimg.com/736x/95/24/3f/95243f7068b90b213d532d9d2f22552a.jpg')",
        hero: "url('https://i.pinimg.com/736x/37/95/98/37959802c6383e9e6e938efc87c36b44.jpg')",
      },
    },
  },
  plugins: [],
};
