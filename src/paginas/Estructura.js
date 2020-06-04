import React from 'react';
import ReactDOM from 'react-dom';
import '../Estructura.css';
import mapa from '../imagenes/mapa.png';
const Estructura = () => ( <
    div >
    <
    header >
    <
    div class = "container-fluid" >
    <
    div class = "row" >
    <
    div class = "col" >

    <
    h1 > Encuentra < /h1>   <
    img src = { mapa }
    idth = "70"
    height = "70"
    class = "img" / >
    <
    h6 > Tu lugar favorito < /h6> < /
    div >
    <
    div class = "col text-right" > <
    button class = "btn btn-danger btn-sm m-2" >
    Cerrar Sesion < /button>    <br ></br > <
    button class = "btn btn-success btn-lg m-2 " >
    Menu < /button> <br ></br >
    <
    h3 > dzambranoz7 @gmail.com < /h3 > < /
    div >
    <
    /
    div >
    <
    /
    div >
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
    /
    div > <
    div className = "col text-center lg-12" >
    <
    div >


    <
    form class = "form-inline my-2 my-lg-0 " >

    <
    button class = "btn btn-outline-primary my-2 my-sm-0  "
    type = "button" > Buscar < /button>  <
    div > < /div> <
    imput className = "form-control"
    type = "text"

    placeholder = "Nombre" >

    <
    /imput><
    button class = "btn btn-outline-success my-2 my-sm-0 "
    type = "button" > Limpiar < /button> 

    <
    button class = "btn btn-danger my-2 my-sm-0 ml-4"
    type = "button" > Anadir < /button> 

    <
    /
    form >

























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
    class = "btn btn-danger" > Eliminar < /button> <
    button type = "button"
    class = "btn btn-success" > Ver < /button> < /
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
    /div>


    <
    button class = "btn btn-danger btn-lg text-center" >
    Cargar mas < /button>  < /
    section >


    <
    footer >

    <
    /footer>



    <
    /div>
)

export default Estructura