const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    main: './src/index.js',
    sub: './src/index.js'
  },
  mode: 'development',
  module: {
    rules:[{
      test: /\.png$/,
      use: {
        loader: 'file-loader',
        options: {
          name: '[name]_[emoji].[ext]',
          outputPath: 'images/' 
        },
      }
    },{
      test: /\.(eot|ttf|svg|woff)$/,
      use: {
        loader: 'file-loader',
      }
    },{
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
    }]
  },
  plugins: [new HtmlWebpackPlugin({
    template: 'src/index.html'
  }), new CleanWebpackPlugin()],
  output: {
    publicPath: 'www.wyyyyyy.com',
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
}