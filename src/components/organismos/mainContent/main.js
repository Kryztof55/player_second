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
        fetch(`https://api.spotify.com/v1/playlists/${listas}/tracks`, {
        method: "GET",
        headers: {
            authorization: `Bearer BQAvdTP5o5RbfHYzQV3UMBJRB3eOXIhnIAh21yY3rguKCegqNsoc4ZtAMSuvC9k_dxsTYtK7UihPTpaCal6gyOsAPyzuoHzWA22YAI-9K-V1uT6Gn80D9Ap0XitzXY4Mo7PF4pz0MP6nYWxNUyltoM98RVNhk2XdRMKcgFHepM8tWZCtmVTBvaXxFL18M1KaVM02u6P2CGc_-0z5zwnv0_rMdQihqMPHPegQ0J6HU4PN02au8jFEGVu_QyT0WO5IXyFeCztfeG1elQ`,
        }
        })
        .then((response) => {
            return response.json();
        })
        
        .then((tracks) => {
            //console.log(tracks.items)

            return (setTracks(tracks.items));
            
        })
        .catch((error) =>{
            console.log(error)
        })
        

        
    }
    const rolas = []
    for(var i = 0; i < tracks.length; i++){
        rolas.push(tracks[i].track.uri)
    }
    
    const playSong = (cancion) => {
        fetch(`https://api.spotify.com/v1/me/player/play`, {
        method: "PUT",
        headers: {
            authorization: `Bearer BQAvdTP5o5RbfHYzQV3UMBJRB3eOXIhnIAh21yY3rguKCegqNsoc4ZtAMSuvC9k_dxsTYtK7UihPTpaCal6gyOsAPyzuoHzWA22YAI-9K-V1uT6Gn80D9Ap0XitzXY4Mo7PF4pz0MP6nYWxNUyltoM98RVNhk2XdRMKcgFHepM8tWZCtmVTBvaXxFL18M1KaVM02u6P2CGc_-0z5zwnv0_rMdQihqMPHPegQ0J6HU4PN02au8jFEGVu_QyT0WO5IXyFeCztfeG1elQ`,
        },
        body: JSON.stringify({
            "uris": rolas,
            "position_ms": 0
          })
        
        })
    }
    
    const closeModal = () => setShow(false);
    const listas = useSelector(state => state.listas.items)
    const canciones = tracks
    //console.log(canciones)
    /* for(var i = 0 ; i < canciones.length; i++){
        console.log(canciones[i])

    } */
    /* canciones.map(rola => (
        console.log(rola.track.name)
    )) */
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
                        <button onClick={() => playSong(rola)}>
                            {rola.track.name}
                        </button>
                        
                   </li>
                ))} 
            </Modal>
        </React.Fragment>
    )
}
export default Main