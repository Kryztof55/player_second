import React, { useState } from 'react';
import style from './style.scss';

const BtnRandom = props => {
    return (
        <button className={props.className + " btnRandom"} onClick={props.onClick}>
            <i className="material-icons">shuffle</i>
        </button>
    );
}
export default BtnRandom;