import './App.css';
import freeCodeCampLogo from './images/freecodecamp-logo.png';
import { Boton } from './components/Boton';
import { Pantalla } from './components/Pantalla';
import { BotonClear } from './components/BotonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';
import { Logo } from './components/Logo';


function App() {

  const [input, setInput] = useState('');

  const agregarInput = val => {
    setInput(input + val)
  };

  const resultado = () => { 
    if (input) {
    setInput(evaluate(input));
    }
  };

  // const limitOperador = (Button, valor) => {
  //   if(valor === '*') && (valor === '/') && (valor === '.') {
      
  //   }
  // };

  return (
    <div className='App'>
      <Logo src={freeCodeCampLogo} />
      <div className='contenedor-calculadora'>
        <Pantalla input={input}/>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>1</Boton> 
          <Boton manejarClick={agregarInput}>2</Boton> 
          <Boton manejarClick={agregarInput}>3</Boton> 
          <Boton manejarClick={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>4</Boton>
          <Boton manejarClick={agregarInput}>5</Boton>
          <Boton manejarClick={agregarInput}>6</Boton>
          <Boton manejarClick={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>7</Boton>
          <Boton manejarClick={agregarInput}>8</Boton>
          <Boton manejarClick={agregarInput}>9</Boton>
          <Boton manejarClick={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={resultado}>=</Boton>
          <Boton manejarClick={agregarInput}>0</Boton>
          <Boton manejarClick={agregarInput}>.</Boton>
          <Boton manejarClick={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={() => setInput('')}>
            Clear
          </BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;