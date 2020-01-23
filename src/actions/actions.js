
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
                authorization: `Bearer BQB15OaHDQy-QagXPQlEo8w9bw-IBcJG7KGUccg3_lo0SLx98G5quuku0-ZLvDCde_iZ_9FfMK86bOjEfBYhhC67wBWphjrXCvEkOHTRmep8qjoL3MxGdpK47qtc9Z9TlR4u0t2jb2FQcFrN2hHE-5gGMLUEj1zQqhLFUERwqKM6IoJYpzPFpH50UiVqoPzQXsDdBFrO26Uu7qgG_zqZRqDXO3BSNi19mMg-7uw57S05_wtCyOlvZTe83vjlJjDkxhXi5z4BPGqqug`,
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
