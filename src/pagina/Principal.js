import React from 'react';
import ReactDOM from 'react-dom';
import Registro from '../componentes/Registro'
import mapa from '../imagenes/mapa.png';
import  {useState} from 'react'
import '../estilos/principal.css';
import { BrowserRouter , Route, Switch,Link} from 'react-router-dom'

const Principal = () =>{ 
    const [InicioSesion, setInicioSesion] = useState('Inicio Sesion');

    const handleClick= () => {
        alert('Para más información, acuda a recepción.');
  }
 return(


    <
    div className = "container-fluid fondoPrincipal fondo" >
    <
    div class = "hero-text" > <
    h1 >
    Encuentra <
    /h1> <
    h2 > Tu lugar favorito < /h2>
    <Registro/> </div >
    
    <
    img src = { mapa }
    class = "PosicionMapa" /
    >
   
    <Link  to="/Menu" >
    <
    button 
    type = "button "
    class = "btn btn-danger boton-registrar" 
    >
    {InicioSesion}
    < /button> </Link>

    <
    button type = "button"
    class = "btn btn-primary boton-iniciar" > Registrarse < /button > < /
    div >
)
}

export default Principal