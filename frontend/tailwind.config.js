/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'ph-orange': '#FF9900',
        'ph-orange-hover': '#E68A00',
        'ph-orange-muted': 'rgba(255, 153, 0, 0.1)',
        'ph-red': '#E74C3C',
        'ph-green': '#2ECC71',
        'ph-yellow': '#F1C40F',
        'ph-black': '#0D0D0D',
        'ph-dark': '#1A1A1A',
        'ph-dark-2': '#242424',
        'ph-light': '#F5F5F5',
        'ph-border': '#3A3A3A',
        'ph-border-light': '#E0E0E0',
        'ph-text': '#FFFFFF',
        'ph-text-dark': '#1A1A1A',
        'ph-text-secondary': '#B0B0B0',
        'ph-text-muted': '#888888',
        'cjp-maroon': '#800000',
      },
    },
  },
  plugins: [],
}
