import { combineReducers } from 'redux'
import currentUser from './currentUser'
import { routerReducer as routing } from 'react-router-redux'

const springblockReducers = combineReducers({
	currentUser,
  routing
})

export default springblockReducers
