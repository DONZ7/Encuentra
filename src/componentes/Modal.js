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
        Modal className = "modal-dialog"
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
        div className = "modal-body" > 
        <
        form >

        <
        div className = "form-group form-inline" >
        <
        label > Latitud:
        <
        input type = "text"
        className = "form-control"
        placeholder = "Latitud"
        name = "Latitud" / >
        <
        /label >  < /
        div >



        <
        div className = "form-group form-inline" >
        <
        label > Longitud:
        <
        input type = "text"
        className = "form-control"
        placeholder = "Longitud" 
        name = "Longitud"/ >
        <
        /
        label >
        <
        /div>


        <
        button type = "submit"
        value = "submit"
        className = "btn btn-danger" 
    
        > Agregar <
        /button>



        <
        /form>



        <
        /div > 
        <
        /Modal >  < /
        div > < /
        div >
    )
}

export default Modalx