/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      darkel: "var(--DM-el)",
      darkbg: "var(--DM-bg)",
      lighttext: "var(--LM-text)",
      lightinput: "var(--LM-input)",
      lightbg: "var(--LM-bg)",
      darktext: "var(--DM-text)",
      lightel: "var(--LM-el)",
    },
  },
  plugins: [],
};
