const isProduction = process.env.ELEVENTY_ENV == 'production';

module.exports = {
  url: isProduction ? 'https://anaurelian.com' : 'http://localhost:8080',
  imagesUrl: '/assets/img',
  buildYear: new Date().getFullYear(),
  isProduction,
};
