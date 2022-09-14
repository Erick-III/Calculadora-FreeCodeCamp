import React from 'react';
import '../estilos/Boton.css'

function Boton(props){
    
    const esOperador = valor =>{
        //isNaN verifica si es un numero
        return (isNaN(valor) && (valor !== '.') && (valor !== '='));
    };
    
    //children agarra los valores interios del componente en App.js
    return (
        //templte literals
        <div className={`boton-contenedor ${ esOperador(props.children) ? 'operador' : ""}`.trimEnd()}
            onClick={()=>props.manejarClic(props.children)}
        >
            
            { props.children }
        </div>
    );
}

export default Boton;