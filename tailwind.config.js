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
        forest: {
          950: '#071812',
          900: '#0b2a20', // Primary deep forest green
          850: '#0e3428',
          800: '#144233',
          700: '#1c5a46',
          600: '#26775d',
        },
        cream: {
          50: '#fcfaf6',
          100: '#f8f5ee',
          200: '#f3efe6', // Primary cream background
          300: '#e5dfd2',
          400: '#cfc4b0',
        },
        emeraldGreen: {
          400: '#38b86e',
          500: '#2f9e5f', // Primary green accent button
          600: '#25834e',
          700: '#1b643b',
        },
        darkTxt: '#15241c',
        mutedDark: '#4a5b51',
        mutedLight: '#94a99d',
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'Inter', 'sans-serif'],
        arabic: ['var(--font-arabic)', 'Noto Kufi Arabic', 'Cairo', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        'card': '0 8px 30px rgba(0, 0, 0, 0.04)',
        'card-hover': '0 14px 40px rgba(11, 42, 32, 0.08)',
        'glow': '0 0 25px rgba(47, 158, 95, 0.35)',
      },
    },
  },
  plugins: [],
};
