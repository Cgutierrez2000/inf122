import React from "react";
import Tablero from './Tablero';
import { useState } from "react";
import Historial from "./Historial";
import '../style/Juego.css';
function Juego() {
    const [historial, setHistorial]= useState([
        {
            cuadros: Array(9).fill(null)
        },
    ]);
    const [nroMovimiento, setNroMovimiento] = useState(0);
    const [cuadros, setCuadros] = useState(Array(9).fill(null));
    const [jugador, setJugador] = useState("X");
    const [ganador, setGanador] = useState(null);
    const click = (i) => {
        if(ganador !== null)
        {
            return ;
        }
        const nuevoMovimiento = historial.slice(0, nroMovimiento + 1);
        const movimientoActual = nuevoMovimiento[nuevoMovimiento.length - 1];
        const cuadros = movimientoActual.cuadros.slice();
        if (cuadros[i] === null) {
            cuadros[i] = jugador;
            setCuadros(cuadros);
            setJugador(jugador === "X" ? "O" : "X");
            setHistorial(nuevoMovimiento.concat([{ cuadros }]));
            setNroMovimiento(nuevoMovimiento.length);
        }
        if (calcularGanador(cuadros) !== null) {
            setGanador(calcularGanador(cuadros));
        }
    }
    const saltarA = (movimiento) => {
        setNroMovimiento(movimiento);
        setJugador((movimiento % 2) === 0 ? "X" : "O");
        const cuadrosMovimiento = historial[movimiento].cuadros;
        setCuadros(cuadrosMovimiento);
        setGanador(calcularGanador(cuadrosMovimiento));
    }
    
    const movimientoActual = historial[nroMovimiento];
    return (
        <div className="juego">
            <div className="juego-tablero">
                <h2>{ganador ? `Ganador: ${ganador}` : `Próximo jugador: ${jugador}`}</h2>
                <Tablero cuadros={movimientoActual.cuadros} onClick={(i) => click(i)} />
            </div>
            <Historial historial={historial} saltarA={saltarA} />
        </div>
    );
}

export default Juego;

function calcularGanador(cuadros) {
    const lineas = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6], 
        [1, 4, 7], 
        [2, 5, 8], 
        [0, 4, 8],
        [2, 4, 6] 
    ];
    for (let i = 0; i < lineas.length; i++) {
        const [a, b, c] = lineas[i];
        if (cuadros[a] && cuadros[a] === cuadros[b] && cuadros[a] === cuadros[c]) {
            return cuadros[a];
        }
    }
    return null;
}
