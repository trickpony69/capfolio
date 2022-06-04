const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    fontFamily: {
      sans: ["Nunito", ...defaultTheme.fontFamily.sans]
    },
    extend: {
      fontFamily: {
        "thunder": ['thunder', 'sans-serif'],
        "thunder-medium": ['thunder-medium', 'sans-serif'],
        "magilio-regular": ['magilio-regular', 'sans-serif'],
      },
      colors: {
        cap: {
          grey: "#CFCCC9",
          darkGrey: "#707070",
          acid: "#CEF432",
          blue: "#28536B",
        }
      },
      width: {
        "26": "6.5rem"
      },
      height: {
        "26": "6.5rem",
        "36": "9rem"
      },
    },
  }
}
