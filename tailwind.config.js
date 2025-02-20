/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./shared/**/*.{js,jsx,ts,tsx}",
    "./containers/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        "brand-orange": {
          400: "#FA8A34",
        },
        "brand-gray": {
          200: "#EBEFF5",
          300: "#CED5E0",
          400: "#C1C4CB",
          500: "#7C8594",
          550: "#858C94",
          600: "#606773",
          700: "#636363",
          900: "#414141",
        },
        "brand-green": {
          100: "#F2FAF7",
          200: "#E9F7F2",
          400: "#009E81",
          500: "#00A385",
          800: "#288ba1",
        },
        "brand-black": "#06070A",
        danger: "#EE6363",
      },
    },
  },
  plugins: [],
};
