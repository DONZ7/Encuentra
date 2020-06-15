import React,{ useState, useEffect } from 'react'
import { BrowserRouter , Route, Switch,Link} from 'react-router-dom'
import { Modal ,ModalHeader, ModalBody ,FormGroup ,ModalFooter }  from  "reactstrap" ;

import ReactDOM from 'react'
import Encabezado from '../componentes/Encabezado'
import Buscador from '../componentes/Buscador'
import TablaDetalle from '../componentes/TablaDetalle'

import axios from 'axios';

const Formulario = () => { 
    const [Nombre, setNombre] = useState('');
    const [Disponibilidad, setDisponibilidad] = useState('');
    const [Radio, setRadio] = useState('');
    const [Puntos, setPuntos] = useState('');
    const [Tipos, setTipos] = useState('');
    var [dato, setdato] = useState([ ]);
    var [tabla, settabla] = useState([ ]);

    
    const [modalAbrir, setModalAbrir] = useState(false);
    const [modalCerrar, setModalCerrar] = useState(false);

//obtener datos de  la base de datos
    useEffect(() =>{
      axios.get('https://us-central1-encuentra-e2a48.cloudfunctions.net/verlugares')
      .then(res=>{settabla(res.data);})
    })

    //insertar

    const informacion = {
      nombre:Nombre,
      disponibilidad:'Disponibilidad',
      radio: Radio,
      puntos:Puntos,
      tipo: Tipos };


const  handleChange=(e) =>{ console.log('prueba')
  }


    //insertar datos en la base de datos 
    const insertarDatos= (e) =>{
      
      dato.push(informacion);
       axios.post('https://us-central1-encuentra-e2a48.cloudfunctions.net/lugares',dato )
       .then(re=>{
  
          console.log(dato);
    }).catch(e => {
      console.log('tabla');
  });
    }
     

//enviar datos del formulario a firebase
    const submit=async(e) =>{
     e.preventDefault();  
     insertarDatos();
    
     
  };



// abrir modal

const mostrartModal=() =>{
   setModalAbrir(true);
}

const ocultartModal=() =>{
  setModalAbrir(false);
}

    return(                                     
      <div>
                <button class="btn align-content-center btn-danger"  onClick={() =>mostrartModal()}> Añadir</button>
                <br></br>
                <h2 > Visualizar lugares </h2> 
                <div className="container" >
                < table className = "table table-striped table-bordered table-condensed" >
                  < thead className = "thead-dark" >
                    <tr >
                    <th scope = "col" > Nombre </th> 
                    <th scope = "col" > disponibilidad </th> 
                    <th scope = "col" > Radio </th> 
                    <th scope = "col" > Puntos de referencia </th>  
                    <th scope = "col" > Tipos </th > 
                    <th scope = "col" > Acciones </th > 
                    </tr > 

                  </thead> 
                  <tbody >
                  { tabla.map((elemento,index)=>(
                    <tr  >
                      <th >{elemento.nombre}</th> 
                        <td >{elemento.disponibilidad}</td> 
                        <td > {elemento.radio}</td>
                        <td > {elemento.puntos}</td>
                        <td > {elemento.tipo}</td> 
                        <td >

                          <div class = "btn-group" >
                            <button type = "button"class = "btn btn-primary" > Editar </button> 
                            <button type = "button"class = "btn btn-danger" > Eliminar </button>
                            <Link to="/Detalle"> <button type = "button"class = "btn btn-success" > Ver </button></Link>
                          </div >

                        </td>
                    </tr >
                  ))
                  } 
                  </tbody> 
                </table >
                </div >
            
            <Modal 
            isOpen={modalAbrir}>
                      <ModalHeader>
                      <div><h3>Agregar Lugar</h3></div>
                      </ModalHeader>

                      <ModalBody>
                      <FormGroup>
                      < div className = "form-group form-inline" >
                        <label > Nombre:
                          <input type = "text"
                            className = "form-control"
                            placeholder = "Nombre"
                            name = "nombre" 
                            onChange= {(event)=>setNombre(event.target.value)}/ >
                        </label>  
                      </div >
                      </FormGroup>

                      <FormGroup>
                    <div className = "form-group form-inline" >
                      <label > Disponibilidad:
                        <form >
                          <div className = "radio" >
                          <label >
                            < input type = "radio"
                            value = "option1"
                            checked = { true }/>
                            Disponible </label> 
                          </div >
                  
                          <div className = "radio" >
                            < label >
                              <input type = "radio"
                              value = "option2" / >
                              No disponible 
                            </label> 
                          </div >

                        </form >
                      </label >   
                    </div >   
                </FormGroup> 
            
                <FormGroup>
                <div className = "form-group form-inline" >
                  <label > Radio de disponibilidad:
                    <input type = "text"
                    name = "radio" 
                    className = "form-control"
                    placeholder = "Radio de disponibilidad"
                    onChange= {(event)=>setRadio(event.target.value) }/ >
                  </label >
                </div> 
                </FormGroup>

                <FormGroup>
                < div className = "form-group form-inline" >
                  <label > Puntos de referencia:
                    <input type = "text"
                    name = "puntos" 
                    className = "form-control"
                    placeholder = "Puntos de referencia" 
                    onChange= {(event)=>setPuntos(event.target.value)}/ >
                  </label> 
                  </div >
                  </FormGroup>

                  <FormGroup>
                <div className = "form-group form-inline" >
                  <label > Tipo: 
                    <  input type = "text"
                      name = "tipo" 
                      className = "form-control"
                      placeholder = "Tipo" 
                      onChange= {(event)=>setTipos(event.target.value)}/ >
                </label>
                </div>
                </FormGroup>     
                        
                
                      </ModalBody>

                      <ModalFooter>
                        <button
                          class = "btn btn-danger" 
                          type="button"
                          onClick={() =>ocultartModal()}
                        >
                          Editar
                        </button>
                        <button class = "btn btn-danger" 
                        type="button"
                        onClick={() =>ocultartModal()}
                        >
                          Cancelar
                        </button>
                      </ModalFooter>
             </Modal>
          </div>

          );}


export default Formulario