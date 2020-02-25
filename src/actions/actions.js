import React, { useState } from 'react';

import {BEGIN_PLAYLIST} from '../types'
import {SUCCESS_PLAYLIST} from '../types'
import {FAILURE_PLAYLIST} from '../types'
import App from '../App'
/* Fetch play list */

export function fetchList(){

    return dispatch => {
        
        dispatch(fetchPlaylistBegin());
        async function requestPlaylist(re, res) {
            const request = await fetch("https://api.spotify.com/v1/me/playlists", {
                method: "GET",
                headers: {
                    authorization: `Bearer BQCiCdO_p74bkw2CzOiLBiB7T4A5HtjwZDFFrAIHwBYA6o9dQdn0Y-IxvDajlSojAN7PXkmf5MDT3CGJADUw410cVLlHZrzweTfZR-0lCNnHRnNSJ7AEAjZRegrDv6taZkOYXFLXvp6HfCVS9zXdnTLc-LgVkDNSZy-nBJtAgXdRSgJhXF0gHAjl36n1wC6LOGlB3fr5ieZ_zUq4dmJqnaAsAylD4MPy5xQauo5oGz49G6KUZIDPpsZm05_dUwyCM-SqJbmXw_1oBg`,
                    
                }
            })
            try {
                console.log("Leyendo..")
                const res = await request.json();
                dispatch(fetchPlaylistSuccess(res.items))

                
            }
        
            catch(errores){
                dispatch(fetchPlaylistFailure())
            }
        }
        requestPlaylist()

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




