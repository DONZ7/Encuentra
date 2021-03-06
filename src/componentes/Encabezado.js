import React from 'react'
import '../Estructura.css';
import mapa from '../imagenes/mapa.png';
import { BrowserRouter , Route, Switch,Link} from 'react-router-dom'
import {useUser} from 'reactfire'
import 'firebase/firestore';
import 'firebase/auth';
import {firebase} from './Registro'

const Encabezado=(Registro)=>{
const user=useUser();


    return(
        <div className = "container-fluid" >
            <div className = "row" >
                <div className = "col" >
                    <h1 > Encuentra </h1> 
                    <img src = { mapa }
                    idth = "70"
                    height = "70"
                    className = "img"/>
                    <h6 > Tu lugar favorito </h6> 
                </div >

                <div className = "col text-right" > 
                    <Link to="/" >
                        <button className = "btn btn-danger btn-sm m-2" >Cerrar Sesion </button> 
                        </Link>   <br></br > <Link to="/Menu" >
                        <button className = "btn btn-success btn-lg m-2 " >Menu </button> </Link><br ></br >
                        <h3>{user.email} </h3 > 
                </div >
            </div >
        </div >
);
}
export default Encabezado