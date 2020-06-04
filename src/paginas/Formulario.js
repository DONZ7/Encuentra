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
    imput type = "text"
    className = "form-control"
    placeholder = "Nombre"
    name = "nombre" / >
    <
    /label >  < /
    div >

    <
    div className = "form-group " >
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
    imput type = "text"
    className = "form-control"
    placeholder = "Nombre" / >
    <
    /
    label >
    <
    /div> <
    div className = "form-group form-inline" >
    <
    label > Puntos de referencia:
    <
    imput type = "text"
    className = "form-control"
    placeholder = "Nombre" / >
    <
    /label> < /
    div >

    <
    div className = "form-group form-inline" >
    <
    label > Tipo: <
    imput type = "text"
    className = "form-control"
    placeholder = "Nombre" / >

    <
    /label>


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


export default Formulario