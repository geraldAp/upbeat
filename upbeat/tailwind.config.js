/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        primary:{
          '100': '#26D17C',
          '200': '#0A8732',
          '300': '#166B52'
        },
        secondary:{
          '100': '#EAC046',
          '200': '#9A6F09',
        },
        unique:{
          '100': '#0B2434',
          '200': '#5F5959'
        }
            },
        
    },
  
  },
  plugins: [],
};
