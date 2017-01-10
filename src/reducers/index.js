import { combineReducers } from 'redux'

var myState = function (state = {name: 'yeze'}, action) {
  return state
}
const store = combineReducers({
  myState
})

export default store