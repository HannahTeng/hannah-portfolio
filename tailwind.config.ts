import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ivory:       '#FAF7F2',
        parchment:   '#F3EDE4',
        linen:       '#EDE5D8',
        sand:        '#D4C5AD',
        honey:       '#C9A96E',
        amber:       '#B8934A',
        'deep-amber':'#9A7A3C',
        ink:         '#1A1A1A',
        charcoal:    '#3D3D3D',
        'warm-gray': '#8A8278',
        'light-gray':'#B8B0A4',
        blush:       '#E8D5C4',
        sage:        '#C2CCBA',
        mist:        '#D8DDD4',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Didot', 'Georgia', 'serif'],
        body:    ['Lato', 'Georgia', 'serif'],
        ui:      ['system-ui', 'sans-serif'],
        mono:    ['"Space Mono"', '"SF Mono"', 'Consolas', 'monospace'],
      },
      boxShadow: {
        sm:   '0 1px 2px rgba(26,26,26,0.04)',
        md:   '0 4px 12px rgba(26,26,26,0.06)',
        lg:   '0 8px 32px rgba(26,26,26,0.08)',
        glow: '0 0 24px rgba(201,169,110,0.20)',
      },
      animation: {
        'fade-up': 'fadeUp 0.5s cubic-bezier(0.16,1,0.3,1) forwards',
        'fade-in': 'fadeIn 0.5s cubic-bezier(0.16,1,0.3,1) forwards',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
export default config
