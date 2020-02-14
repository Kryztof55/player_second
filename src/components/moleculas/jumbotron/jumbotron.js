import React, { useState } from 'react';
import style from './style.scss';

const Jumbotron = props => {
    return (
        <div className={props.className} color-theme="white">{props.children}</div>
    );
}
export default Jumbotron