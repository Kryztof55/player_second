import React, { useState } from 'react';
import Jumbotron from '../jumbotron/jumbotron';
import Buscador from '../../atomos/buscador/buscador';

import style from './style.scss';

const HeaderBuscador= props => {
    return (
        <div className="headBuscador">
            <Jumbotron>
                <Buscador color="white"/>
            </Jumbotron>
        </div>
    );
}
export default HeaderBuscador;