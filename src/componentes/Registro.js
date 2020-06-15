import React,{useState  } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import Button from 'react';
import Principal from '../pagina/Principal'
import '../estilos/principal.css';
import { BrowserRouter , Route, Switch,Link} from 'react-router-dom'
import {useFirebaseApp,useUser  } from 'reactfire'
import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';


const Registro = () => { 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [estado, setIestado] = useState(true);
    const user=useUser();
    const firebase=useFirebaseApp(); 

   
    const submit= async() => {
        console.log(email,password);
        await firebase.auth().createUserWithEmailAndPassword(email,password);
        
    }
    const Login= async() => {
        console.log(email,password);
        await firebase.auth().signInWithEmailAndPassword(email,password);
      
    }


    const Out= async() => {
        //console.log(email,password);
        await firebase.auth().signOut();
       
    }


       return(
    
    <
    div className = "container" >
 
    { !user &&
    <
    form className="registrar">
    <
    div className = "row" >
    <
    div className = "form-group form-inline"  >
    <
    label > Correo Electronico:  
    <
    input type = "text"
    name = "correo"
    id="correo"
    className = "form-control col-md-6"
    placeholder = "Correo Electronico" 
    onChange= {(event)=>setEmail(event.target.value) }/ > < /label>  < /
    div >

    <
    div className = "form-group form-inline" > <
    label > Contraseña:
    <
    input type = "password"
    name = "Contraseña"
    id="contraseña"
    className = "form-control"
    placeholder = "Contraseña" 
    onChange= {(event)=>setPassword(event.target.value) }/ > < /label> < /div > < /div > 
    <
    button type = "button"
    class = "btn btn-primary boton-iniciar" 
    onClick={submit}> Registrarse < /button > 
    <
    button type = "button"
    class = "btn btn-danger " 
    onClick={Login}> Inicio Sesion < /button ></form > 
} {  user &&  <
    button type = "button"
    class = "btn btn-primary boton-iniciar" 
    onClick={Out}> Salir < /button >
    //</button><Link  to="/Menu" ></link>
}
    < /div>

);
}

export default Registro