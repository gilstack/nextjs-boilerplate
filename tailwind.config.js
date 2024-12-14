import forms from '@tailwindcss/forms'
import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
const config = {
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)'
      },
      backgroundImage: {
        buttonGradient:
          'conic-gradient(from 90deg at 50% 50%, #FF9191, #FFB091, #FFC091, #FFD891, #FFF291, #B8E5FF, #91DAFF, #91B5FF, #9191FF, #B591FF, #D791FF, #FF91C7)'
      },
      animation: {
        buttonGradient: 'buttonGradient 5s linear infinite'
      },
      keyframes: {
        buttonGradient: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' }
        }
      }
    }
  },
  content: ['./src/**/*.{js,ts,tsx,mdx}'],
  plugins: [forms, typography]
}

export default config
