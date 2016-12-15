import SideBar from './SideBar.jsx'

module.exports = {
  path: 'SideBar',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, SideBar)
    })
  }
}