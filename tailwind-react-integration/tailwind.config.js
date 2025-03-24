/** @type {import('tailwindcss').Config} */
export default {
    purge: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Removes unused styles in production
    darkMode: "class", // Can be "media" (auto) or "class" (manual toggle)
    theme: {
      extend: {},
    },
    variants: {
      extend: {},
    },
    plugins: [],
  };
  