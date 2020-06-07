import React from 'react'
import ReactDOM from 'react-dom'
import Principal from './pagina/Principal'
import Estructura from './pagina/Estructura'
import Detalle from './componentes/Detalle'
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
          <Route exact path="/Modal" component={Modalx}/>
    

    <
    /BrowserRouter>

);
}
export default App