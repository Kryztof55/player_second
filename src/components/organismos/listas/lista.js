import React, { useState, useEffect  } from 'react';
import Img from '../../atomos/img/img'
import Text from '../../atomos/text/text'
import style from './style.scss';
import {useDispatch, useSelector } from 'react-redux';
//funciones actions redux

import {requestPlaylist} from '../../../actions/playListRequest'

const Listas = props => {
    const [nombreLista, lista] = useState("");
    const [imagLista, img] = useState([]);
    const [numeroCanciones, tracks] = useState("");
    const [duracionLista, duracion] = useState("");
;

    const dispatch = useDispatch()
    useEffect(() => {
        
        console.log("desde lista")
        const getPlaylist = () => dispatch(requestPlaylist() )
        getPlaylist()
      });
    return(
        <article className="listas">
            <Text className="text display-artist" theme="white" contenido="Lista"/>
            <Text className="text display-lista" theme="white" contenido="Nombre de la lista"/>
            <Img className="img thumb" ImagenUrl="{props.albumImg}" ImagenAlt="{props.artistName}"/>
            <Text className="text display-cancion" theme="white" contenido="48 Canciones"/>
            <Text className="text display-artist" theme="white" contenido="3h 40 min "/>
        </article>
    )
}
export default Listas