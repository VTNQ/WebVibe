module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // quét tất cả file React
  ],
  theme: {
    extend: {
      fontFamily: {
        basier: ['Basier Square', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
