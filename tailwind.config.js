module.exports = {
  purge: ["./src/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      minWidth: {
        12: "12rem",
        24: "24rem",
      },
      gridTemplateColumns: {
        16: "repeat(2, minmax(16rem, 50%))",
        17: "repeat(4, minmax(18rem, 25%))",
        18: "repeat(5, minmax(20rem, 20%))",
      },
      height: {
        100: "28rem",
        104: "32rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
