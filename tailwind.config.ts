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
        ivory:       '#FAF9F5',
        parchment:   '#F5F0E8',
        linen:       '#E6DFD8',
        sand:        '#DDD3C4',
        honey:       '#CC785C',
        amber:       '#A9583E',
        'deep-amber':'#8F4632',
        ink:         '#141413',
        charcoal:    '#3D3D3A',
        'warm-gray': '#6C6A64',
        'light-gray':'#A09D96',
        'surface-card': '#EFE9DE',
        'surface-dark': '#181715',
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
        glow: '0 0 24px rgba(204,120,92,0.20)',
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
