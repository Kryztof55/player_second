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
            authorization: `Bearer BQBcpnn9NafwXOMHIbCdR8Xrr05s4Z_ih8VfBmYHnJKfbD0l0e4l2br4yeTy-fV_nDFu_A7VdJg5fN5TrfDZVQvFWntj7zwvJ3rruFv33uADsGstCDfz4_c8KqP5RTZmoRI9127MdHSgi9wdexcnnEzQ0Strxzazs7imuoXub9fuJBqvP6Tw6eThEuAYcRORMSfsjRi--s0sOwSuAim4de0w8pio3J-2NAPG7FB05xKjEeq1Hqv_pN4m2mG6usEC3fwXm4eSCwQ8Xg`,
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
    const playSong = () => {
        fetch(`https://api.spotify.com/v1/me/player/play`, {
        method: "PUT",
        headers: {
            authorization: `Bearer BQBcpnn9NafwXOMHIbCdR8Xrr05s4Z_ih8VfBmYHnJKfbD0l0e4l2br4yeTy-fV_nDFu_A7VdJg5fN5TrfDZVQvFWntj7zwvJ3rruFv33uADsGstCDfz4_c8KqP5RTZmoRI9127MdHSgi9wdexcnnEzQ0Strxzazs7imuoXub9fuJBqvP6Tw6eThEuAYcRORMSfsjRi--s0sOwSuAim4de0w8pio3J-2NAPG7FB05xKjEeq1Hqv_pN4m2mG6usEC3fwXm4eSCwQ8Xg`,
        }
        })
    }
    
    const closeModal = () => setShow(false);
    const listas = useSelector(state => state.listas.items)
    const canciones = tracks
    console.log(canciones)
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
                        <button onClick={() => playSong(rola.track.id.uri)}>
                            {rola.track.name}
                        </button>
                   </li>
                ))} 
            </Modal>
        </React.Fragment>
    )
}
export default Main