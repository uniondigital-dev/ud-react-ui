module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        primary: '#7443E4',
        'primary-dark': '#40009B',
        'gray-light': '#d3dce6',
        'gray-dark': '#273444',
        gray: '#8492a6',
        black: '#383838',
        white: '#FAFAFA',
        danger: '#FFDB61',
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
};
