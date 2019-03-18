const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const merge = require('webpack-merge');
const devConfig = require('./webpack.dev');
const prodConfig = require('./webpack.prod')
const commonConfig = {
  entry: {
    main: './src/index.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: [{
        loader: "babel-loader",
      }, {
        loader: "imports-loader?this=>window"
      }]
      // options: {
      //   presets: [
      //     ['@babel/preset-env',
      //       {
      //         targets: {
      //           chrome: "67",
      //         },
      //         useBuiltIns: 'usage'
      //       }
      //     ]
      //   ]
      //   "plugins": [
      //     ["@babel/plugin-transform-runtime",
      //       {
      //         "corejs": 2,
      //         "helpers": true,
      //         "regenerator": true,
      //         "useESModules": false
      //       }
      //     ]
      //   ]
      // }
    }, {
      test: /\.png$/,
      use: {
        loader: 'file-loader',
        options: {
          name: '[name]_[emoji].[ext]',
          outputPath: 'images/'
        },
      }
    }, {
      test: /\.(eot|ttf|svg|woff)$/,
      use: {
        loader: 'file-loader',
      }
    }]
  },
  optimization: {
    runtimeChunk: {
      name: 'runtime'
    },
    usedExports: true,
    splitChunks: {
      chunks: 'all'
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: path.resolve(__dirname, '../dist')
    }),
    new webpack.ProvidePlugin({
      $: 'jQuery',
      _join: ['lodash', 'join']
    })
  ],
  output: {
    path: path.resolve(__dirname, '../dist')
  }
}

module.exports = (env) => {
  if (env && env.production) {
    return merge(commonConfig, prodConfig)
  } else {
    return merge(commonConfig, devConfig)
  }
}