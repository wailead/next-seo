import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      mobile: '500px',
      primary: '750px',
    },
    extend: {
      width: {
        primary: '750px',
      },
      padding: {
        x: '52px',
        top: '46.8px',
        bottom: '62.4px',
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: {
          default: '#2EC8C8',
          100: '#E0F5F6',
          200: '#C3F6F6',
        },
        gray: {
          default: '#222222',
          100: '#BDBDBD',
          200: '#9E9E9E',
          300: '#616161',
          400: '#5C5C5C',
          500: '#4D4D4D',
          600: '#424242',
        },
        white: {
          default: '#FFFFFF',
          100: '#F9F9F9',
          200: '#F5F5F5',
          300: '#F2F2F2',
          400: '#EEEEEE',
          500: '#D9D9D9',
        },
      },
      fontFamily: {
        pretendard: ['Pretendard'],
        montserrat: ['Montserrat'],
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        fadeOut: {
          from: { opacity: '1' },
          to: { opacity: '0' },
        },
        'slide-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'reference-slide-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-200%)' },
        },
        'slide-right': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'slide-bottom': {
          '0%': { transform: 'translateY(-50%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        fadein: 'fadeIn 0.15s ease-in-out forwards',
        fadeout: 'fadeOut 0.15s ease-in-out forwards',
        'slide-right': 'slide-right 60s linear infinite',
        'slide-left': 'slide-left 60s linear infinite',
        'reference-slide-left': 'reference-slide-left 30s linear infinite',
        'slide-bottom': 'slide-bottom 60s linear infinite',
        'slide-bottom-more': 'slide-bottom 120s linear infinite',
      },
    },
  },
  plugins: [],
} satisfies Config
