module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#458FF6',
        darkPrimary: '#4089ED',
        border: 'rgba(69, 143, 246, 0.05)',
        gray: '#7D7987',
        lightBlack: '#1F1534',
        linear: { bl: '#67C3F3', tr: '#5A98F2' },
      },
      fontFamily: {
        Mulish: ['Mulish', 'sans-serif'],
      },
      borderRadius: {
        article: '24px',
      },
      height: {
        '2px': 3,
      },
      flex: {
        2: '2 1 0%',
      },
      zIndex: {
        '-1': -1,
      },
    },
  },
  variants: {
    extend: {
      translate: ['group-hover'],
    },
  },
  plugins: [],
}
