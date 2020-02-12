import React, { useState, useEffect  } from 'react';
import Img from '../../atomos/img/img'
import Text from '../../atomos/text/text'
import style from './style.scss';

import Listas from '../listas/lista';
import Slide from '../../atomos/slide/slide';
import Titulo from '../../atomos/titulo/titulo';
import Modal from '../modal/modal'
import {useDispatch, useSelector } from 'react-redux';
//funciones actions redux

import {fetchList} from '../../../actions/actions';
const Main = props => {
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(fetchList())
      
    },[]);

    const [show, setShow] = useState(false);
    const openModal = () => setShow(true);
    const closeModal = () => setShow(false);
    
    const listas = useSelector(state => state.listas.items)
    return(
        <React.Fragment>
            <section className="gridPortadas container">
                <Titulo className="titulo" theme="white" contenido="Listas de reporducción"/>
                <Slide>
                    {listas.map (item => (
                        <Listas key={item.id} contenidoName={item.name} ImagenUrl={item.images[0].url} ImagenAlt={item.description} contenidoTracks={item.tracks.total} contenidoOwner={item.owner.display_name} />
                    ))}
                </Slide>
            </section>
            {!show && <button onClick={openModal}>Show modal</button>}
            <Modal closeModal={closeModal} show={show}/>
        </React.Fragment>
    )
}
export default Main