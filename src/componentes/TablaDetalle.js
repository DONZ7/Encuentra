import React from 'react'
import { useState, useEffect } from 'react'
import { BrowserRouter , Route, Switch,Link} from 'react-router-dom'
import { Modal ,ModalHeader, ModalBody ,FormGroup ,ModalFooter }  from  "reactstrap" ;
const TablaDetalle=()=>{
const [modalAbrir, setModalAbrir] = useState(false);
const [ informacion , setInformacion ] = useState ({
    lugaresId: '',
    nombre:'',
    disponibilidad:'',
    radio: '',
    puntos:'',
    tipo: '' }); 

    
//insertar datos del formulario 
  const insertarDatos = ( e ) =>{  
    setInformacion ({ 
      ... informacion , 
      [ e .target.name]:  e .target.value
    })
  
  }

// abrir modal

const mostrartModal=() =>{
    setModalAbrir(true);
 }
 
 //cerrar modal
 const ocultartModal=() =>{
   setModalAbrir(false);
 }
 
    return(
    < div className="container ol-md-12 text-center">

        <table className = "table table-striped table-bordered table-condensed" >
            <thead className = "thead-dark" >
                <tr >
                    <th scope = "col" > Codigo de Detalle </th> 
                    <th scope = "col" > Latitud, Longitud </th> 
                    <th scope = "col" > Fecha </th>  
                    <th scope = "col" > Acciones </th> 
                </tr > 
            </thead> 
            <tbody >
                <tr>
                    <th scope = "row" > </th> 
                    <td > </td> 
                    <td > </td> 
                    <td >
                        <div class = "btn-group" >
                        <button type = "button" class = "btn btn-primary" onClick={() =>mostrartModal()}> Editar </button> 
                        <button type = "button" class = "btn btn-danger" > Eliminar </button>  
                        </div>
                    </td>
                </tr> 
            </tbody> 
        </table >


        <Modal 
                isOpen={modalAbrir}>
                   <form > 
                          <ModalHeader>
                          <div className="container text-center"><h3>Editar detalle de Lugar</h3></div>
                          </ModalHeader>

                          <ModalBody>
                          <FormGroup >
                          < div className = "form-group form-inline" >
                            <label > Latitud:
                              <input type = "text"
                                className = "form-control"
                                placeholder = "Latitud"
                                name = "Latitud" 
                                value={informacion.nombre}
                                onChange={insertarDatos}/ >
                            </label>  
                          </div >
                         
                       
                    <div className = "form-group form-inline" >
                      <label > Longitud:
                        <input type = "text"
                        name = "Longitud" 
                        className = "form-control"
                        placeholder = "Longitud"
                        onChange={insertarDatos}
                        value={informacion.radio}
                        / >
                      </label >
                    </div> 
                   
                    < div className = "form-group form-inline" >
                      <label > Puntos de referencia:
                        <input type = "text"
                        name = "puntos" 
                        className = "form-control"
                        placeholder = "Puntos de referencia"
                        onChange={insertarDatos}
                        value={informacion.puntos}
                        / >
                      </label> 
                      </div >
                      
                   
                    
                    </FormGroup>     
                            
                    
                          </ModalBody>

                          <ModalFooter>
                          <div className=" container text-center">
                          <button className="btn btn-danger" 
                            type="button"
                            onClick={() =>{ocultartModal();
                             }}
                            >
                              Cancelar
                            </button>  {" "} 
                            <button class = "btn btn-primary" 
                            type="button"
                            onClick={() =>{ocultartModal();
                              //EnviarDatos()
                            }}>
                              Aceptar
                            </button>
                          </div>
                          </ModalFooter>
                          </form >
                </Modal>
            




    </div>

   
)
}
export default TablaDetalle