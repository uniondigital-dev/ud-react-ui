module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        black: '#383838',
        white: '#FAFAFA',
        gray: {
          DEFAULT: '#8492a6',
          light: '#d3dce6',
          dark: '#273444',
        },
        primary: {
          DEFAULT: '#7443E4',
          light: '#8E67E9',
          lighter: '#E6DFF7',
          dark: '#40009B',
        },
        warning: {
          DEFAULT: '#FFDB61',
          light: '#FFE48A',
          dark: '#FFCE29',
        },
        danger: {
          DEFAULT: '#E73B48',
          light: '#EB5F6A',
          dark: '#D01A27',
        },
        info: {
          DEFAULT: '#5458F7',
          light: '#7B7EF9',
          dark: '#1E24F4',
        },
        success: {
          DEFAULT: '#22c55e',
          light: '#4ade80',
          dark: '#16a34a',
        },
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      backgroundColor: ['disabled'],
      cursor: ['disabled'],
    },
  },
  plugins: [],
  prefix: 'ud-',
  darkMode: 'class',
};
