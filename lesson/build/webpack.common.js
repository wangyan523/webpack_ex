const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
  entry: {
    main: './src/index.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel-loader",
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
    }, {
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
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: path.resolve(__dirname, '../dist')
    }),
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist')
  }
}