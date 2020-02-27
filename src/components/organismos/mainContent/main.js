import React, { useState, useEffect  } from 'react';
import Img from '../../atomos/img/img'
import Text from '../../atomos/text/text'
import style from './style.scss';
import Jumbotron from '../../moleculas/jumbotron/jumbotron';
import Buscador from '../../atomos/buscador/buscador';

/* Token */

//import { authEndpoint, clientId, redirectUri, scopes } from "../config";
import hash from "../../../hash";

import Listas from '../listas/lista';
import Slide from '../../atomos/slide/slide';
import Titulo from '../../atomos/titulo/titulo';
import Modal from '../modal/modal'
import {useDispatch, useSelector } from 'react-redux';
//funciones actions redux

import {fetchList} from '../../../actions/actions';
import {fetchPlaylistSuccess} from '../../../actions/actions';
const Main = props => {
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(fetchList())
      
      
    },[]);

    let token = hash.access_token;

    const [show, setShow] = useState(false);
    const [tracks, setTracks] = useState([])
    const [inputList, setInputList] = useState("")
    const openModal = (listas) => {
        setShow(true);
        //console.log(listas[0].id)
        async function requesrTracks(){
            const requestTracks = await fetch(`https://api.spotify.com/v1/playlists/${listas}/tracks`, {
                 method: "GET",
                 headers: {
                     authorization: `Bearer ${token}`,
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
                    authorization: `Bearer ${token}`,
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
    let listas = useSelector(state => state.listas.items)
    const canciones = tracks


    const  filtrarListas = (evt) =>{
        //console.log(listas)
        setInputList(evt.target.value) 
        //console.log(inputList)
        var ListasNew = []
        listas.map((item, index) => {
            if(item.name.includes(inputList)){
                ListasNew.push(item)
                dispatch(fetchPlaylistSuccess(ListasNew))
            }
            else{
                
            }
        })

        
    }   
    return(
        <React.Fragment>
            <Jumbotron className="jumbotron">
                <Buscador color="white" value={inputList} placeholder="Buscar lista..." onChange={filtrarListas}/>
            </Jumbotron>

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