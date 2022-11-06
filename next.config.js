const withImages = require('next-images');
const withImagesJson = withImages();


module.exports = {
  distDir: '../build',
  ...withImagesJson,
  images: {
    disableStaticImages: true
  }
}
