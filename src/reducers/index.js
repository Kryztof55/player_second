import {combineReducers} from 'redux';
import listaReducer from './playListReducers'
export default combineReducers({
    listas: listaReducer
})