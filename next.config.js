const isProduction = process.env.NODE_ENV === 'production';
const withSass = require('@zeit/next-sass');

module.exports = withSass({
  /* config options here */
  distDir: 'dist',
  exportPathMap: function () { // /Next-React-Components
    return {
      "/": { page: "/" },
      "/scene1": { page: "/scene1" },
      "/scene2": { page: "/scene2" },
      "/scene3": { page: "/scene3" },
    }
  },
  // TODO deploy url;
  assetPrefix: isProduction ? 'https://chudee.github.io/' : '',
});
