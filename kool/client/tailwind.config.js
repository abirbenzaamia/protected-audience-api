/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F79845",
        primaryLight: "#FFBE86",
        light: "#fffefc",
      },
      backgroundImage: {
        login:
          "url('https://images.pexels.com/photos/2454533/pexels-photo-2454533.jpeg?auto=compress&cs=tinysrgb&w=720&dpr=1')",
        hero: "url('https://images.pexels.com/photos/8978878/pexels-photo-8978878.jpeg')",
      },
    },
  },
  plugins: [],
};
