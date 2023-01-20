// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: "#172B85",
        grey: "#D9D9D9",
        red: {
          800: "#FF5E00",
          900: "#ED0006"
        },
        orange: "#F9A000",
        gray: {
          50: "#F9FAFB",
          100: "#F2F4F7",
          200: "#EAECF0",
          300: "#D0D5DD",
          500: "#667085",
          600: "#475467",
          700: "#344054",
          800: "#1D2939",
          900: "#101828"
        },
        primary: {
          50: "#F9F5FF",
          300: "#D6BBFB",
          500: "#9E77ED",
          600: "#7F56D9",
          700: "#6941C6",
          800: "#53389E",
        },
        success: {
          50: "#ECFDF3",
          500: "#12B76A",
          700: "#027A48",

        }
      },
      boxShadow: {
        input: "0px 1px 2px rgba(16, 24, 40, 0.05)",
        focusedInput: "0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #F4EBFF;",
        table: "0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06)"
      }
    },
  },
  plugins: [],
}
