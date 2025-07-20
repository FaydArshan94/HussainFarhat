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
      },
    },
  },
  plugins: [],
}

