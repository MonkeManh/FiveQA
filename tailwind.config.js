/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      keyframes: {
        blink: {
          '0%, 100%': { backgroundColor: 'transparent' },
          '50%': { backgroundColor: '#ef4444' },
        },
      },
      animation: {
        'blink-red': 'blink 1s infinite',
      },
    },
  },
  plugins: [],
}

