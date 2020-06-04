import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import Button from 'react'


const Editar = () => ( <
    div >
    <
    Button variant = "primary"
    onClick = { handleShow } >
    Launch demo modal <
    /Button>

    <
    Modal show = { show }
    onHide = { handleClose } >
    <
    Modal.Header closeButton >
    <
    Modal.Title > Modal heading < /Modal.Title> < /
    Modal.Header > <
    Modal.Body > Woohoo, you 're reading this text in a modal!</Modal.Body> <
    Modal.Footer >
    <
    Button variant = "secondary"
    onClick = { handleClose } >
    Close <
    /Button> <
    Button variant = "primary"
    onClick = { handleClose } >
    Save Changes <
    /Button> < /
    Modal.Footer > <
    /Modal> 

    <
    /div>

)


export default Editar