
const Time = new Date().getTime();
module.exports = {
  publicPath: '/', // 根目录
  outputDir: 'knowledge', //构建输入目录
  assetsDir: 'assets',  //静态资源目录
  lintOnSave: false, // 是否开启eslint 保存检测， 有效值是 false || true || 'error'
  productionSourceMap: false,
  transpileDependencies: [],
  configureWebpack: {
    output: {
      filename: `js/[name].${Time}.js`,
      chunkFilename: `js/[name].${Time}.js`,
    }
  },
  pwa: {
    iconPaths: {
      favicon32: 'img/icons/logoIcon.jpg',
      favicon16: 'img/icons/logoIcon.jpg',
      appleTouchIcon: 'img/icons/logoIcon.jpg',
      maskIcon: 'img/icons/logoIcon.jpg',
      msTileImage: 'img/icons/logoIcon.jpg'
    }
  },
  devServer: {
    host: "0.0.0.0",
    port: 8080,
  }
}
