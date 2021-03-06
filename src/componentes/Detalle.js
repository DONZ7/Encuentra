import React from 'react';
import ReactDOM from 'react-dom';
import '../Estructura.css';
import Encabezado from '../componentes/Encabezado'
import Buscador from '../componentes/Buscador'
import TablaDetalle from '../componentes/TablaDetalle'
const Detalle = () => (
     <div >
        <header>
            <Encabezado/>
        </header >

        <section>

            <div className = "container" >
                    <Buscador/>
                <h2 > Visualizar lugares </h2>
                    < TablaDetalle/>

                <button className = "btn btn-danger btn-lg text-center" >Cargar mas </button> 
            </div>
  
        </section >


        <footer >
        </footer>



    </div>
)

export default Detalle