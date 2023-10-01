/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "30rem", //480px
      md: "48rem", //768px
      lg: "64rem", //1024px
      xl: "80rem", //1280px
      xxl: "100rem", //1600px
    },
    colors: {
      dark: "#201036",
      light: "#F2F1FF",
      white: "#FFFFFF",
    },
    fontSize: {
      h1: ["4rem", { lineHeight: "normal", fontWeight: "400" }], //64px
      h2: ["2.5rem", { lineHeight: "normal", fontWeight: "400" }], //40px
      h3: ["2.25rem", { lineHeight: "normal", fontWeight: "400" }], //36px
      h4: ["2rem", { lineHeight: "normal" }], //32px
      body: ["1.5rem", { lineHeight: "normal" }], //24px
      bodyS: ["1.125rem", { lineHeight: "normal" }], //18px
      tag: ["1rem", { lineHeight: "normal" }], //16px
      text: ["0.875rem", { lineHeight: "normal" }], //14px
    },
    fontFamily: {
      display: "var(--display-font)",
      body: "var(--body-font)",
    },
    extend: {
      backgroundImage: {
        "bottom-grad":
          "linear-gradient(180deg, #F2F1FF 91.2%, rgba(242, 241, 255, 0.00) 94.5%)",
        "top-grad":
          "linear-gradient(180deg, rgba(242, 241, 255, 0.00) 0%, #F2F1FF 6.25%)",
      },
      boxShadow: {
        card: "2px 2px 4px 1px rgba(32, 16, 54, 0.48)",
      },
    },
  },
  plugins: [],
};
