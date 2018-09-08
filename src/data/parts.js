const images = require.context('../assets/images', true, /\.png$/);

const parts = {
  logos: [
    {
      src: images('./logo.png'),
    },
  ],
};

export default parts;
