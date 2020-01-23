import {combineReducers} from 'redux';
import listaReducer from './playListReducers.js'

export default combineReducers({
    listas: listaReducer
})