module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {

    extend: {
      colors:{
        'primary-color':'#34495E',
        'secondary-color':'#3498DB',
        'text-color':'#34495E',
      },
      spacing:{
        '128': '32rem',
        '144': '36rem',
      },
      backgroundImage: {
        'footer-texture': "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [],
}
