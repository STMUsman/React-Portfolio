/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        sora: ["Sora", "sans-serif"],
        space: ["Space Grotesk", "sans-serif"],
        code: ["JetBrains Mono", "monospace"],
        urbanist: ["Urbanist", "sans-serif"],
      },
    },
  },
  plugins: [],
};
