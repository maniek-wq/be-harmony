/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        terracotta: {
          DEFAULT: '#A4532E',
          50: '#F5E6DF',
          100: '#EEDBD1',
          200: '#DFC0AE',
          300: '#CFA48B',
          400: '#C08968',
          500: '#A4532E',
          600: '#8B4727',
          700: '#723A20',
          800: '#592E19',
          900: '#402112',
        },
        mint: {
          DEFAULT: '#9fd8cb',
          50: '#e6f4ea',
          100: '#d4ede5',
          200: '#bfe5da',
          300: '#9fd8cb',
          400: '#7fcbbb',
          500: '#5fbdab',
          600: '#4aab99',
          700: '#3d8f80',
          800: '#317367',
          900: '#24574e',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'fade-in-slow': 'fadeIn 1.2s ease-out forwards',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'spin-slow': 'spin 3s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(159, 216, 203, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(159, 216, 203, 0.6)' },
        },
      },
    },
  },
  plugins: [],
}
