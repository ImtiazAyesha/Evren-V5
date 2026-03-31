/** @type {import('tailwindcss').Config} */
module.exports = {
  content:[
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        evren: {
          navy: '#1B2A4A',
          'navy-light': '#2C3E6B',
          peach: '#F4A89A',
          'peach-light': '#FDE8E4',
          rose: '#E8967E',
          gold: '#D4A574',
          'warm-gray': '#F5F0ED',
          charcoal: '#2D2D2D',
          'medium-gray': '#6B6B6B',
          'light-gray': '#E8E4E1',
          'warm-white': '#FFF9F7',
        }
      },
      fontFamily: {
        heading:['var(--font-plus-jakarta)', 'Poppins', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
      borderRadius: {
        'studio': '16px', // The standard soft edge for all Evren cards/images
        'studio-sm': '12px',
      },
      boxShadow: {
        'warm': '0 10px 40px -10px rgba(27, 42, 74, 0.1)', // Navy-tinted shadow, NEVER pure black
        'warm-hover': '0 20px 40px -10px rgba(27, 42, 74, 0.15)',
      }
    },
  },
  plugins:[],
}
