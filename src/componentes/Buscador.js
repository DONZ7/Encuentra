import React from 'react'
import { BrowserRouter , Route, Switch,Link } from 'react-router-dom'

const Buscador = () => { 

    return(
    <div className = "container" >
        <div className = "row" >
            <div className = "col-md-12 jumbotron justify-content-center" >
                <form className = "form-inline my-2 my-lg-0 col-md-12" >
                    <input className = "btn btn-outline-primary my-2 my-sm-0 "
                    type = "submit"
                    value = "Buscar"/>
                    <input className = "form-control col-md-10"
                    type = "text"
                    placeholder = "Buscar Lugares por nombre"/>
                    <button className = "btn btn-outline-success my-2 my-sm-0 "
                    type = "button" > Limpiar </button> 
                   
                </form >
            </div >
        </div >
    </div >

    )
};

export default Buscador