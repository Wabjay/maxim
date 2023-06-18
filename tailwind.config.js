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
      },
      animation: {
        'animate-bounce': 'bounce 3s infinite',
      },
      backgroundImage: {
        'footer-bg': "url('./public/images/footer_bg.png')",
        'telecom-bg': "url('./public/images/Telecom.png')",
        'insurance-bg': "url('./public/images/Insurance.png')",
        'commercial-bg': "url('./public/images/Commercial.png')",
        'financial-bg': "url('./public/images/Financial.png')",
      },
    },
  },
  plugins: [require('daisyui')],
}
