import React from 'react';

function Boton ({ onClick, text}){
    return (
        <button onClick={onClick}>{text}</button>
        
    );
  
}

export default Boton;
