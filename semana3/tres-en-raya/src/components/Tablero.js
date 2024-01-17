import React from "react";
import Cuadro from "./Cuadro";
import '../style/Tablero.css';
import { useState } from "react";

function Tablero() {
    const [cuadros, setCuadros] = useState(Array(9).fill(null));
    const [jugador, setJugador] = useState("O");

    const click = (i) => {
        if (cuadros[i]) return;
        const cuadrosTemp = [...cuadros];
        cuadrosTemp[i] = jugador;
        setCuadros(cuadrosTemp);
        if (jugador === "X") {
            setJugador("O");
        } else {
            setJugador("X");
        }
    }

    const renderizarCuadro = (i) => {
        return (
            <Cuadro
                valor={cuadros[i]}
                funcion={() => click(i)}
            />
        );
    }

    return (
        <div className='juego'>
            <h1>Siguiente Jugador: {jugador}</h1>
            <div className="tablero">
                {renderizarCuadro(0)}
                {renderizarCuadro(1)}
                {renderizarCuadro(2)}
                {renderizarCuadro(3)}
                {renderizarCuadro(4)}
                {renderizarCuadro(5)}
                {renderizarCuadro(6)}
                {renderizarCuadro(7)}
                {renderizarCuadro(8)}
            </div>
        </div>
    );
}

export default Tablero;
