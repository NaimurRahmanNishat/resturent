import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary': '#111C30',
        'secondary': '# FFFFFF',
      },
      fontFamily:{
        'primary':["Roboto","sans-serif"],
        'secondary': ["Raleway", "sans-serif"],
        'popins':["Poppins", "sans-serif"],
        'bebas':["Bebas Neue","sans-serif"]
      },
    },
  },
  plugins: [],
} satisfies Config;
