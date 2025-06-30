// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "todo-bg": "url('/src/assets/background.jpg')",
      },
    },
  },
  plugins: [],
};
