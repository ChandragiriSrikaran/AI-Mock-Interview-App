module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}', // <- include this for shadcn/ui components
  ],
  theme: {
    extend: {
      colors: {
        primary: 'purple',
        secondary: '#ffffff', // Pure white
        borderGray: '#e5e7eb', // subtle border for white components
      },
    },
  },
  plugins: [],
};
