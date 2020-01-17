import React, { useState } from 'react';
import Img from '../../atomos/img/img'
import Text from '../../atomos/text/text'

import style from './style.scss';

const portadaCurrent = props => {
        return (
            <div className="player">
                <Text className="text display-artist" theme="white" contenido={props.artistName}/>
                <Text className="text display-artist" theme="white" contenido={props.albumName}/>
                <Img className="img thumb" ImagenUrl={props.albumImg} ImagenAlt={props.artistName}/>
                <Text className="text display-cancion" theme="white" contenido={props.trackName}/>
            </div>
        );
    
}
export default portadaCurrent;