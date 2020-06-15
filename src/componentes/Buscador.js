import React from 'react'
import { BrowserRouter , Route, Switch,Link } from 'react-router-dom'

const Buscador = () => { 



    return(
    <
    div className = "container" >
    <
    div className = "row" >


    <
    div className = "col-md-12 jumbotron" >


    <
    form class = "form-inline my-2 my-lg-0 col-md-12" >

    <
    input class = "btn btn-outline-primary my-2 my-sm-0 "
    type = "submit"
    value = "Buscar" / >
    <
    input className = "form-control col-md-6"
    type = "text"

    placeholder = "Buscar Lugares por nombre" / >
    <
    button class = "btn btn-outline-success my-2 my-sm-0 "
    type = "button" > Limpiar < /button> 
    <Link  to="/Formulario" >
    <
    button class = "btn btn-danger my-2 my-sm-0 ml-4 "
    type = "button" > Anadir < /button> 
    
    </Link>
    <
    /
    form >

    <
    /
    div >
    <
    /
    div >
    <
    /
    div >




    )
};

export default Buscador