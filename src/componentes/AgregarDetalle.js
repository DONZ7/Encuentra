import React from 'react';
import ReactDOM from 'react'
import { BrowserRouter , Route, Switch,Link} from 'react-router-dom'

const AgregarDetalle = () => ( <
    div className = "container" >

    <
    h2 > Agregar detalle de lugares < /h2> <
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
    placeholder = "Longitud" / >
    <
    /
    label >
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


export default AgregarDetalle