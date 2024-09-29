/** @type {import("tailwindcss").Config} */
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
        bColor: "var(--border-color)",
        twitter: '#1DA1F2',
        facebook: '#1877F2',
        linkedin: '#0077B5',
        telegram: '#0088CC',
      },
      fontFamily: {
        naskh: ["var(--font-noto-naskh)"],
        kufi: ["var(--font-noto-kufi)"]
      },
      padding:{
        "section": "100px 0",
        "sm-screen":"0 12px",
        "container-space":"20px"
      }
    }
  },
  plugins: [],
};
