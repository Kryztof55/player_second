import React, { useState, useEffect  } from 'react';
import style from './style.scss';

const Modal = props => {
    const { show, closeModal } = props;
    return(
        <div className={show ? "overlay" : "hide"} onClick={closeModal}>
            <div className={show ? "show" : "hide"}>
                <header className="header-modal">
                    <h5 className="modal-title">Título del Modal</h5>
                    <button onClick={closeModal}>
                        <i className="material-icons">highlight_off</i>
                    </button>       
                </header>
                <div className="modal-body text" color-theme="white">Contenido Modal</div>
                <div className="modal-footer">Footer</div>
            </div>
        </div>
    )
    
}
export default Modal;