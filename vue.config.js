//vue config js
module.exports = {
  //options
  devServer: {
    hot: true,
    watchOptions: {
      poll: true
    }
  },

  configureWebpack: {
    devtool: 'source-map'
  },

  pluginOptions: {

  }
  // build: {
  //   assetsPublicPath: '/',
  //   assetsSubdirectory:'public'
  // }
}
