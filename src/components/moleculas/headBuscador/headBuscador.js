import React, { useState, useEffect  } from 'react';
import Jumbotron from '../jumbotron/jumbotron';
import Buscador from '../../atomos/buscador/buscador';
import ArtistaResult from '../artistResult/ArtistaResult'
import style from './style.scss';
import hash from "../../../hash";

import Modal from '../../organismos/modal/modal'
const HeaderBuscador= pros => {
    const [showSearch, setShowSearch] = useState(false);
    const [search, setSearch] = useState();
    const [imgArtist, setImgArtist] = useState("direccion de imagen default")
    const [textArtista, setTextArtista] = useState("Artista")
    const [searching, setSearching] = useState(false)
    let token = hash.access_token;

    const buscar = (eve) =>{
        let val = eve.target.value.toLowerCase()
        if(val != ""){
            async function requesSerch(){
                const searching = await fetch(`https://api.spotify.com/v1/search?q=${val}&type=track,artist&limit=3`, {
                     method: "GET",
                     headers: {
                         authorization: `Bearer ${token}`,
                     }
                     })
                 
                try{
                    const responseSearch = await searching.json()

                    setSearch(responseSearch)
                    setImgArtist(responseSearch.artists.items[0].images[0].url)
                    setSearching(true)
                    //console.log(responseSearch)
                    //console.log(search)
                
                }
                catch(errores){
    
                }
            }
            requesSerch()
            setShowSearch(true)
        }
        else{
            setShowSearch(false)
        }

        
    }
    
    const closeSearch = () =>{
        setShowSearch(false)
    }
    /* Modal */
    const [show, setShow] = useState(false);
    const [track, setTrack] = useState("");
    const openModal = (track) => {
        setShow(true);
        //console.log(track)
        setTrack(track)
        
    }
    /* Add to queue */   
    const addToQueue = () =>{
        fetch(`https://api.spotify.com/v1/me/player/queue?uri=${track.uri}`, {
        method: "POST",
        headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        }
    });
    console.log(track.uri)
    }
    /* play */
    const rolas = [track.uri]
    const playSong = () => {
            fetch(`https://api.spotify.com/v1/me/player/play`, {
            method: "PUT",
            headers: {
                authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                "uris": rolas,
                "position_ms": 0
                })
            
            })
        }
        
        
        
    
    const closeModal = () => setShow(false);
    
    
    return (
        <div className="headBuscador">
            <Jumbotron className="jumbotron">
                <Buscador color="white" onChange={buscar} placeholder="Buscar música..."/>
            </Jumbotron>
            <Jumbotron className={ showSearch ? "jumbotron clearer" : "jumbotron hidden"}>
                {
                searching?
                    search.artists.items.map(item => (
                        item.images.length? 
                        <ArtistaResult key={item.id} imgArtist={item.images[0].url} textArtista={item.name}/>
                        : 
                        console.log("no resultados en artistas")
                        
                    )) 
                :
                    <ArtistaResult/>
                }
                <hr/>                
                {
                searching?
                    search.tracks.items.map(item => (
                        <div key={item.id}>
                            <ArtistaResult  imgArtist={item.album.images[0].url} textArtista={item.name} onClick={()=> openModal(item)}/>
                            <Modal closeModal={closeModal} show={show}>
                                <button className="text" color-theme="white" onClick={() => playSong(item)}>Play</button>
                                <button className="text" color-theme="white" onClick={() => addToQueue(item)}>Agregar a la cola</button>
                            </Modal>    
                        </div>
                    )) 
                :
                    <ArtistaResult />
                }
                
                <button onClick={closeSearch}>
                    Cerrar por ahora
                </button>
            </Jumbotron>
            
        </div>
    );
}
export default HeaderBuscador;