module.exports = {
    content: [
      './src/**/*.{html,js,astro}',  // Asegúrate de incluir las rutas correctas de tus archivos
    ],
    theme: {
      extend: {
        animation: {
          'slide-left': 'slide-left 600ms ease-in-out',
          'slide-right': 'slide-right 1s ease-in-out',
          'zoom-in': 'zoom-in 600ms ease-in-out',
        },
        keyframes: {
          'slide-left': {
            '0%, 50%': { transform: 'translateX(-100%)' },
            '50%': { transform: 'translateX(0%)' },
          },
          'zoom-in': {
            '0%': { transform: 'scale(0.5)' },
            '50%': { transform: 'scale(1.1)' },
            '100%': { transform: 'scale(1)' },
          },
          'slide-right': {
            '0%, 50%': { transform: 'translateX(100%)' },
            '50%': { transform: 'translateX(0%)' },
          },
        },
      },
    },
    plugins: [],
  };
  