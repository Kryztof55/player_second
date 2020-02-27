import React, { useState, useEffect  } from 'react';
import Jumbotron from '../jumbotron/jumbotron';
import Buscador from '../../atomos/buscador/buscador';
import {useDispatch, useSelector } from 'react-redux';
import style from './style.scss';


/* Ejemplo de buscar */

import Listas from '../../organismos/listas/lista';
import Slide from '../../atomos/slide/slide';


import {fetchList} from '../../../actions/actions';

const HeaderBuscador= props => {

    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(fetchList())
      
      
    },[]);
    
    const [showSearch, setShowSearch] = useState(false);
    const buscar = () =>{
        setShowSearch(true)
    }
    const closeSearch = () =>{
        setShowSearch(false)
    }

    return (
        <div className="headBuscador">
            <Jumbotron className="jumbotron">
                <Buscador color="white" onFocus={buscar} placeholder="Buscar música..."/>
            </Jumbotron>
            <Jumbotron className={ showSearch ? "jumbotron clearer" : "jumbotron hidden"}>
                Aqui van las cards de los resultados de la busquedas
                <button onClick={closeSearch}>
                    Cerrar por ahora
                </button>
            </Jumbotron>
        </div>
    );
}
export default HeaderBuscador;