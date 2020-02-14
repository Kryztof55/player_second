import React, { useState } from 'react';
import onFocus from '../../moleculas/headBuscador/headBuscador'


import style from './style.scss'

const Buscador = props => {
    return (
        <React.Fragment>
            <input className="buscador" onFocus={props.onFocus} type="search" name="buscador" color={props.color} placeholder="Buscar música..."/>
        </React.Fragment>
    );
}
export default Buscador