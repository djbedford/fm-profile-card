/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    extend: {
      backgroundColor: {
        primary: 'hsl(var(--bg-primary))',
      },
      fontFamily: {
        'kumbh-sans': ['Kumbh Sans'],
      },
      textColor: {
        primary: 'hsl(var(--text-primary))',
        secondary: 'hsl(var(--text-secondary))',
      }
    },
  },
  plugins: [],
}
