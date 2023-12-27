//trabajar con el Hook useState
// -> crear un componente funcional y acceder a su estado privado a través de un hook y poder modificarlo

import React, { useState } from 'react';

const Ejemplo1 = () => {

    //valor inicial para contador 
    const valorInicial = 0;

    //valor inicial para persona
    const personaInical = {
        nombre: 'Santiago',
        email: 'santi@gmail.com'
    }

    /** Se busca que los valores iniciales sean parte del estado del componente y poder gestionar su cambio y que este se vea reflejado en la vista del componente
     * 
     * estructura --> const [varibale, funcionModificar] = useState(valorInicial);
    */

    const [contador, setContador] = useState(valorInicial);
    const [persona, setPersona] = useState(personaInical);

    /**
     * funcion para actualizar el estado privado que contiene el contador
     */
    const incrementarContador = () => {
        //? funcionModificar(nuevoValor)
        setContador(contador + 1);//valor inicial y se suma 1

    }

    /**
     * funcion para modificar persona
     */
    const modificarPersona = () => {
        //? funcionModificar(nuevoValor)
        setPersona({
            nombre: 'Pepe',
            email: 'pepe1@gmail.com'
        });
    }




    return (
        <div>
            {/**mostrar datos */}
            <h1>*** Ejemplo de useState() ***</h1>
            <h2>Contador: {contador}</h2>
            <h2>Datos de la persona:</h2>
            <p>Nombre: {persona.nombre}</p>
            <p>Email: {persona.email}</p>
            {/**bloque de botones para actualizar el estado */}
            <button onClick={incrementarContador}>Incrementar contador</button>
            <button onClick={modificarPersona}>Modificar persona</button>
        </div>
    );
}

export default Ejemplo1;
