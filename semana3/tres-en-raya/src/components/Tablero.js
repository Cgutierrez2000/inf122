import React from "react";
import Cuadro from "./Cuadro";
import '../style/Tablero.css';
import { useState } from "react";
function Tablero({cuadros, onClick}){
    function renderizarCuadro(i) {
    return (
        <Cuadro
            valor={cuadros[i]}
            funcion={() => onClick(i)}
        />
    );
}
    return (
        <div className='juego'>
            <h1>Siguiente Jugador: {jugador}</h1>
            <div className="tablero">
                <Cuadro valor={renderizarCuadro(0)} />
                <Cuadro valor={renderizarCuadro(1)} />
                <Cuadro valor={renderizarCuadro(2)} />
                <Cuadro valor={renderizarCuadro(3)} />
                <Cuadro valor={renderizarCuadro(4)} />
                <Cuadro valor={renderizarCuadro(5)} />
                <Cuadro valor={renderizarCuadro(6)} />
                <Cuadro valor={renderizarCuadro(7)} />
                <Cuadro valor={renderizarCuadro(8)} />
            </div>
        </div>
    );
}
export default Tablero;