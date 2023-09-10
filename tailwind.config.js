const px0_10 = { ...Array.from(Array(11)).map((_, i) => `${i}rem`) };
const px0_100 = { ...Array.from(Array(101)).map((_, i) => `${i}rem`) };
const px0_200 = { ...Array.from(Array(201)).map((_, i) => `${i}rem`) };

module.exports = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      borderWidth: px0_10,
      fontSize: px0_100,
      lineHeight: px0_100,
      minWidth: px0_200,
      minHeight: px0_200,
      spacing: px0_200,
    },
  },
  plugins: [],
};
