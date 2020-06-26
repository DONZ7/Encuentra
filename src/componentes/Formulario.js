import React,{ useState, useEffect } from 'react'
import { BrowserRouter , Route, Switch,Link} from 'react-router-dom'
import { Modal ,ModalHeader, ModalBody ,FormGroup ,ModalFooter }  from  "reactstrap" ;
import axios from 'axios';

const Formulario = () => { 
    
    var [tabla, settabla] = useState([ ]);
    
    const [modalAbrir, setModalAbrir] = useState(false);
    const [modalEditarAbrir, setModalEditarAbrir] = useState(false);
    const [ informacion , setInformacion ] = useState ([ ]); 
    var [informacionEditar, setinformacionEditar] = useState([ ]);

    //insertar datos del formulario 
    const getData = async(  ) =>{  
     let getdata=await  axios.get('https://us-central1-encuentra-e2a48.cloudfunctions.net/getLugares')
    if(getdata.data.success){
      settabla(getdata.data.data)
    }
    console.log(getdata.data.data)
    }
//obtener datos de  la base de datos
    useEffect(() =>{getData()}, [ ])


//insertar datos del formulario 
  const insertarDatos = ( e ) =>{  
    setInformacion ({ 
      ... informacion , 
      [ e .target.name]:  e .target.value
    })
  
  }
//enviar datos a firebase  peticiones a las funciones 
const EnviarDatos= () =>{  
console.log(informacion);
   axios.post('https://us-central1-encuentra-e2a48.cloudfunctions.net/postLugares',{informacion} )
   .then(re=>{
    console.log('informacion enviado con exito');
    }).catch(e => {
      console.log('error de envio');
  });
}

//eliminar datos
const eliminarDato=async(id)=>{
  console.log({id} )
  let deleteData=await axios.post('https://us-central1-encuentra-e2a48.cloudfunctions.net/deleteLugares',{id} )
  .then(re=>{
    console.log('informacion eliminadoo con exito');
    }).catch(e => {
      console.log('error');
  });

}

//actualizar datos editar 
const EditarDatos=async(id,nomb,radi,punt,tip)=>{
  setInformacion ( {
    id: id,
      nombre: nomb,
      disponibilidad:'',
      radio: radi,
      puntos: punt,
      tipo: tip 
  })
  console.log(informacion);
 
}
//editar datos
const editar=async()=>{
  
  let editardata=await axios.post('https://us-central1-encuentra-e2a48.cloudfunctions.net/updateLugares',{informacion} )
  .then(re=>{
    console.log('informacion editada con exito');
    }).catch(e => {
      console.log('error');
  });

}




// abrir modal

const mostrartModal=() =>{
   setModalAbrir(true);
}

//cerrar modal
const ocultartModal=() =>{
  setModalAbrir(false);
}



// abrir modal editar

const mostrartModalEditar=(informacion) =>{
  setModalEditarAbrir(true);
}

//cerrar modal editar
const ocultartModalEditar=() =>{
 setModalEditarAbrir(false);
}


    return(                                     
      <div>
               
                <br></br>
                <h2 >Visualizar lugares  <button class="btn align-content-center btn-danger"  onClick={() =>mostrartModal()}> Añadir</button></h2> 
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
                    <tr key={index}>
                      <th >{elemento.nombre}</th> 
                        <td >{elemento.id}</td> 
                        <td > {elemento.radio}</td>
                        <td > {elemento.puntos}</td>
                        <td > {elemento.tipo}</td> 
                        <td >

                          <div class = "btn-group" >
                            <button type = "button"class = "btn btn-primary" 
                            onClick={() =>{mostrartModalEditar();
                            EditarDatos(`${elemento.id}`,`${elemento.nombre}`,`${elemento.radio}`,`${elemento.puntos}`,`${elemento.tipo}`)}}> Editar </button> 
                            <button type = "button"class = "btn btn-danger"onClick={() =>eliminarDato(`${elemento.id}`)} > eliminar </button>
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
                   <form > 
                          <ModalHeader>
                          <div className="container text-center"><h3>Agregar Lugar</h3></div>
                          </ModalHeader>

                          <ModalBody>
                          <FormGroup >
                          < div className = "form-group form-inline" >
                            <label > Nombre:
                              <input type = "text"
                                className = "form-control"
                                placeholder = "Nombre"
                                name = "nombre" 
                                value={informacion.nombre}
                                onChange={insertarDatos}/ >
                            </label>  
                          </div >
                         
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
                 
                    <div className = "form-group form-inline" >
                      <label > Radio de disponibilidad:
                        <input type = "text"
                        name = "radio" 
                        className = "form-control"
                        placeholder = "Radio de disponibilidad"
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
                      
                    <div className = "form-group form-inline" >
                      <label > Tipo: 
                        <  input type = "text"
                          name = "tipo" 
                          className = "form-control"
                          placeholder = "Tipo"
                          value={informacion.tipo}
                          onChange={insertarDatos}/ >
                    </label>
                    </div>
                    
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
                              EnviarDatos()}}
                            >
                              Aceptar
                            </button>
                          </div>
                          </ModalFooter>
                          </form >
                </Modal>
            








            
  
                <Modal 
                isOpen={modalEditarAbrir}>
                   <form > 
                          <ModalHeader>
                          <div className="container text-center"><h3>Editar Lugar</h3></div>
                          </ModalHeader>

                          <ModalBody>
                          <FormGroup //onSubmit={EnviarDatos} 
                          >
                          < div className = "form-group form-inline" >
                            <label > Nombre:
                              <input type = "text"
                                className = "form-control"
                                placeholder = "Nombre"
                                name = "nombre" 
                                value={informacion.nombre}
                                onChange={insertarDatos}/ >
                            </label>  
                          </div >
                         
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
                 
                    <div className = "form-group form-inline" >
                      <label > Radio de disponibilidad:
                        <input type = "text"
                        name = "radio" 
                        className = "form-control"
                        placeholder = "Radio de disponibilidad"
                        value={informacion.radio}
                        onChange={insertarDatos}/ >
                      </label >
                    </div> 
                   
                    < div className = "form-group form-inline" >
                      <label > Puntos de referencia:
                        <input type = "text"
                        name = "puntos" 
                        className = "form-control"
                        placeholder = "Puntos de referencia" 
                        value={informacion.puntos}
                        onChange={insertarDatos}/ >
                      </label> 
                      </div >
                      
                    <div className = "form-group form-inline" >
                      <label > Tipo: 
                        <  input type = "text"
                          name = "tipo" 
                          className = "form-control"
                          placeholder = "Tipo" 
                          value={informacion.tipo}
                          onChange={insertarDatos}/ >
                    </label>
                    </div>
                    
                    </FormGroup>     
                            
                    
                          </ModalBody>

                          <ModalFooter>
                          <div className=" container text-center">
                          <button className="btn btn-danger" 
                            type="button"
                            onClick={() =>{ocultartModalEditar();
                             }}
                            >
                              Cancelar
                            </button>  {" "} 
                            <button class = "btn btn-primary" 
                            type="button"
                            onClick={() =>{ocultartModalEditar();
                              editar();
                             }}
                            >
                              Editar
                            </button>
                          </div>
                          </ModalFooter>
                          </form >
                </Modal>
          </div>

          );}
        

export default Formulario