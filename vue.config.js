module.exports = {
  css: {
    extract: false,
    loaderOptions: {
      sass: {
        prependData: `@import "~@/assets/style/cfg-scss.scss";`
      }
    }
  }
};
