import React from 'react';
import ReactDOM from 'react-dom';
import Buscador from '../componentes/Buscador'
import '../Estructura.css';

import Encabezado from '../componentes/Encabezado'
import { BrowserRouter , Route, Switch,Link} from 'react-router-dom'

const Estructura = () => ( <
    div >
    <
    header >
    <
    Encabezado / >
    <
    /
    header >

    <
    section >

    <
    div className = "container" >
    <
    div className = "row" >


    <
    div className = "col-md-12 text-center" >

    <
    Buscador / >





    <
    h2 > Visualizar lugares < /h2> <
    table className = "table table-striped table-bordered table-condensed" >
    <
    thead className = "thead-dark" >
    <
    tr >
    <
    th scope = "col" > Nombre < /th> <
    th scope = "col" > disponibilidad < /th> <
    th scope = "col" > Radio < /th> <
    th scope = "col" > Puntos de referencia < /th>  <
    th scope = "col" > Tipos < /th > <
    th scope = "col" > Acciones < /th > < /
    tr > <
    /thead> <
    tbody >
    <
    tr >
    <
    th scope = "row" > < /th> <
    td > < /td> <
    td > < /td><
    td > < /td> <
    td > < /td> <
    td >

    <
    div class = "btn-group" >
    <
    button type = "button"
    class = "btn btn-primary" > Editar < /button> <
    button type = "button"
    class = "btn btn-danger" > Eliminar < /button><Link to="/Detalle"> <
    button type = "button"
    class = "btn btn-success" > Ver < /button></Link>< /
    div >

    <
    /td>< /
    tr > <
    /tbody> < /
    table >


    <
    /
    div > < /
    div >

    <
    button class = "btn btn-danger btn-lg text-center" >
    Cargar mas < /button>  


    <
    /div>

    <
    /
    section >


    <
    footer >

    <
    /footer>



    <
    /div>
)

export default Estructura