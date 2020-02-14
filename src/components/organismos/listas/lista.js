import React, { useState, useEffect  } from 'react';
import Img from '../../atomos/img/img'
import Text from '../../atomos/text/text'
import style from './style.scss';

//funciones actions redux import React, {useState, useEffect} from 'react';
import openModal from '../../../globalFunctions'


const Listas = props => {
    return(
        
        <div className="item">
            <article  className="listas">
                <Text className="text display-artist" theme="white" contenido="Lista"/>
                <Text className="text display-lista" theme="white" contenido={props.contenidoName}/>
                <Img className="img thumb" ImagenUrl={props.ImagenUrl} ImagenAlt={props.ImagenAlt}/>
                <Text className="text display-cancion" theme="white" contenido={props.contenidoTracks + " Rolas"}/>
                <Text className="text display-artist" theme="white" contenido={props.contenidoOwner}/>
            </article>
        </div>

    )
}
export default Listas