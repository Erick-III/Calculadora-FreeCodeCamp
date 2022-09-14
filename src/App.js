import './App.css';
import freeCodeCampLogo from './img/freeCodeCamp-Logo.png';
import Boton from './componentes/Boton';
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/BotonClear';
import Logo from './componentes/Logo';
import { useState } from 'react';
import {evaluate} from 'mathjs';

const OPERADOR_SUMA = "+";
const OPERADOR_RESTA = "-";
const OPERADOR_MULT = "*";

const operadoresFinales = ['=', '0', '.', '/'];
function generarBotonesCalculadora(agregarInput, calcularResultado) {
  let contenedorBotones = [];
  let botones = [];
  let numBoton = 1;
  let botonBase = null;
  let operador = "def oper";
  for (let i = 1; i <= 13; i++) {
    if ((i < 12) && (i % 4)  ) {
      botonBase = <Boton manejarClic={agregarInput}>{numBoton}</Boton>
      numBoton++;
    }else if(i == 13){
      for(let j = 0 ; j < operadoresFinales.length ; j++){
        if(operadoresFinales[j] === "="){
          botonBase = <Boton manejarClic={calcularResultado} >{operadoresFinales[j]}</Boton>;
        }else{
          botonBase = <Boton manejarClic={agregarInput}>{operadoresFinales[j]}</Boton>;
        }
        console.log(operadoresFinales[j]);
        botones.push(botonBase);
      }
    } else {
      switch (i) {
        case 4:
          operador = OPERADOR_SUMA;
          break;
        case 8:
          operador = OPERADOR_RESTA;
          break;
        case 12:
          operador = OPERADOR_MULT;
      }
      botonBase = <Boton manejarClic={agregarInput}>{operador}</Boton>
    }

    if( i <= 12){
      botones.push(botonBase);
    }
    if(!(i%4) || i == 13){
      contenedorBotones.push( <div className='fila'>{botones}</div>);
      botones = [];
    }
  }
  return contenedorBotones;
}

  function App() {

    const [input, setInput] = useState('');
    
    const agregarInput = val =>{  
      let operacionInvalida = false;    
      if(val != '='){
        if(isNaN(val) && isNaN(input[input.length-1]) && input){
          console.log("operadorx2",input[input.length-1] );
          operacionInvalida = true;
        }
        if(!operacionInvalida){
          if(input == "Error" ||input == "Infinity" || input.toString() == "NaN"){
            setInput(val.toString());
          }else{          
            setInput(input+val.toString());
          }
        }
      }
    };    

    const calcularResultado = ()=>{
      let resultado = 0;
      resultado = evaluate(input.toString());
      console.log(resultado);
      if(resultado.toString() == "Infinity" || resultado.toString() == "NaN"){
        alert("Error al dividir por cero");
      }else if(input && !isNaN(input[input.length-1])){       
        setInput(evaluate(input.toString()));
      }else{
        
        alert("error");
      }
    };

    return (
      <div className='App'>        
        <Logo
          logoContenedorCss = 'freecodecamp-logo-contenedor'
          logoSrc = {freeCodeCampLogo}
          logoCss = 'freecodecamp-logo'
          logoAlt = 'Logo de freeCodeCamp'
        />
        <div className='contenedor-calculadora'>
          <Pantalla
            input={input}
          />
          {generarBotonesCalculadora(agregarInput, calcularResultado)}
          <div className='fila'>
            <BotonClear manejarClear={()=>{setInput("")}}>
              Clear
            </BotonClear>
          </div>
        </div>
      </div>
    );
  }

  export default App;
