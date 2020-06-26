import React,{ Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App'
import * as serviceWorker from './serviceWorker';
import { Modal } from 'reactstrap';
import firebase from './firebase'
import { FirebaseAppProvider}  from 'reactfire';

ReactDOM.render(  
    < FirebaseAppProvider firebaseConf={ firebase }>
   <Suspense Suspense fallback={'conectando...'}>
    < App />
    </Suspense >
    </FirebaseAppProvider >
    ,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();