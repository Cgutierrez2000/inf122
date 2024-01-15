import Enlace from "react-enlace";
import React from "react";
import "../styles/Evento.css";
function EventoB(props) {
    return (
        <div className="card-container">

            <img className="card-image"
                src={require(`../image/${props.image}.jpeg`)}
                alt="Foto del evento" />


            <div className="card-content">
                <h2 className="card-title">{props.title}</h2>
                <p className="card-date">{props.dateLiteral}</p>
                <p className="card-place">{props.placeLiteral}</p>
                <p className="card-description">{props.description}</p>
            </div>
            <div >
                <figure>
                    <a href={props.enlace}>
                        <img src={require(`../image/${props.image}.jpeg`)}alt="Foto del evento" />
                    </a>
                </figure>
            </div>
        </div>
    );
}

export default EventoB;
