/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        style1: "var(--text-color-1)",
        style2: "var(--text-color-2)",
        bColor: "var(--border-color)"
      },
      fontFamily: {
        naskh: ['var(--font-noto-naskh)'],
        kufi: ['var(--font-noto-kufi)']
      },
      padding:{
        'section': "100px 0"
      }
    }
  },
  plugins: [],
};
