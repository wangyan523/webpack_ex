const webpack = require('webpack');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common');

const devConfig = {
  devtool: 'cheap-module-eval-source-map',
  mode: 'development',
  devServer: {
    contentBase: './dist',
    hot: true
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: [
        'style-loader',
        // 'css-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 2,
          }
        },
        'sass-loader',
        'postcss-loader'
      ]
    }, {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader',
        'postcss-loader'
      ]
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
  }
}

module.exports = merge(commonConfig, devConfig)