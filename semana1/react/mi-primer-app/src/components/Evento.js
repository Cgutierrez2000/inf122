import React from "react";
import "../styles/Evento.css"

function Evento()
{
    return(
        <div className="card-container">
            <img className="card-image" src={require( "../image/evento1.jpeg")}></img>
            <div className="card-content">
                <h2 className="card-title">Py Pizza 03 / PyPuzzle</h2>
                <p className="card-date">09 de Diciembre de 2023</p>
                <p className="card-place">Mr Pizza, 20 de octubre Frente a la plaza Abaroa</p>
                <p className="card-description">!Hola Pythonista!
                Participa de este Evento Presencial de la comunidad de Python 
                ?Cuanto conoces de Python?
                Aprende a trabajar en equipo resolviendo increibles acertijos
                !Animate a ser parte de esta actividad!</p></div>
        </div>
    );
        
}
export default Evento;