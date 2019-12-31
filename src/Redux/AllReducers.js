import {combineReducers} from 'redux'
import addingComment from './Reducer'

const allReducers = combineReducers({
    comments:addingComment
})

export default allReducers
