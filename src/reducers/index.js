import { combineReducers } from 'redux'
import load_search_reducer from './load_search_reducer.js'

export default combineReducers({
	load_search: load_search_reducer
})