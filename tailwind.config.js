module.exports = {
  mode: 'jit',
  purge: ['./index.html','./src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: true,
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        sans : ['Barlow','sans-serif']
      },
      colors : {
        gray : {
          100 : '#E0E6E9',
          500 : '#ABBBC2',
          700 : '#393C49',
          800 : '#1F1D2B',
          900 : '#252836'
        },
        primary : '#EB966A',
        boxShadow : {
          primary : '8px 8px 24px rgba(234,124,105,0.62)',
          'inverse-top' : '4px 4px 0 #252836',
          'inverse-bottom' : '4px -4px 0 #252836'
        }
      }
    },
  },
  plugins: [],
}
