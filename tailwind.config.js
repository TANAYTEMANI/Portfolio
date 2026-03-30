/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FAF9F6',
        sand: '#F0EDE6',
        bone: '#E5E1D8',
        forest: {
          DEFAULT: '#2D5F3B',
          deep: '#1E4529',
        },
        mint: '#6EE7A0',
        charcoal: '#1C1C1C',
        muted: '#6B6B6B',
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      borderRadius: {
        card: '12px',
      },
      animation: {
        'marquee-left': 'marquee-left linear infinite',
        'marquee-right': 'marquee-right linear infinite',
      },
      keyframes: {
        'marquee-left': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-33.333%)' },
        },
        'marquee-right': {
          from: { transform: 'translateX(-33.333%)' },
          to: { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
