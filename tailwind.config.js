//jshint esversion:6
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*html"],
  theme: {
    extend: {
      fontFamily: {
        "Inter-700": ["Inter-Bold", 'sans-serif'],
        "Inter-600": ["Inter-SemiBold", 'sans-serif'],
        "Inter-500": ["Inter-Medium", 'sans-serif'],
        "Inter-400": ["Inter-Regular", 'sans-serif']
      },
      screens: {
        'xxl': {'min': '1440px'},
        "ms": {'min': '576px', 'max': '1023px'},
        "xsm": {'max': '566px'}
      },
      animation: {
        'animate-bounce': 'bounce 3s infinite',
      },
      backgroundImage: {
        'footer-back': "url('./images/footer_bg.svg')",
      },
      backgroundPosition: {
        "footer-position": 'bottom -28rem left 25rem',
        "footer-bigger": "bottom -25rem left 33rem"
      },
    },
  },
  plugins: [require('daisyui')],
}
