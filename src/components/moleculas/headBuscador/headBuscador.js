import React, { useState, useEffect  } from 'react';
import Jumbotron from '../jumbotron/jumbotron';
import Buscador from '../../atomos/buscador/buscador';
import ArtistaResult from '../artistResult/ArtistaResult'
import style from './style.scss';
import hash from "../../../hash";


const HeaderBuscador= props => {
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

    return (
        <div className="headBuscador">
            <Jumbotron className="jumbotron">
                <Buscador color="white" onChange={buscar} placeholder="Buscar música..."/>
            </Jumbotron>
            <Jumbotron className={ showSearch ? "jumbotron clearer" : "jumbotron hidden"}>
                {
                searching?
                    search.artists.items.map(item => (
                        //<ArtistaResult imgArtist={item.images.url} />
                        //console.log(item.images[0].url)
                        item.images.length? 
                            //console.log(item)
                            <ArtistaResult imgArtist={item.images[0].url} textArtista={item.name}/>
                            : 
                            console.log("no resultados en artistas")
                        
                    )) 
                    

                    
                
                :
                    <ArtistaResult />
                }
                {
                searching?
                //console.log(search.tracks)
                    search.tracks.items.map(item => (
                        //<ArtistaResult imgArtist={item.images.url} />
                        //console.log(item.images[0].url)
                        //console.log(item)
                        <ArtistaResult imgArtist={item.album.images[0].url} textArtista={item.name}/>
                        //item.length? 
                            //console.log(item.items.album.images[0].url)
                            //<ArtistaResult imgArtist={item.items.album.images[0].url} textArtista={item.items.name}/>
                            //: 
                            //console.log("no resultados en tracks")
                        
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