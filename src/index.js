import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Principal from './paginas/Principal';
import Agregar from './paginas/Agregar';
import Formulario from './paginas/Formulario'

import Detalle from './paginas/Detalle';
import Modalx from './paginas/Modal'
import Editar from './paginas/Editar'


import Estructura from './paginas/Estructura';

import * as serviceWorker from './serviceWorker';
import { Modal } from 'reactstrap';

ReactDOM.render( < Modalx / > ,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();