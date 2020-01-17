
import {GET_PLAYLIST} from '../types'
const initialState = {
    items : []
}
export default function(state = initialState, action){
    
    switch(action.type){
        case GET_PLAYLIST:
            return {
                items: [...state.items, action.payload]
            }
        default:
            return state;
    }
}