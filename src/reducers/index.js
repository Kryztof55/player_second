import {combineReducers} from 'redux';
import citasReducer from './citasreducers'
export default combineReducers({
    citas: citasReducer
})