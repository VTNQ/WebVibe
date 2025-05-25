module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // quét tất cả file React
  ],
  theme: {
    extend: {
      fontFamily: {
        basier: ['Basier Square', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      colors:{
        primary:'#0D5DD6',
        redProduct:'#F44336',
        blueProduct:'#002F75',
        orangeProduct:'#F76C06'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
