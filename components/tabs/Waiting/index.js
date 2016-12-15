import Waiting from './Waiting.jsx'

module.exports = {
  path: 'Waiting',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, Waiting)
    })
  }
}