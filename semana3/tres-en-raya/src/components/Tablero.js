import React from "react";
import Cuadro from "./Cuadro";
import '../style/Tablero.css';



function Tablero({cuadros, onClick}) {
    
    const renderizarCuadro = (i) => {
        return (
            <Cuadro
                valor={cuadros[i]}
                funcion={() => onClick(i)}
            />
        );
    }

    return (
        <div className='juego'>
            
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
