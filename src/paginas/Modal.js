import React, { useState } from 'react'
import Modal from 'react-modal'




function Modalx() {
    const [modalIsOpen, setModalIsOpen] = useState(false)

    return ( <
        div >
        <
        button onClick = {
            () => setModalIsOpen(true)
        } > agregar < /button> 


        <
        div className = "w-auto p-3" >
        <
        Modal dialog centered className = "container"
        isOpen = { modalIsOpen }
        shouldCloseOnOverlayClick = { false }
        onRequestClose = {
            () => setModalIsOpen(false)
        } >
        <
        div className = "modal-header" >
        <
        div className = "modal-title" > Agregar < /div> < /
        div > <
        div className = "modal-body" > <
        div >
        <
        form >

        <
        div className = "form-group form-inline" >
        <
        label > Latitud:
        <
        imput type = "text"
        className = "form-control"
        placeholder = "Latitu"
        name = "Latitud" / >
        <
        /label >  < /
        div >



        <
        div className = "form-group form-inline" >
        <
        label > Longitud:
        <
        imput type = "text"
        className = "form-control"
        placeholder = "Longitud" / >
        <
        /
        label >
        <
        /div>


        <
        button type = "submit"
        value = "submit"
        className = "btn btn-danger" > Agregar <
        /button>



        <
        /form>



        <
        /div > < /div >
        <
        /Modal >  < /
        div > < /
        div >
    )
}

export default Modalx