/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "cool-background": "url('/public/images/cool_background.png')",
      },
    },
  },
  plugins: [],
};
