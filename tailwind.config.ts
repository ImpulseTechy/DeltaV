import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#121212',
          secondary: '#1A1A1A',
          tertiary: '#242424',
        },
        orange: {
          DEFAULT: '#FF6B00',
          light: '#FF8C3A',
          dim: 'rgba(255,107,0,0.12)',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#A1A1AA',
          muted: '#52525B',
        },
        border: {
          DEFAULT: '#3F3F46',
          light: '#52525B',
        },
      },
      fontFamily: {
        display: ['Barlow Condensed', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}

export default config
