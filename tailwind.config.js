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
        'telecom-bg': "url('./public/images/Telecom.png')",
        'insurance-bg': "url('./public/images/Insurance.png')",
        'commercial-bg': "url('./public/images/Commercial.png')",
        'financial-bg': "url('./public/images/Financial.png')",
      },
      backgroundPosition: {
        "footer-position": 'bottom -30rem left 33rem'
      },
    },
  },
  plugins: [require('daisyui')],
}
