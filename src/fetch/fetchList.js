import {fetchPlaylistBegin, fetchPlaylistSuccess, fetchPlaylistFailure} from '../actions/actions.js'


function fetchList(){
    return dispatch => {
        dispatch(fetchPlaylistBegin());
        fetch("https://api.spotify.com/v1/me/playlists", {
                    method: "GET",
                    headers: {
                        authorization: `Bearer BQA4ReTA3qDbzE4siParkF2BWU65gCePFJlb46FMveGBhKfWv-wsWiunq4b25omFABlbdB8CjUVL5BIPyyISCnOTuFKrjoEgX4Bm0Hg2h2cVUMchxMz-v1ywAcV4k9Z_PYTb0fgZxjIuRwdPkEgYki1gtlUYd63p71ENc3XnmkiZsmqK6YraNkdrnH1FHXT2-6UGwB5kUjDh40MyJYq70ptzhuJ-wwEjQfyZf5GitliYWsNIJZx2TVLJiJlqEAQSkJ8944hvQbtwIw`,
                    }
                })
                .then((response) => {
                    
                    return response.json();
                })
                .then((res) => {
                    fetchPlaylistSuccess(res.items)
                    console.log(res)
                    return (res);
            });
    }
}
export default fetchList;