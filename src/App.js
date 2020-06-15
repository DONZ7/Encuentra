import React from 'react'
import ReactDOM from 'react-dom'
import Principal from './pagina/Principal'
import Estructura from './pagina/Estructura'
import Detalle from './componentes/Detalle'
import Formulario from './componentes/Formulario'
import AgregarDetalle from './componentes/AgregarDetalle'
import Modalx from './componentes/Modal'
import { BrowserRouter , Route, Switch,Link } from 'react-router-dom'

import 'firebase/firestore';
import { useFirebaseApp } from 'reactfire';

const App = () => {
const firebase=useFirebaseApp();
 console.log(firebase);
  
 
return(
    <
    BrowserRouter >

          <Route exact path="/Menu" component={Estructura}/>
          <Route exact path="/Inicio" component={Principal}/>
          <Route exact path="/Detalle" component={Detalle}/>
          <Route exact path="/Formulario" component={Formulario}/>
          <Route exact path="/Modal" component={Modalx}/>
          <Route exact path="/AgregarDetalle" component={AgregarDetalle}/>
   
    

    <
    /BrowserRouter>

);
}
export default App