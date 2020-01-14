import React, {Component} from 'react';
import Img from '../../atomos/img/img'
import Text from '../../atomos/text/text'

import style from './style.scss';

class Player extends Component {
    render(){
        return (
            <div className="player">
                <Text className="text display-artist" theme="white" contenido="Artista"/>
                <Text className="text display-artist" theme="white" contenido="Nombre del Album"/>
                <Img className="img thumb" ImagenUrl="" ImagenAlt="Aquí Imagen "/>
                <Text className="text display-cancion" theme="white" contenido="nombre de la"/>
            </div>
        );
    }
}
export default Player;