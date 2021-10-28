module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#458FF6',
        secondary: 'rgba(69, 143, 246, 0.05)',
        gray: '#7D7987',
        lightBlack: '#1F1534',
        linear: { bl: '#67C3F3', tr: '#5A98F2' },
      },
      fontFamily: {
        Mulish: ['Mulish', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
