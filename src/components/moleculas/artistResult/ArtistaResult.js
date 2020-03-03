import React, { useState, useEffect  } from 'react';
import Img from '../../atomos/img/img'
import Text from '../../atomos/text/text'
import style from './style.scss';


const ArtistaResult= props => {
    const {imgArtist, textArtista} = props;
    return(
        <React.Fragment>
            <div className="artistResult">
                <img className="artistImg" src={imgArtist} alt="img"/>
                <p className="text display-artist" color-theme="white">{textArtista}</p>
            </div>
        </React.Fragment>
    )
} 
export default ArtistaResult;