import React, { useState } from 'react';
import style from './style.scss';

const Text = props => {
    return (
        <p className={props.className} color-theme={props.theme}>{props.contenido}</p>
    );
    
}
export default Text