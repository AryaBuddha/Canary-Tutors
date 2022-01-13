module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {

      colors: {
        'canary-blue': '#06327D',
        'secondary-blue': '#1662f0',
        'canary-black': '#101010',
        'canary-yellow': '#FFD034',
        'canary-orange': '#FF661F',
      },
      screens: {
        '2xl': "1550px",
      },
      fontSize: {
        'smmd': '0.9rem',
      }
    }
  },
  plugins: [],
}