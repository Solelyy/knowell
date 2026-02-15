/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./editor/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        /* BRAND COLORS - for custom components */
        brand: {
          primary: {
            DEFAULT: 'hsl(var(--brand-primary))',
            light: 'hsl(var(--brand-primary-light))',
            dark: 'hsl(var(--brand-primary-dark))',
          },
          secondary: {
            DEFAULT: 'hsl(var(--brand-secondary))',
            light: 'hsl(var(--brand-secondary-light))',
            dark: 'hsl(var(--brand-secondary-dark))',
          },
          accent: {
            DEFAULT: 'hsl(var(--brand-accent))',
            light: 'hsl(var(--brand-accent-light))',
            dark: 'hsl(var(--brand-accent-dark))',
          },
        },
        background: {
          DEFAULT: 'var(--background)',
          light: 'hsl(var(--background-light))',
          dark: 'hsl(var(--background-dark))',
        },
        foreground: 'var(--foreground)',
        card: {
          DEFAULT: 'var(--card)',
          foreground: 'var(--card-foreground)',
        },
        text: {
          primary: {
            light: 'hsl(var(--text-primary-light))',
            dark: 'hsl(var(--text-primary-dark))',
          },
          secondary: {
            light: 'hsl(var(--text-secondary-light))',
            dark: 'hsl(var(--text-secondary-dark))',
          },
          muted: {
            light: 'hsl(var(--text-muted-light))',
            dark: 'hsl(var(--text-muted-dark))',
          },
        },
        border: {
          DEFAULT: 'var(--border)',
          light: 'hsl(var(--border-light))',
          dark: 'hsl(var(--border-dark))',
        },
        divider: {
          light: 'hsl(var(--divider-light))',
          dark: 'hsl(var(--divider-dark))',
        },
        overlay: {
          subtle: {
            light: 'var(--overlay-subtle-light)',
            dark: 'var(--overlay-subtle-dark)',
          },
        },
        code: {
          light: 'hsl(var(--code-light))',
          dark: 'hsl(var(--code-dark))',
        },
        success: {
          DEFAULT: 'var(--success)',
          foreground: 'var(--success-foreground)',
        },
      },
      fontFamily: {
        body: ['var(--font-body)', 'sans-serif'],
        heading: ['var(--font-heading)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      borderRadius: {
        DEFAULT: 'var(--radius)',
        sm: 'calc(var(--radius) - 4px)',
        md: 'calc(var(--radius) - 2px)',
        lg: 'var(--radius)',
        xl: 'calc(var(--radius) + 4px)',
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
