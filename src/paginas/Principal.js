import React from 'react';
import ReactDOM from 'react-dom';
import mapa from '../imagenes/mapa.png';

import '../estilos/principal.css';

const Principal = () => ( <
    div className = "container-fluid fondoPrincipal fondo" >
    <
    div class = "hero-text" > <
    h1 >
    Encuentra <
    /h1> <
    h2 > Tu lugar favorito < /h2></div >

    <
    img src = { mapa }
    class = "PosicionMapa" /
    >


    <
    button type = "button "
    class = "btn btn-danger boton-iniciar" >
    Iniciar Sesion < /button>

    <
    button type = "button"
    class = "btn btn-primary boton-registrar" > Registrarse < /button > < /
    div >
)

export default Principal