import React from "react";
import Boton from './Boton.js'
function Registro(){
    
    const register = () =>{
        console.log("Registrar");
    }
    return(
        <div className="main">
            <div className="input-box">
                <p className="usuario">Nombre</p>
                <input type="text" className="nombre"></input>
                <p className="contraseña">Apellido</p>
                <input type="text" className="apellido"></input>
                <p className="contraseña">Contraseña</p>
                <input type="text" className="contraseña"></input>
            </div>
            <div className="button-box">
                <Boton onClick={register} text="Registrar"></Boton>
            </div>
        </div>
    );
}

export default Registro;