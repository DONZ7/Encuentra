import React from 'react';
import ReactDOM from 'react-dom';
import Buscador from '../componentes/Buscador'
import '../Estructura.css';
//import axios from 'axios';
import Encabezado from '../componentes/Encabezado'
import Formulario from '../componentes/Formulario'
import { BrowserRouter , Route, Switch,Link} from 'react-router-dom'

const Estructura = (props) =>{
    
    return  ( 
        <div >
            <header >
                <Encabezado />
            </header >
            <section >
                <div className = "container" >
                    <div className = "row" >
                        <div className = "col-md-12 text-center" >
                        <Buscador/>
                        <Formulario/>
                        </div> 
                    </div>
                    <button className = "btn btn-danger btn-lg text-center">Cargar mas </button>  
                </div>
            </section >
            <footer >
            </footer>
        </div>
);
}
export default Estructura