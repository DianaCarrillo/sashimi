module.exports = {
  theme: {
   textColor: theme => theme('colors'),
     textColor: {
      'primary': '#ff0080',
      'secondary': '#fbc8d4',
      'sa-yellow': '#eefa00',
      'sa-blue': '#1d00ff',
      'purple-600': '#805ad5;',
         },
         backgroundColor: theme => ({
     ...theme('colors'),
     'primary': '#ff004c',
     'secondary': '#fbc8d4',
     'sa-yellow': '#eefa00',
     'sa-blue': '#1d00ff',
    }),
    extend: {},
  },
  variants: {},
  plugins: [],
}
