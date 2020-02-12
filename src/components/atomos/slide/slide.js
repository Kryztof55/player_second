import React, { useState } from 'react';

import style from './style.scss';

const Slide = props =>   {
    return (
        <div className="slide">
            <div className="contenedor">
                <ul>
                    {props.children}
                </ul>
            </div>
        </div>
    );
}
export default Slide;