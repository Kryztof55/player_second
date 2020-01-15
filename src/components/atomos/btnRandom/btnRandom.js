import React, { useState } from 'react';
import style from './style.scss';

const BtnRandom = props => {
    return (
        <button className="btnRandom">
            <i className="material-icons">shuffle</i>
        </button>
    );
}
export default BtnRandom;