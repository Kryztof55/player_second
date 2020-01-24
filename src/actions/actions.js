
import {BEGIN_PLAYLIST} from '../types'
import {SUCCESS_PLAYLIST} from '../types'
import {FAILURE_PLAYLIST} from '../types'


/* Fetch play list */


export function fetchList(){
    return dispatch => {
        dispatch(fetchPlaylistBegin());
        fetch("https://api.spotify.com/v1/me/playlists", {
            method: "GET",
            headers: {
                authorization: `Bearer BQB5dCIdq72hSsZIzNwHPfkfx0JkgF23eKj6y2lipOhFGcRLR7IzwRaIzfbxFllwhSX4XkdwnPBygCnNoXWHhoPVOu9uqCyCjw2d54VhLNEngc6mpmrZ8zVzi8R_uotwlKT_BlHCHAQQqqLge_SrnuOzDhldSk9toc9rWQufQHyD0NjDL-sSjsD8glsbhxm8IEIcjKr-tXx0ppH15d4OGW29l2IR-ZH_VxmzV5AmlMcmuJ3psHtE0UPZJ-1MgZpiolMljFwbXEZZJA`,
            }
        })
        .then((response) => {
            return response.json();
        })
        .then((res) => {
            dispatch(fetchPlaylistSuccess(res.items))

            return (res);
        })
        .catch((error) =>{
            console.log(error)
            dispatch(fetchPlaylistFailure())
        })
    }
}

export function fetchPlaylistBegin(){
    return {
        type : BEGIN_PLAYLIST
    }
}

export function fetchPlaylistSuccess(items){
    return {
        type : SUCCESS_PLAYLIST,
        payload: items
    }
}

export function fetchPlaylistFailure(){
    return {
        type : FAILURE_PLAYLIST,
        payload: true

    }
}
