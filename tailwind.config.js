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
        "Inter-400": ["Inter-Regular", 'sans-serif'],
        "Inter-300": ["Inter-Regular", 'sans-serif'],
      },
      screens: {
        'xxl': {'min': '1441px'},
        "ms": {'min': '576px', 'max': '1023px'},
        "xsm": {'max': '566px'},
        "xxsm": {'max': '320px'}

      },
      animation: {
        'bounce': 'bounce 5s linear infinite',
        'pulse': 'pulse 5s cubic-bezier(0.4,0,0.6,1) infinite',
        'spin': 'spin 5s linear infinite',
        'globe': 'globe 5s  linear infinite',
        'button': 'button 3s  linear infinite',
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
        'globe': {
          '0%, 100%':{transform: 'TranslateY(-25%)', 'animation-timing-function': 'cubic-bezier(2,2,2,2)'},
          '50%':{transform: 'TranslateY(0)', 'animation-timing-function': 'cubic-bezier(2,2,2,2)'},
        },
        'button': {
          '0%, 100%':{transform: 'TranslateY(-55%)', 'animation-timing-function': 'cubic-bezier(0.9,0.7,0.7,0.9)'},
          '50%':{transform: 'TranslateY(0)', 'animation-timing-function': 'cubic-bezier(0.9,0.7.0.7,0.9)'},
        }
      }
    },
  },
  plugins: [require('daisyui')],
}
