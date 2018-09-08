const images = require.context('../assets/images', true, /\.png$/);
// const prospectus = require.context('../assets/prospectus', true, /\.pdf$/);

const parts = {
  logos: [
    {
      src: images('./logo.png'),
    },
  ],
  // pdf: [
  //   {
  //     href: prospectus('./Media-Release_June-2018-results-Full-Year-Dividend-Final.pdf'),
  //   },
  // ],
};

export default parts;
