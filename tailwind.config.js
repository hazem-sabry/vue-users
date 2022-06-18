module.exports = {
  purge: ["./src/components/*.vue", "./src/pages/*.vue"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2c3e50",
        },
        tertiary: {
          DEFAULT: "#95a5a6",
        },
        danger: {
          DEFAULT: "#e74c3c",
        },
      },
      spacing: {
        "2px": "2px",
        xs: "15px",
        sm: "20px",
        md: "25px",
      },
    },
  },
};
