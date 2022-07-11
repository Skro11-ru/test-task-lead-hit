module.exports = {
  publicPath: "/test-task-lead-hit/",
  css: {
    extract: false,
    loaderOptions: {
      sass: {
        prependData: `@import "~@/assets/style/cfg-scss.scss";`
      }
    }
  }
};
