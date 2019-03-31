const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  resolveLoader: {
    modules:['node_modules', 'loaders']
  },
  module: {
    rules:[{
      test: /\.js/,
      use:[{
        loader: 'replaceLoader.js',
      },{
        loader: 'replaceLoaderAsync.js',
        options: {
          name: 'WangY'
        }
      }]
    }]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  }
}