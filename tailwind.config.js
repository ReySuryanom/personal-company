module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './utils/constant.js',
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        hero: "url('https://universalcoco.com/static/media/jumbotron.e3b630c6.png')",
      }),
      colors: {
        dark: '#333333',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
