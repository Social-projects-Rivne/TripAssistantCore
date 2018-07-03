const merge = require('webpack-merge');
const common = require('./webpack.common');


module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    stats: 'errors-only',
    port: '8080',
    hot: true,
    open: true,
    overlay:true
  }
})
