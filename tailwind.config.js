/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
    './node_modules/@radjaiqbalsh/fd-pretest-component-library/src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '24px',
      },
    },
    colors: {
      red: {
        500: '#dc294f',
        400: '#e97890',
        300: '#ef9fb0',
        200: '#f6c7d1',
        100: '#fceef1',
      },
      black: {
        500: '#000000',
        400: '#575757',
        300: '#828282',
        200: '#adadad',
        100: '#d9d9d9',
      },
      white: {
        DEFAULT: '#FFFFFF',
      },
      gray: {
        100: '#CFD8DC',
        50: '#ECEFF1',
      },
    },
  },
  plugins: [],
};
