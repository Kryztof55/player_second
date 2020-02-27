import React, { useState } from 'react';
import onFocus from '../../moleculas/headBuscador/headBuscador'


import style from './style.scss'

const Buscador = props => {
    return (
        <React.Fragment>
            <input className="buscador" value={props.value} onFocus={props.onFocus} onChange={props.onChange}  onInput={props.onInput} type="search" name="buscador" color={props.color} placeholder={props.placeholder}/>
        </React.Fragment>
    );
}
export default Buscador