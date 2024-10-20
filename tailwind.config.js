/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    
  ],
  theme: {
    extend: {
      colors:{
        'nav-color':'#405D72',
        'div-color':'#FEFFD2',
      },
      fontFamily: {
        moderustic: ['"Moderustic"', 'sans-serif'],
        dancing: ['"Dancing Script"', 'cursive'],
      },
      backgroundImage: {
        'custom-bg': "url('/public/bloodimage.jpg')", // Make sure this path is correct
        'body-image':"url('https://t3.ftcdn.net/jpg/05/92/22/18/360_F_592221846_7FKq0dvmqk6UAp5OciKaNxLB19SH0xV9.jpg')",
      },
      backgroundSize: {
        'custom-size': '100% auto', // Example size, adjust as needed
      },
    },
  },
  plugins: [],
}

