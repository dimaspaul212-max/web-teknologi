import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        uia: {
          navy: '#15246b',
          deep: '#1a2c86',
          blue: '#1447e6',
        },
      },
    },
  },
  plugins: [],
};
export default config;
