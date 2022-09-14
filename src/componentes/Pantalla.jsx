import React from 'react';
import '../estilos/Pantalla.css';
//  para componentes sencillos
const Pantalla = ({ input }) => (
    <div className='input'>
        {input}
    </div>
);
//con parentesis directamente devuelve el contenido

export default Pantalla;