const path = require('path');
const CopyRightWebpackPlugins = require('./plugins/copyright-webpack-plugins');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  plugins: [
    new CopyRightWebpackPlugins()
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  }
}