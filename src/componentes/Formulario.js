import React from 'react';
import ReactDOM from 'react'
const Formulario = () => ( <
    div className = "container" >
    <
    h2 > Agregar detalle de lugares < /h2> <
    form >
    <
    div className = "form-group form-inline" >
    <
    label > Nombre:
    <
    input type = "text"
    className = "form-control"
    placeholder = "Nombre"
    name = "nombre" / >
    <
    /label >  < /
    div >

    <
    div className = "form-group form-inline" >
    <
    label > Disponibilidad:



    <
    form >
    <
    div className = "radio" >
    <
    label >
    <
    input type = "radio"
    value = "option1"
    checked = { true }
    />
    Disponible <
    /label> < /
    div > <
    div className = "radio" >
    <
    label >
    <
    input type = "radio"
    value = "option2" / >
    No disponible <
    /label> < /
    div > <
    /form>







    <
    /label>  < /
    div >

    <
    div className = "form-group form-inline" >
    <
    label > Radio de disponibilidad:
    <
    input type = "text"
    className = "form-control"
    placeholder = "Radio de disponibilidad" / >
    <
    /
    label >
    <
    /div> <
    div className = "form-group form-inline" >
    <
    label > Puntos de referencia:
    <
    input type = "text"
    className = "form-control"
    placeholder = "Puntos de referencia" / >
    <
    /label> < /
    div >

    <
    div className = "form-group form-inline" >
    <
    label > Tipo: <
    input type = "text"
    className = "form-control"
    placeholder = "Tipo" / >

    <
    /label>


    <
    /div>




    <
    input type = "submit"
    value = "Agregar"
    className = "btn btn-danger" / >



    <
    /form>


    <
    /div >



)


export default Formulario