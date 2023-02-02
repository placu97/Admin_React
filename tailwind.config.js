module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      sm: { min: "200px", max: "550px" },
      md: { min: "551px", max: "1050px" },
    },
    extend: {
      colors: {
        blue_A701: "#0a58ff",
        gray_51: "#fafcff",
        bluegray_50: "#eaecf0",
        red_700: "#d03329",
        blue_A700: "#0061ff",
        bluegray_100: "#d6dae2",
        blue_A200: "#4d90ff",
        gray_300: "#e0e0e0",
        green_600: "#349765",
        gray_50: "#f9fbff",
        bluegray_900: "#262b35",
        bluegray_700: "#424c5d",
        black_900_66: "#00000066",
        black_900: "#000000",
        bluegray_400: "#74839d",
        bluegray_300: "#9ea8ba",
        bluegray_200: "#bac1ce",
        white_A700: "#ffffff",
      },
      borderRadius: {
        radius2: "2px",
        radius5: "5px",
        radius6: "6px",
        radius8: "8px",
        radius10: "10px",
        radius28: "28px",
        radius50: "50%",
      },
      backgroundImage: {
        gradient: "linear-gradient(90deg ,#00000066,#00000066)",
      },
      fontFamily: {
        readexpro: "Readex Pro",
        inter: "Inter",
        opensans: "Open Sans",
      },
      borderWidth: { bw3: "3px" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};