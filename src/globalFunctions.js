import React, { useState, useEffect  } from 'react';
import Modal from './components/organismos/modal/modal'
const openModal = () => {
    const body = document.body
    let modalLista = document.getElementById("modal-listas")
    if(!body.classList.contains("modal-open")){
        document.body.className = "modal-open"
        const back = document.createElement("div")
        back.className = "background"
        document.body.appendChild(back)
    }
    else{

    }
    /* En realidad tendría que ser con redux setear el state deñ modal */
    console.log(Modal.props_useState)

}
export default openModal