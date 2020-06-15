import React from 'react'
import { BrowserRouter , Route, Switch,Link} from 'react-router-dom'

const TablaDetalle=()=>(
    < div className="container ol-md-12 text-center">

    <
    table className = "table table-striped table-bordered table-condensed" >
    <
    thead className = "thead-dark" >
    <
    tr >
    <
    th scope = "col" > Codigo de Detalle < /th> <
    th scope = "col" > Latitud, Longitud < /th> <
    th scope = "col" > Fecha < /th>  <
    th scope = "col" > Acciones < /th> < /
    tr > <
    /thead> <
    tbody >
    <
    tr >
    <
    th scope = "row" > < /th> <
    td > < /td> <
    td > < /td> <
    td >

    <
    div class = "btn-group" >
    <
    button type = "button"
    class = "btn btn-primary" > Editar < /button> <
    button type = "button"
    class = "btn btn-danger" > Eliminar < /button>  < /
    div >

    <
    /td>< /
    tr > <
    /tbody> < /
    table >

    < /div>

   
)

export default TablaDetalle