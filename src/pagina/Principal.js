import React from 'react';
import ReactDOM from 'react-dom';
import Registro from '../componentes/Registro'
import mapa from '../imagenes/mapa.png';
import  {useState} from 'react'
import '../estilos/principal.css';
import { BrowserRouter , Route, Switch,Link} from 'react-router-dom'
import {useFirebaseApp} from 'reactfire'
import 'firebase/auth';

const Principal = ({email,password,submit} ) =>{ 
   // const [email, setEmail] = useState('');
    //const [password, setPassword] = useState('');
    const [InicioSesion, setInicioSesion] = useState('Inicio');

 return(
    <div className = "container-fluid fondoPrincipal fondo" >
        < div className = "hero-text" > 
            <h1>Encuentra </h1> 
            <h2> Tu lugar favorito </h2>

            <Registro/> 
        </div >
            <img src = { mapa }
            className = "PosicionMapa"/>
            <Link  to="/Menu" >
                <button 
                type = "button "
                class = "btn btn-danger boton-registrar" 
                onClick={submit}>
                {InicioSesion}
                </button> 
            </Link>
     </div >
);
}

export default Principal