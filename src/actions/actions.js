
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
                authorization: `Bearer BQBcpnn9NafwXOMHIbCdR8Xrr05s4Z_ih8VfBmYHnJKfbD0l0e4l2br4yeTy-fV_nDFu_A7VdJg5fN5TrfDZVQvFWntj7zwvJ3rruFv33uADsGstCDfz4_c8KqP5RTZmoRI9127MdHSgi9wdexcnnEzQ0Strxzazs7imuoXub9fuJBqvP6Tw6eThEuAYcRORMSfsjRi--s0sOwSuAim4de0w8pio3J-2NAPG7FB05xKjEeq1Hqv_pN4m2mG6usEC3fwXm4eSCwQ8Xg`,
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




