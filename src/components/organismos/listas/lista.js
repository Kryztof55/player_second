import React, { useState, useEffect  } from 'react';
import Img from '../../atomos/img/img'
import Text from '../../atomos/text/text'
import style from './style.scss';
import {useDispatch, useSelector } from 'react-redux';
//funciones actions reduximport React, {useState, useEffect} from 'react';

import {fetchList} from '../../../actions/actions';

const Listas = props => {
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(fetchList())
    },[]);
    
    const listas = useSelector(state => state.listas.items)
    console.log(listas)
    return(
        <ul>
            {listas.map (item => (
                <article key={item.id} className="listas">
                    <Text className="text display-artist" theme="white" contenido="Lista"/>
                    <Text className="text display-lista" theme="white" contenido={item.name}/>
                    <Img className="img thumb" ImagenUrl={item.images[0].url} ImagenAlt={item.description}/>
                    <Text className="text display-cancion" theme="white" contenido={item.tracks.total + " Rolas"}/>
                    <Text className="text display-artist" theme="white" contenido={item.owner.display_name}/>
                </article>
            ))}
        </ul>    
    )
}
export default Listas