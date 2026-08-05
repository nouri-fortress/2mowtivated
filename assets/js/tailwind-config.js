tailwind.config = {
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#0E3B26',
          50: '#E8F0EC',
          100: '#CFE0D6',
          400: '#1E6B45',
          600: '#0E3B26',
          700: '#0B2F1E',
          900: '#071F14',
        },
        grass: {
          DEFAULT: '#8DC63F',
          50: '#F2F9E8',
          100: '#E3F2CC',
          400: '#8DC63F',
          600: '#71A22F',
        },
        gold: {
          DEFAULT: '#FFC20E',
          50: '#FFF8E1',
          400: '#FFC20E',
          600: '#E0A700',
        },
        charcoal: {
          DEFAULT: '#212B24',
          600: '#3A463D',
          400: '#5B6B5E',
        },
      },
      fontFamily: {
        heading: ['"Poppins"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 20px -4px rgba(14, 59, 38, 0.12)',
      },
    },
  },
};
