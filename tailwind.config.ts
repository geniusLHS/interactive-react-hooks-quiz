import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: "Pretendard-Regular",
        serif: "NotoSerifKR",
        myeongjo: "NanumMyeongjo",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "zinc-150": "rgb(240 240 241)",
        "zinc-750": "rgb(51 51 56)",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateX(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        theme: {
          "0%": { opacity: "0", transform: "scale(0.7) rotate(-90deg)" },
          "100%": { opacity: "1", transform: "scale(1) rotate(0deg)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-in-out",
        theme: "theme 0.4s ease-out",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
export default config;
