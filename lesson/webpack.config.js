const path = require('path')

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    filename: 'bundle-wy.js',
    path: path.resolve(__dirname, 'bundle')
  },
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
      test: /\.scss$/,
      use: [
        'style-loader', 
        {
          loader: 'css-loader',
          options: {
            importLoader: 2,
            modules: true
          }
        },
        'sass-loader',
        'postcss-loader'
      ]
    }]
  }
}