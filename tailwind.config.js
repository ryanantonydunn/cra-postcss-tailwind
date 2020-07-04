module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.jsx", "./src/**/*.js"],
  theme: {
    fontFamily: {
      sans: ["Roboto"],
    },
    extend: {
      screens: {
        xs: { max: "400px" },
      },
    },
  },
};
