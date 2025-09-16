import type { Config } from 'tailwindcss'

const tailwindConfig = {
  content: [
    './app/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {},
  },
} satisfies Config

export default tailwindConfig
