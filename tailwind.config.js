/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: {
          light: '#FAF7F0',
          dark: '#1F1F1F',
        },
        card: {
          light: '#FFFFFF',
          dark: '#2A2A2A',
        },
        text: {
          primary: {
            light: '#1F2933',
            dark: '#F5F5F5',
          },
          secondary: {
            light: '#4B5563',
            dark: '#A1A1AA',
          },
        },
        accent: '#A97C50',
        link: {
          light: '#4A90E2',
          dark: '#60A5FA',
        },
        divider: {
          light: '#E5E7EB',
          dark: '#3F3F46',
        },
        border: {
          light: '#E5E7EB',
          dark: '#3F3F46',
        },
          overlay: {
          subtle: {
            light: 'rgba(0, 0, 0, 0.04)',
            dark: 'rgba(255, 255, 255, 0.05)',
          },
        },
        code: {
          light: '#4281A4',
          dark: '#82DDF0',
        },
      },
      fontFamily: {
        body: ['var(--font-body)', 'sans-serif'],
        heading: ['var(--font-heading)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      borderRadius: {
        md: '8px',
      },
      lineHeight: {
        relaxed: '1.6',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwind-scrollbar'),
  ]
};
