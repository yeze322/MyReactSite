import ApiDoc from './ApiDoc.jsx'

module.exports = {
  path: 'ApiDoc',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, ApiDoc)
    })
  }
}