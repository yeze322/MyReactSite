import Voters from './Voters.jsx'

module.exports = {
  path: 'Voters',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, Voters)
    })
  }
}