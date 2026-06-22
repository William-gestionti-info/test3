/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#fdfcf8',
          100: '#faf7f0',
          200: '#f5ede0',
          300: '#ede1cc',
        },
        sage: {
          50: '#f4f7f4',
          100: '#e6ede6',
          200: '#c8d9c8',
          300: '#9db99d',
          400: '#6d946d',
          500: '#4a7a4a',
          600: '#3a6b3a',
        },
        navy: {
          50: '#f0f4f8',
          100: '#d9e5f0',
          200: '#b0cce0',
          300: '#7aadc8',
          400: '#4a8ab0',
          500: '#2d6a94',
          600: '#1e4e72',
          700: '#163a57',
          800: '#0f2940',
          900: '#091a2a',
        },
        gold: {
          100: '#fef9e7',
          200: '#fdf0c2',
          300: '#fbe08a',
          400: '#f8cb4d',
          500: '#e8a820',
          600: '#c47f0a',
        },
        warm: {
          gray: '#4a4540',
          light: '#8c8480',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        'soft': '0 2px 20px rgba(0,0,0,0.06)',
        'medium': '0 4px 40px rgba(0,0,0,0.10)',
        'strong': '0 8px 60px rgba(0,0,0,0.15)',
        'glow': '0 0 40px rgba(45,106,148,0.15)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-hero': 'linear-gradient(135deg, #0f2940 0%, #163a57 50%, #1e4e72 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4,0,0.6,1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        }
      }
    },
  },
  plugins: [],
}
