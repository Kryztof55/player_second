import React, { useState } from 'react';
import style from './style.scss';

const Controls = props => {

    return (
        <div className="controls">
            {props.children}
        </div>
    );
}
export default Controls