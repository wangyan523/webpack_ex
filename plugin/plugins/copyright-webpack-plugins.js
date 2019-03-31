class CopyRightWebpackPlugins {
  // constructor(options) {
  //   console.log(options)
  // }
  apply(compiler) {
    compiler.hooks.compile.tap('CopyRightWebpackPlugins', (compilationParams) => {
      console.log('compilationParams')
    })
    compiler.hooks.emit.tapAsync('CopyRightWebpackPlugins', (compilation, cb) => {
      compilation.assets['copyright.js'] = {
        source: function() {
          return "console.log('copyright by wyyyyyy')"
        },
        size: function() {
          return 35
        }
      }
      cb()
    })
  }
}

module.exports = CopyRightWebpackPlugins;