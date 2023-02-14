/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*html"],
  theme: {
    extend: {
      fontFamily: {
        markpro: ['Mark Pro', 'sans-serif'],
        markproblack: ['MarkPro Black', 'sans-serif'],
        Manrope: ["Manrope"],
        ManropeLight: ["Manrope Light"]
      },
      screens: {
        'xxl': {'min': '1440px'},
      },
    },
  },
  plugins: [],
}
