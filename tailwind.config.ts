// tailwind.config.js
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white': '#ffffff',
        'green': '#00FF00', 
        'dark': '#000000',
        'indigo': '#4B0082',
        
        primary: "#F64994", 
        secondary: "#070A60", 
        accent: "#C327E9", 
        neutral: {
          100: "#f8f8f8",
          200: "#c9c9c9",
          300: "#454545",
        },
      },
      fontFamily: {
        sans: ["Roboto", "Helvetica", "Arial", "sans-serif"],
      },
      backgroundImage: {
        'gradient-blue': 'linear-gradient(180deg, #64b5f6 0%, #0072f5 100%)',
        'gradient': 'linear-gradient(203deg, rgba(67, 39, 158, 1) 0%, rgba(67, 39, 158, 1) 50%, rgba(192, 90, 255, 1) 100%)',
        'gradient2': 'linear-gradient(250deg, rgba(255, 85, 219, 1) 24%, rgba(52, 108, 255, 1) 100%)',
      },
    },
  },
  darkMode: 'class',
  plugins: [
    require('@nextui-org/react').nextui({
      themes: {
        light: {
          colors: {
            primary: "#0072f5",
          },
        },
        dark: {
          colors: {
            primary: "#0072f5",
          },
        },
      },
    }),
  ],
};
