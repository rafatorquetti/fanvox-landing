/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "app-gradient":
          "radial-gradient(1200px 800px at 80% 20%, rgba(88,28,135,0.35), transparent 60%), radial-gradient(1000px 700px at 10% 10%, rgba(30,58,138,0.35), transparent 60%), linear-gradient(180deg, #02030a 0%, #050617 40%, #090a24 70%, #02030a 100%)",
      },
    },
  },
  plugins: [],
};
