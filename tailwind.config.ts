import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#ff6b6b',
          yellow: '#feca57',
        },
      },
    },
  },
  plugins: [],
}
export default config
