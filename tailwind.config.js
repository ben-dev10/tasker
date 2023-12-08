/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        accent: "#3b82f6" /*blue-500*/,
        background: "hsl(var(--background))",
      },
      textColor: {
        primary: "var(--text-primary)",
        secondary: "var(--text-secondary)",
        "icon-1": "var(--icon-1)",
        "icon-2": "var(--icon-2)",
        // "accent": "var(--accent)"
      },
      stroke: {
        "icon-1": "var(--icon-1)",
        "icon-2": "var(--icon-2)",
      },
      backgroundColor: {
        accent: "var(--accent)",
        primary: "var(--background-primary)",
        secondary: "var(--background-secondary)",
        "surface-1": "var(--surface-1)",
        "surface-2": "var(--surface-2)",
      },
      borderColor: {
        primary: "var(--border-primary)",
        secondary: "var(--border-secondary)",
      },
      fontSize: {
        12: "12px",
        13: "13px",
        14: "14px",
        16: "16px",
        18: "18px",
        20: "20px",
        24: "24px",
      },
    },
  },
  plugins: [],
};
