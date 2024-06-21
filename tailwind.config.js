/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  safelist: [
    'bg-normal', 'bg-poison', 'bg-electric', 'bg-water', 'bg-grass', 'bg-ice',
    'bg-ghost', 'bg-dark', 'bg-fighting', 'bg-ground', 'bg-flying', 'bg-psychic',
    'bg-bug', 'bg-rock', 'bg-dragon', 'bg-steel', 'bg-fairy', 'bg-fire'
  ],

  theme: {
    container: {
      center: true,
    },

    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {

      animation: {
        'bounce': 'bounce 4s infinite',
        'spin': "spin 6s linear infinite",

      },
      backgroundImage: {
        "poison": "url('/public/assets/poison-gradient.svg')",
        "electric": "url('/public/assets/electric-gradient.svg')",
        "normal": "url('/public/assets/normal-gradient.svg')",
        "water": "url('/public/assets/water-gradient.svg')",
        "grass": "url('/public/assets/grass-gradient.svg')",
        "ice": "url('/public/assets/ice-gradient.svg')",
        "ghost": "url('/public/assets/ghost-gradient.svg')",
        "dark": "url('/public/assets/dark-gradient.svg')",
        "fighting": "url('/public/assets/fighting-gradient.svg')",
        "ground": "url('/public/assets/ground-gradient.svg')",
        "flying": "url('/public/assets/flying-gradient.svg')",
        "psychic": "url('/public/assets/psychic-gradient.svg')",
        "bug": "url('/public/assets/bug-gradient.svg')",
        "rock": "url('/public/assets/rock-gradient.svg')",
        "dragon": "url('/public/assets/dragon-gradient.svg')",
        "steel": "url('/public/assets/steel-gradient.svg')",
        "fairy": "url('/public/assets/fairy-gradient.svg')",
        "fire": "url('/public/assets/fire-gradient.svg')",
      },
    },
  },
  plugins: [],
};
// colors: {
//   "poison": "#c084fc",
//   "type-electric": "#fcd34d",
//   "type-normal": "#d4d4d8",
//   "type-water": "#0ea5e9",
//   "type-grass": "#4ade80",
//   "type-ice": "#67e8f9",
//   "type-ghost": "#4338ca",
//   "type-dark": "#44403c",
//   "type-fighting": "#ef4444",
//   "type-ground": "#a16207",
//   "type-flying": "#c7d2fe",
//   "type-psychic": "#be185d",
//   "type-bug": "#16a34a",
//   "type-rock": "#21201e",
//   "type-dragon": "#ea580c",
//   "type-steel": "#78716c",
//   "type-fairy": "#fda4af",
// },