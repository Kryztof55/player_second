
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
                authorization: `Bearer BQA9Oal5uTX-RYe2OxFVvtsBY3MKKHFHT7BMLyqNEGy45gFdR1c8iLPbiKmyhLWAcIWU-GpU6YjZV0H3S3TcsBLNrfyIlvTTdGKKcBajej0V4_TYlaV7YN-GUruVukmr1E7Imwi6YTu2HbDrslJFxOSs4iDnfngxduGy49fQSuT9kvLjW0TIxZZq9mGpI4uwGE51kliOAFqzfj_BY91c6PJVmXOdoLltzooWfpCmyXdyvyj8v5O2027jdoOzjBU0VUfN_do7BQeWJA`,
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




