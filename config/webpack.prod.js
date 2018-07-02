const merge = require('webpack-merge');
const common = require('./webpack.common');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");


module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true
    }),
    new OptimizeCSSAssetsPlugin()
  ]
})
