import React, { useState } from 'react';
import style from './style.scss';

const Titulo = props =>  {
    
        return (
            <h1 className={props.className} color-theme={props.theme}>{props.contenido}</h1>
        );
    
}
export default Titulo