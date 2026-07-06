/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        emerald: {
          primary: '#19D3A2',
          secondary: '#0FAE82',
          dark: '#0B7A5E',
        },
        gold: {
          primary: '#D4AF37',
          light: '#E5C158',
          dark: '#B8941D',
        },
        dark: {
          bg: '#050505',
          card: '#101010',
          border: '#202020',
          hover: '#1A1A1A',
        },
        positive: '#19D3A2',
        negative: '#FF5A5A',
        text: {
          primary: '#FFFFFF',
          secondary: '#A0A0A0',
          muted: '#6B7280',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'emerald-glow': '0 0 20px rgba(25, 211, 162, 0.3)',
        'emerald-glow-lg': '0 0 40px rgba(25, 211, 162, 0.4)',
        'gold-glow': '0 0 20px rgba(212, 175, 55, 0.3)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
    },
  },
  plugins: [],
};
