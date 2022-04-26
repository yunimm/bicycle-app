const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter var"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          '100': '#DFE4CE',
          '200': '#CBD3B0',
          '300': '#A4B375',
          '400': '#738047',
          '500': '#474F2C',
          '600': '#292E19',
        },
        accent: {
          '100': '#FAF0E5',
          '200': '#F5DFC6',
          '300': '#EABD8A',
          '400': '#DE994A',
          '500': '#C67A24',
          '600': '#A3651E',
        },
        alert: {
          '100': '#F7D4DD',
          '200': '#F1B2C1',
          '300': '#F27594',
          '400': '#E75578',
          '500': '#BC3253',
          '600': '#8C3046',
        },
        grey: {
          '100': '#FFFFFF',
          '200': '#EEEEEE',
          '300': '#C5C5C5',
          '400': '#9A9A9A',
          '500': '#767676',
          '600': '#464646',
        },
      },
    },
    screens: {
      'xs': '375px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },

  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
