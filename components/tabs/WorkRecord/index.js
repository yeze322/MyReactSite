import WorkRecord from './WorkRecord.jsx'

module.exports = {
  path: 'WorkRecord',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, WorkRecord)
    })
  }
}