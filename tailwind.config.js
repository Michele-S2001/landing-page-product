/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '475px',
      ...defaultTheme.screens
    },
    extend: {
      container: {
        center: true,
        padding: "1rem",
        screens: {
          sm: '100%',  
          md: '100%',  
          lg: '1100px',  
          xl: '1300px',  
        },
      },
      colors: {
        'main-blue': '#2E45CC'
      },
      translate: {
        '140': '140%',
      }
    },
  },
  plugins: [],
}

