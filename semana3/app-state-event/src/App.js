import './App.css';
import Boton from './components/Boton';
import Contador from './components/Contador';
import { useState } from 'react';

function App() {
  const [nroClicks, setNumClicks] = useState(0);
  const [show, setShow] = useState(true);
  const clickSumar3 = () => {
    setNumClicks(nroClicks - 3);
    
  }
  const clickRestar3= () => {
    setNumClicks(nroClicks + 3);
    
  }
  const clickSumar1= () => {
    setNumClicks(nroClicks - 1);
    
  }
  const clickRestar1 = () => {
    setNumClicks(nroClicks + 1);
    
  }
  const reiniciar = () => {
    setNumClicks(0);
    
  }
  return (
    <div className="App">
      <div className="contenedor-principal">
        <Contador nroClicks={nroClicks} />
        <div className='contendedor-botones'>
          <Boton texto="-3" esBotonClick={true}
            funcionClick={clickRestar3} />
          <Boton texto="+3" esBotonClick={true}
            funcionClick={clickSumar3} />
          <Boton texto="-1" esBotonClick={true}
            funcionClick={clickRestar1} />
          <Boton texto="-1" esBotonClick={true}
              funcionClick={clickSumar1} />
         
        </div>
        <Boton texto="Reiniciar" esBotonClick={false}
            funcionClick={reiniciar} />
        <Boton texto="Mostrar/Ocultar" esBotonClick={false} funcionClick={mostrar} />

        
      </div>
    </div>
  );
}

export default App;