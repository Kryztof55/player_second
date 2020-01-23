
import {BEGIN_PLAYLIST} from '../types'
import {SUCCESS_PLAYLIST} from '../types'
import {FAILURE_PLAYLIST} from '../types'

const initialState = {
    items : [],
    loading: false,
    prueba: 'state',
    error: null
}
export default function playListReducer(state = initialState, action){
    
    switch(action.type){
        case BEGIN_PLAYLIST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case SUCCESS_PLAYLIST:
            return{
                ...state,
                loading: false,
                items: action.payload  
            }
        case FAILURE_PLAYLIST:
            return{
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}