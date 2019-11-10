const isProduction = process.env.NODE_ENV === 'production';
const withSass = require('@zeit/next-sass');

module.exports = withSass({
  /* config options here */
  distDir: 'dist',
  exportPathMap: function () { // /Next-React-Components
    return {
      "/": { page: "/" },
      "/entrance": { page: "/entrance" },
      "/shop": { page: "/shop" },
    }
  },
  // TODO deploy url;
  assetPrefix: isProduction ? 'http://sandoll.dothome.co.kr/' : '',
});
