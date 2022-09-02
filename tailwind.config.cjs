/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container: {
      center: true,
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    },
    extend: {},
  },
  plugins: [],
}

// /* Colors */

// /* White theme */

// $color-white: #ffffff;
// //background
// $color-lotion: #f2f2f2;
// // font
// $color-chinese-black: #111517;
// // icon, input:placeholder
// $color-old-silver: #848484;

// /* border */
// $box-shadow-white: 0 2px 9px rgba(0, 0, 0, 0.0532439);

// /* Black theme */

// //navbar
// $color-outer-Space: #2b3844;
// //background
// $color-charleston-green: #202c36;

// /* border */
// $box-shadow-black: 0 0 7px 2px rgba(0, 0, 0, 0.0294384);

// /* other */
// $border - radius: 0.3125rem;
