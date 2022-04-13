import { combineReducers } from 'redux'
import peopleReducer from './peopleReducer'
import planetsReducer from './planetsReducer'

export default combineReducers({
    peopleReducer,
    planetsReducer
})
