/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Add your source files here
    "./public/index.html"
  ],
  theme: {
    extend: {
      screens: {
        mdx: "988px", // Custom breakpoint
         "3xl": "1680px",
         "4xl": "2160px",

      },
    },
  },
  plugins: [],
}

