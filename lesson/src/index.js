function getComponent() {
  return import(/* webpackChunkName:"lodash" */'lodash').then(({default: _}) => {
    var element = document.createElement('div');
    element.innerHTML = _.join(['wyyyyy', 'hello'], '-');
    return element;
  })
}

getComponent().then(el => {
  document.body.appendChild(el)
})