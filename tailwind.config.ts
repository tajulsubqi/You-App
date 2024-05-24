import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "primary-gradient":
          "radial-gradient(121.73% 121.49% at 100% -3.39%, #1F4247 0%, #0D1D23 56.18%, #09141A 100%)",
        "button-gradient": "linear-gradient(90deg, #62CDCB 0%, #4599DB 100%)",
        "button-gradient-hover": "linear-gradient(90deg, #3a9c98 0%, #3578b5 100%)",
      },
      colors: {
        dark: "#09141A",
        secondary: "#0E191F",
      },
      // backgroundColor: {
      //   dark: "#09141A",
      // },
    },
  },
  plugins: [],
}
export default config
