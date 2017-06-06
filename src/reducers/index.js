import { combineReducers } from 'redux'
import currentUser from './currentUser'
import menu from './menu'
import { routerReducer as routing } from 'react-router-redux'

const springblockReducers = combineReducers({
	currentUser,
	menu,
  routing
})

export default springblockReducers
