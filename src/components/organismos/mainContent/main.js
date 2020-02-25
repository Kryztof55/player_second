import React, { useState, useEffect  } from 'react';
import Img from '../../atomos/img/img'
import Text from '../../atomos/text/text'
import style from './style.scss';

import Listas from '../listas/lista';
import Slide from '../../atomos/slide/slide';
import Titulo from '../../atomos/titulo/titulo';
import Modal from '../modal/modal'
import {useDispatch, useSelector } from 'react-redux';
//funciones actions redux

import {fetchList} from '../../../actions/actions';
const Main = props => {
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(fetchList())
      
      
    },[]);

    const [show, setShow] = useState(false);
    const [tracks, setTracks] = useState([])
    const openModal = (listas) => {
        setShow(true);
        //console.log(listas[0].id)
        async function requesrTracks(){
            const requestTracks = await fetch(`https://api.spotify.com/v1/playlists/${listas}/tracks`, {
                 method: "GET",
                 headers: {
                     authorization: `Bearer BQCiCdO_p74bkw2CzOiLBiB7T4A5HtjwZDFFrAIHwBYA6o9dQdn0Y-IxvDajlSojAN7PXkmf5MDT3CGJADUw410cVLlHZrzweTfZR-0lCNnHRnNSJ7AEAjZRegrDv6taZkOYXFLXvp6HfCVS9zXdnTLc-LgVkDNSZy-nBJtAgXdRSgJhXF0gHAjl36n1wC6LOGlB3fr5ieZ_zUq4dmJqnaAsAylD4MPy5xQauo5oGz49G6KUZIDPpsZm05_dUwyCM-SqJbmXw_1oBg`,
                 }
                 })
             
            try{
                const tracks = await requestTracks.json()
                setTracks(tracks.items)
            }
            catch(errores){

            }
        }
        requesrTracks()
        
    }
    const rolas = []
    for(var i = 0; i < tracks.length; i++){
        rolas.push(tracks[i].track.uri)
    }
    
    const playSong = (canciones) => {
        async function requestCanciones(req, res) {
            try{
                fetch(`https://api.spotify.com/v1/me/player/play`, {
                method: "PUT",
                headers: {
                    authorization: `Bearer BQCiCdO_p74bkw2CzOiLBiB7T4A5HtjwZDFFrAIHwBYA6o9dQdn0Y-IxvDajlSojAN7PXkmf5MDT3CGJADUw410cVLlHZrzweTfZR-0lCNnHRnNSJ7AEAjZRegrDv6taZkOYXFLXvp6HfCVS9zXdnTLc-LgVkDNSZy-nBJtAgXdRSgJhXF0gHAjl36n1wC6LOGlB3fr5ieZ_zUq4dmJqnaAsAylD4MPy5xQauo5oGz49G6KUZIDPpsZm05_dUwyCM-SqJbmXw_1oBg`,
                },
                body: JSON.stringify({
                    "uris": rolas,
                    "offset": {
                        "uri": canciones,
                    },
                    "position_ms": 0
                })
                
                })
            }
            catch(errores){

            }
        }
        requestCanciones()
        
    }
    
    const closeModal = () => setShow(false);
    const listas = useSelector(state => state.listas.items)
    const canciones = tracks
    return(
        <React.Fragment>
            
            <section className="gridPortadas container">
                <Titulo className="titulo" theme="white" contenido="Listas de reporducción"/>
                <Slide>               
                        {listas.map (item => (
                            <button key={item.id} onClick={() => openModal(item.id)}>
                                <Listas  contenidoName={item.name} ImagenUrl={item.images[0].url} ImagenAlt={item.description} contenidoTracks={item.tracks.total} contenidoOwner={item.owner.display_name} />
                            </button>


                        ))}

                </Slide>
            </section>

            <Modal closeModal={closeModal} show={show}>
               {canciones.map (rola => (
                   <li key={rola.track.id}>
                        <button onClick={() => playSong(rola.track.uri)}>
                            {rola.track.name}
                        </button>
                   </li>
                ))} 
            </Modal>
        </React.Fragment>
    )
}
export default Main