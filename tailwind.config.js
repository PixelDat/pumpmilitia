/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-kanit)'],
        gameria: ['var(--font-gameria)']
      },
      colors: {
       'vivd-lime-green': '#a5e314',
       'vivd-lime-green-10': '#edf9d0',
       'vivd-lime-green-20': '#e1f6b1',
       'vivd-lime-green-30': '#d2f18a',
       'vivd-lime-green-40': '#c3ec62',
       'vivd-lime-green-50': '#b4e83b',
       'vivd-lime-green-60': '#8abd11',
       'vivd-lime-green-70': '#6e970d',
       'vivd-lime-green-80': '#53720a',
       'vivd-lime-green-90': '#374c07',
       'vivd-lime-green-100': '#212d04',


       'black-leather-jacket': '#303827',
       'black-leather-jacket-10': '#d6d7d4',
       'black-leather-jacket-20': '#babdb7',
       'black-leather-jacket-30': '#989c93',
       'black-leather-jacket-40': '#757a6f',
       'black-leather-jacket-50': '#53594b',
       'black-leather-jacket-60': '#282f21',
       'black-leather-jacket-70': '#20251a',
       'black-leather-jacket-80': '#181c14',
       'black-leather-jacket-90': '#10130d',
       'black-leather-jacket-100': '#0a0b08',

       'harlequin-green': '#36d800',
       'harlequin-green-10': '#d7f7cc',
       'harlequin-green-20': '#bcf2aa',
       'harlequin-green-30': '#9bec80',
       'harlequin-green-40': '#79e555',
       'harlequin-green-50': '#58df2a',
       'harlequin-green-60': '#2db400',
       'harlequin-green-70': '#249000',
       'harlequin-green-80': '#1b6c00',
       'harlequin-green-90': '#124800',
       'harlequin-green-100': '#0b2b00',


       'medium-candy-apple-red': '#e2002b',
       'medium-candy-apple-red-10': '#f9ccd5',
       'medium-candy-apple-red-20': '#f5aab8',
       'medium-candy-apple-red-30': '#f18095',
       'medium-candy-apple-red-40': '#ec5572',
       'medium-candy-apple-red-50': '#e72a4e',
       'medium-candy-apple-red-60': '#bc0024',
       'medium-candy-apple-red-70': '#97001d',
       'medium-candy-apple-red-80': '#710016',
       'medium-candy-apple-red-90': '#4b000e',
       'medium-candy-apple-red-100': '#2d0009',


       'tangerine-yellow': '#fdce00',
       'tangerine-yellow-10': '#fff5cc',
       'tangerine-yellow-20': '#feefaa',
       'tangerine-yellow-30': '#fee780',
       'tangerine-yellow-40': '#fede55',
       'tangerine-yellow-50': '#fdd62a',
       'tangerine-yellow-60': '#d3ac00',
       'tangerine-yellow-70': '#a98900',
       'tangerine-yellow-90': '#544500',
       'tangerine-yellow-100': '#332900',


       'pale-goldenrod': '#e0f7ab',
       'pale-goldenrod-10': '#f9fdee',
       'pale-goldenrod-20': '#f5fce3',
       'pale-goldenrod-30': '#f0fbd5',
       'pale-goldenrod-40': '#eafac7',
       'pale-goldenrod-50': '#e5f8b9',
       'pale-goldenrod-60': '#bbce8f',
       'pale-goldenrod-70': '#95a572',
       'pale-goldenrod-80': '#707c56',
       'pale-goldenrod-90': '#4b5239',
       'pale-goldenrod-100': '#2d3122',


       'licorice': '#131313',
       'licorice-10': '#d0d0d0',
       'licorice-20': '#b0b0b0',
       'licorice-30': '#898989',
       'licorice-40': '#626262',
       'licorice-50': '#3a3a3a',
       'licorice-60': '#101010',
       'licorice-70': '#0d0d0d',
       'licorice-80': '#0a0a0a',
       'licorice-90': '#060606',
       'licorice-100': '#040404',

       'anti-flash-white': '#f3f3f3',
       'anti-flash-white-10': '#fdfdfd',
       'anti-flash-white-20': '#fbfbfb',
       'anti-flash-white-30': '#f9f9f9',
       'anti-flash-white-40': '#f7f7f7',
       'anti-flash-white-50': '#f5f5f5',
       'anti-flash-white-60': '##cbcbcb',
       'anti-flash-white-70': '#a2a2a2',
       'anti-flash-white-80': '#7a7a7a',
       'anti-flash-white-90': '#515151',
       'anti-flash-white-100': '#313131'
      },
      spacing: {},
      screens: {
        xs: '320px',
        sm: '375px',
        sml: '500px',
        md: '667px',
        mdl: '768px',
        lg: '960px',
        lgl: '1024px',
        xl: '1280px'
      }
    },
  },
  plugins: []
}

