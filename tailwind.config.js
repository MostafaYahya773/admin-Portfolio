/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#222A3D',
        'secondary-color': '#2D3449',
        'third-color': '#C0C1FF',
        'card-bg-color': '#1E293B',
        'button-color': '#6366F1',
        'link-color': '#818CF8',
        'input-color': '#171F33',
        'label-color': '#C7C4D7',
        'bg-color': '#060E20',
        'white-color': '#FFFFFF',
      },
      fontSize: {
        12: '0.75rem', // 12px
        14: '0.875rem', // 14px
        16: '1rem', // 16px
        18: '1.125rem', // 18px
        20: '1.25rem', // 20px
        24: '1.5rem', // 24px
        28: '1.75rem', // 28px
        35: '2.1875rem', // 35px
      },
    },
  },
  plugins: [],
};
