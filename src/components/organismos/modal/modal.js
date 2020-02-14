import React, { useState, useEffect  } from 'react';
import style from './style.scss';

const Modal = props => {
    const { show, closeModal } = props;
    return(
        <div className={show ? "overlay" : "hide"}>
            <div className={show ? "show modal" : "hide modal"}>
                <header className="header-modal">
                    <h5 className="modal-title">Contenido lista</h5>
                    <button onClick={closeModal}>
                        <i className="material-icons">highlight_off</i>
                    </button>       
                </header>
                <div className="modal-body text" color-theme="white">{props.children}</div>
                <div className="modal-footer">Footer</div>
            </div>
        </div>
    )
    
}
export default Modal;