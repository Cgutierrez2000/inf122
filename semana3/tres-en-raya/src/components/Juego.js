import React from "react";
import Tablero from "./Tablero";
import { useState } from "react";

function Juego () {
    const [cuadros, setCuadros] = useState(Array(9).fill(null));
    const [jugador, setJugador] = useState("O");
    const click = (i) => {
        if(cuadros[i]);return
        console.log("pos: " + i);
        console.log("turno: " + jugador);
        const cuadrosTemp = [...cuadros];
        if (cuadrosTemp[i] = null){
            cuadrosTemp[i] = jugador;
        setCuadros(cuadrosTemp);
        if (jugador === "X") {
            setJugador("O");
        }
        else {
            setJugador("X");
        };
}
    
    return<Tablero cuadros={cuadros} onClick={click}/>