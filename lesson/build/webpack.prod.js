const merge = require('webpack-merge');
const commonConfig = require('./webpack.common');

const prodConfig = {
  devtool: 'cheap-module-source-map',
  mode: 'production',
}

module.exports = merge(commonConfig, prodConfig)