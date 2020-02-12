import React, { useState, useEffect  } from 'react';
import Img from '../../atomos/img/img'
import Text from '../../atomos/text/text'
import style from './style.scss';

//funciones actions redux import React, {useState, useEffect} from 'react';
import openModal from '../../../globalFunctions'


const Listas = props => {
    return(
        <li className="item">
            <button onClick={openModal}>
                <article  className="listas">
                    <Text className="text display-artist" theme="white" contenido="Lista"/>
                    <Text className="text display-lista" theme="white" contenido={props.contenidoName}/>
                    <Img className="img thumb" ImagenUrl={props.ImagenUrl} ImagenAlt={props.ImagenAlt}/>
                    <Text className="text display-cancion" theme="white" contenido={props.contenidoTracks + " Rolas"}/>
                    <Text className="text display-artist" theme="white" contenido={props.contenidoOwner}/>
                </article>
            </button>
        </li>

    )
}
export default Listas