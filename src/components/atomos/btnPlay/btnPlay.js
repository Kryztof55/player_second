import React, { useState } from 'react';
import style from './style.scss';

const BtnPlay = props => {
    return (
        <button className="btn btnPlay" onClick={props.onClick}>
          {props.children}
          
        </button>       
    );
}
export default BtnPlay;