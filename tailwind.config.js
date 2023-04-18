/** @type {import('tailwindcss').Config} */

import { APP_COLOR_SCHEME } from "./config/color-scheme";

module.exports = {
  content: ["./src/renderer/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      ...APP_COLOR_SCHEME,
    },
  },
  plugins: [],
};
