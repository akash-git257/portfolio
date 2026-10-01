import type { Config } from 'tailwindcss';

// Palette: deep "rack" navy neutrals with a blue bias, one warm signal accent
// (amber — status-LED / alert colour) and a cool secondary (link-light cyan)
// reserved for diagram connections and data flow.
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#070B12',
          900: '#0A101A',
          850: '#0E1522',
          800: '#121B2B',
          700: '#1A2538',
          600: '#26344B',
          500: '#3A4A63',
        },
        mist: {
          100: '#E8EDF5',
          200: '#C9D2E0',
          300: '#A3AFC2',
          400: '#97A3B7',
          500: '#7F8CA3',
        },
        signal: { DEFAULT: '#F2A93B', soft: '#F6C47A', deep: '#C9831C' },
        link: { DEFAULT: '#5CC8D8', soft: '#9ADDE7', deep: '#2E9AAB' },
        ok: '#5BC48A',
      },
      fontFamily: {
        display: ['Archivo', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['"IBM Plex Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      maxWidth: { content: '72rem' },
      boxShadow: {
        card: '0 1px 0 0 rgba(255,255,255,0.04) inset, 0 12px 32px -16px rgba(0,0,0,0.6)',
        lift: '0 1px 0 0 rgba(255,255,255,0.06) inset, 0 20px 40px -18px rgba(0,0,0,0.75)',
      },
      keyframes: {
        dash: { to: { strokeDashoffset: '-24' } },
        blink: { '0%,49%': { opacity: '1' }, '50%,100%': { opacity: '0' } },
        pulseDot: { '0%,100%': { opacity: '0.35' }, '50%': { opacity: '1' } },
      },
      animation: {
        dash: 'dash 1.6s linear infinite',
        blink: 'blink 1.1s step-end infinite',
        pulseDot: 'pulseDot 2.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;
