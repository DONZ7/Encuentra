import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import Button from 'react'


const Registro = () => ( <
    div className = "container" >
    <
    form >
    <
    div className = "row" >
    <
    div className = "form-group form-inline" >
    <
    label > Correo Electronico:
    <
    input type = "text"
    name = "correo"
    className = "form-control col-md-6"
    placeholder = "Correo Electronico" / > < /label>  < /
    div >

    <
    div className = "form-group form-inline" > <
    label > Contraseña:
    <
    input type = "password"
    name = "Contraseña"
    className = "form-control"
    placeholder = "Contraseña" / > < /label> < /div > < /div > < /
    form > < /div>

)


export default Registro