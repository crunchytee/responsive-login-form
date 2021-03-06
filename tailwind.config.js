module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      primary: "white",
      button: "#00B2CA",
      buttonHover: "#0090a3",
    }),
    extend: {
      textColor: {
        button: "#00B2CA",
      },
      width: {
        "fit-content": "fit-content",
        "100%": "100%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
