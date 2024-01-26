/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html',
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js"],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        green: '#22c55e',
        dark: '#0f172a',
        secon: '#64748b',
      }, animation: {
        'slideRigth': 'slideRight 1s ease forwards',
        'slideLeft': 'slideLeft 1s ease forwards',
        'slideBottom': 'slideBottom 1s ease forwards',
        'slideTop': 'slideTop 1s ease forwards',
        'opacity': 'opacity 1s ease forwards',
      },
      keyframes: {
        slideRight: {
          '0%': {
            transform: 'translateX(-100px)'
            , opacity: '0'
          },
          '100%': {
            transform: 'translateX(0px)'
            , opacity: '1'
          },
        },
        slideLeft: {
          '0%': {
            transform: 'translateX(100px)'
            , opacity: '0'
          },
          '100%': {
            transform: 'translateX(0px)'
            , opacity: '1'
          },
        },
        slideBottom: {
          '0%': {
            transform: 'translateY(-100px)'
            , opacity: '0'
          },
          '100%': {
            transform: 'translateY(0px)'
            , opacity: '1'
          },
        },
        slideTop: {
          '0%': {
            transform: 'translateY(100px)'
            , opacity: '0'
          },
          '100%': {
            transform: 'translateY(0px)'
            , opacity: '1'
          },
        },
        opacity: {
          '0%': {
            opacity: '0'
          },
          '100%': {
            opacity: '1'
          },
        },
      },

      screens: {
        '2xl': '1320px',
      }

    },
  },
  plugins: [
    //  require('@tailwindcss/forms'),      
    //  require('preline/plugin'),

    require("tw-elements/dist/plugin.cjs")
  ],
  darkMode: "class"

}