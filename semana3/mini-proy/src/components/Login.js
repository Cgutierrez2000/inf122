import React from "react";
import Boton from './Boton.js';
import "../styles/Login.css";
function Login(){
    const login = () =>{
        console.log("Login");
    }
    const register = () =>{
        console.log("Register");
    }
    return(
        <div className="main">
            <div className="input-box">
                <p className="usuario">usuario</p>
                <input type="text" className="usuario"></input>
                <p className="contraseña">contraseña</p>
                <input type="text" className="contraseña"></input>
            </div>
            <div className="button-box">
                <Boton onClick={login} text="Registrar"></Boton>
                
                <Boton onClick={register} text="Ingresar"></Boton>
                
            </div>
        </div>
    );
}

export default Login;