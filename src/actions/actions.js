import React, { useState } from 'react';

import {BEGIN_PLAYLIST} from '../types'
import {SUCCESS_PLAYLIST} from '../types'
import {FAILURE_PLAYLIST} from '../types'
import App from '../App'
/* Fetch play list */

export function fetchList(){
    
    return dispatch => {
        
        dispatch(fetchPlaylistBegin());
        fetch("https://api.spotify.com/v1/me/playlists", {
            method: "GET",
            headers: {
                authorization: `Bearer BQAvdTP5o5RbfHYzQV3UMBJRB3eOXIhnIAh21yY3rguKCegqNsoc4ZtAMSuvC9k_dxsTYtK7UihPTpaCal6gyOsAPyzuoHzWA22YAI-9K-V1uT6Gn80D9Ap0XitzXY4Mo7PF4pz0MP6nYWxNUyltoM98RVNhk2XdRMKcgFHepM8tWZCtmVTBvaXxFL18M1KaVM02u6P2CGc_-0z5zwnv0_rMdQihqMPHPegQ0J6HU4PN02au8jFEGVu_QyT0WO5IXyFeCztfeG1elQ`,
                
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




