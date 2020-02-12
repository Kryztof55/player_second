import React, { useState } from 'react';


import style from './style.scss'

const Buscador = props => {
    return (
        <React.Fragment>
            <input className="buscador" type="search" name="buscador" color={props.color} placeholder="Buscar música..."/>
        </React.Fragment>
    );
}
export default Buscador