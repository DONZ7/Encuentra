import React from 'react'
import '../Estructura.css';
import mapa from '../imagenes/mapa.png';
import { BrowserRouter , Route, Switch,Link} from 'react-router-dom'


const Encabezado=()=>(

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
div class = "col text-right" > 
<Link to="/Inicio" ><
button class = "btn btn-danger btn-sm m-2" >
Cerrar Sesion < /button> </Link>   <br ></br > <Link to="/Menu" ><
button class = "btn btn-success btn-lg m-2 " >
Menu < /button> </Link><br ></br >
<
h3 > dzambranoz7 @gmail.com < /h3 > < /
div >
<
/
div >
<
/
div >
)

export default Encabezado