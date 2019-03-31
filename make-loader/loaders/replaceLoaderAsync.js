const loaderUtils = require('loader-utils');
module.exports = function(source) {
  const options = loaderUtils.getOptions(this);
  // return source.replace('wyyyyyy', options.name)
  // this.callback(null, result)
  const callback = this.async()
  setTimeout(() => {
    const result = source.replace('wyyyyyy', options.name);
    callback(null, result)
  }, 1000)
}