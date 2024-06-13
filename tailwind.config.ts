import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

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
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        '.headline-h1': {
          fontSize: '56px',
          font: 'rubik',
          fontStyle: 'normal',
          fontWeight: '500',
          lineHeight: '72px',
          letterSpacing: '0.2px',
        },
        '.headline-h2': {
          fontSize: '36px',
          font: 'rubik',
          fontStyle: 'normal',
          fontWeight: '500',
          lineHeight: '52px',
          letterSpacing: '0.2px',
        },
        '.headline-h3': {
          fontSize: '28px',
          font: 'rubik',
          fontStyle: 'normal',
          fontWeight: '500',
          lineHeight: '44px',
          letterSpacing: '0.2px',
        },
        '.headline-h4': {
          fontSize: '22px',
          font: 'rubik',
          fontStyle: 'normal',
          fontWeight: '500',
          lineHeight: '30px',
          letterSpacing: '0.2px',
        },
        '.headline-h5': {
          fontSize: '18px',
          font: 'rubik',
          fontStyle: 'normal',
          fontWeight: '500',
          lineHeight: '20px',
          letterSpacing: '0.2px',
        },
      });
    }),
  ],
};
export default config;
