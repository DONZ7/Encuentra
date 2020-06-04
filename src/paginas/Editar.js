import React from 'react';
import ReactDOM from 'react'
const Editar = () => ( <
    div className = "container" >

    <
    h2 > Agregar detalle de lugares < /h2> <
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
    /div >



)


export default Editar