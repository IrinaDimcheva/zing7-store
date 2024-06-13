import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#43467F',
        'primary-light': '#5C6AC4',
        accent: '#47C1BF',
        'accent-dark': '#006FBB',
        'accent-yellow': '#EEC200',
        'accent-red': '#DE3618',

        natural: {
          1: '#161D25',
          2: '#212B36',
          3: '#454F5B',
          4: '#5A7184',
          5: '#637381',
          6: '#919EAB',
          7: '#959EAD',
          8: '#C4CDD5',
          9: '#F4F6F8',
          10: '#F9FAFB',
        },
      },
    },
    screens: {
      fit: '1110px',
      wide: '1440px',
    },
  },
  plugins: [],
};
export default config;
