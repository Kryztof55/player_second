import { authEndpoint, clientId, redirectUri, scopes } from "../config.js";
import hash from "../hash.js";
import {GET_PLAYLIST} from '../types'

export function requestPlaylist(items){
    return (dispatch) => {
        console.log("desde action")
        fetch("https://api.spotify.com/v1/me/playlists", {
            method: "GET",
            headers: {
                authorization: `Bearer BQDuVutHFl6R4ZXqxAypb6CgLbi0dGVnPHlkH7tj-qDrD0jUxeKxFqM37QR6bj0REJRioCMMbEkigK9wVr5J3TWx8dLSZ15DR4VGNBZWdzpHMVmSL1MserKM99wTf-sEQ1HcKAzPorTzq1vlNagrEL8UKOgJK2UXtI6fUTEAtVMMpvKdLZrvon3R8WeQVNdqC7BZfaBkgo0RSHzioorN-TeghkS1O-VLaqBSgjhvTR1WlTFbz-7gDhC0OI8OBl-uNYZL51PIlhEkUA`,
            }
        })
        .then((response) => {
            return response.json();
        })
        .then((res) => {
            console.log(res.items)
            return (res);
        });
        dispatch(playList())
    }
}
const playList = (res) => (
    
    {
    type : GET_PLAYLIST,
    pyload: res
})