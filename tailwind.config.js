/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta marki BE HARMONY
        cream: {
          DEFAULT: '#FAF6F1',
          50: '#FDFCFA',
          100: '#FAF6F1',
          200: '#F5EFE8',
        },
        olive: {
          DEFAULT: '#596831',
          50: '#EEF0E4',
          100: '#DDE1C9',
          200: '#9CA561',
          300: '#7D8A4D',
          400: '#596831',
          500: '#4A5829',
          600: '#3B4721',
        },
        charcoal: '#47443F',
        'brand-dark': '#1E1B1B',
        beige: {
          DEFAULT: '#BCB7B4',
          100: '#E8E6E4',
          200: '#D4D0CD',
          300: '#BCB7B4',
          400: '#9A9591',
        },
        terracotta: {
          DEFAULT: '#596831',
          50: '#EEF0E4',
          100: '#DDE1C9',
          200: '#9CA561',
          300: '#7D8A4D',
          400: '#596831',
          500: '#4A5829',
          600: '#3B4721',
          700: '#2D3719',
          800: '#1F2611',
          900: '#111509',
        },
        mint: {
          DEFAULT: '#BCB7B4',
          50: '#FAF6F1',
          100: '#F5EFE8',
          200: '#E8E6E4',
          300: '#D4D0CD',
          400: '#BCB7B4',
          500: '#9CA561',
          600: '#596831',
          700: '#47443F',
          800: '#3B3835',
          900: '#1E1B1B',
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
      boxShadow: {
        terracotta: '0 10px 40px -10px rgba(89, 104, 49, 0.25)',
        'terracotta-lg': '0 20px 50px -12px rgba(89, 104, 49, 0.3)',
        warm: '0 10px 40px -10px rgba(199, 91, 57, 0.2)',
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
          '0%, 100%': { boxShadow: '0 0 20px rgba(89, 104, 49, 0.25)' },
          '50%': { boxShadow: '0 0 40px rgba(89, 104, 49, 0.5)' },
        },
      },
    },
  },
  plugins: [],
}
