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
        "xsm": {'max': '566px'},
        "xxsm": {'max': '320px'}

      },
      animation: {
        'animate-bounce': 'bounce 3s infinite',
        'button-bounce': 'bounce 5s infinite',
      },
      backgroundImage: {
        'footer-back': "url('./images/Maxim-mark.svg')",
      },
      backgroundPosition: {
        "footer-position": 'bottom -35rem left -10px',
        "footer-bigger": "bottom -34rem left 27rem",
        "footer-xtra": "bottom -38rem left 7rem",
      },
      keyframes:{
        'slow-bounce': {
          '0%, 100%':{transform: 'translateY(-25%) animation-timing-function: cubic-bezier(0.8,0,1,1)'},
          '50%':{transform: 'translateY(0) animation-timing-function: cubic-bezier(0.8,0,1,1)'}

        }
      }
    },
  },
  plugins: [require('daisyui')],
}
