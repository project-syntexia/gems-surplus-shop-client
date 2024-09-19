import { black, contrast, paper, primary, secondary } from './src/styles/colors'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        black: black,
        contrast: contrast,
        paper: paper,
        primary: primary,
        secondary: secondary,
      },
    },
  },
  plugins: [],
};
