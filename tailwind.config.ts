import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        papaya: '#FF8000',
        'papaya-glow': '#FF9933',
        'mclaren-blue': '#0055FF',
        carbon: '#0a0a0a',
        'carbon-light': '#141414',
        'carbon-lighter': '#1a1a1a',
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        rajdhani: ['Rajdhani', 'sans-serif'],
      },
      animation: {
        'gradient-shift': 'gradient-shift 3s ease infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
      },
      keyframes: {
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% center' },
          '50%': { backgroundPosition: '100% center' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255, 128, 0, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(255, 128, 0, 0.5)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
