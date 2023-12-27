/**
 * Ejemplos de hooks:
 * --> useState() : 
 * --> useRef() : identificar/referenciar elementos dentro de la vista
 * --> useEffect() : controlar los cambios en la vista
 */

import React, { useState, useEffect, useRef } from 'react';

const Ejemplo2 = () => {
    // 2 contadores con estado diferente
    const [contadorUno, setcontadorUno] = useState(0);
    const [contadorDos, setcontadorDos] = useState(0);

    //crear referencia con useRef para asociar una variable con elemento del DOM (html)
    const miRef = useRef();

    //crear funciones de incremento
    const incrementarUno = () => {
        setcontadorUno(contadorUno + 1);
    }
    const incrementarDos = () => {
        setcontadorDos(contadorDos + 1);
    }

    //trabajando con useEffect()
    /**
     * ? caso 1 --> ejecutar SIEMPRE un snippet de código 
     * Cada vez que haya un cambio en el estado del componente se ejecuta aquello que esté dentro del useEffect()
     */

    // useEffect(() => {
    //     console.log('cambio en el estado del componente');
    //     console.log('mostrando referencia al elemento del DOM');
    //     console.log(miRef);
    // });

    /**
     * ? caso 2 --> ejecutar SOLO en algunos casos (cambio en el contador 1)
     * Cada vez que haya un cambio en el contador 1 se ejecuta aquello que esté dentro del useEffect(), si hay cambio en ctrd 2 no habrá cambio
     */

    // useEffect(() => {
    //     console.log('cambio en el estado del contador 1');
    //     console.log('mostrando referencia al elemento del DOM');
    //     console.log(miRef);
    // }, [contadorUno]);//controla los cambios del contador 1


    /**
     * ? caso 2 --> ejecutar SOLO cuando cambie contador1 o contador2
     * Cada vez que haya un cambio en el contador 1 o contador 2 se ejecuta aquello que esté dentro del useEffect(), si hay cambio en ctrd 2 no habrá cambio
     */

    useEffect(() => {
        console.log('cambio en el estado del contador 1 o contador2');
        console.log('mostrando referencia al elemento del DOM');
        console.log(miRef);
    }, [contadorUno, contadorDos]);//controla los cambios del contador 1 o contador 2

    return (
        <div>
            {/**mostrar datos */}
            <h1>*** Ejemplo de useState(), useRef() y useEffect() ***</h1>
            <h2>Contador 1: {contadorUno}</h2>
            <h2>Contador 1: {contadorDos}</h2>
            {/**elemento referenciado */}
            <h4 ref={miRef}>
                Ejemplo de elemento referenciado
            </h4>

            <div>
                <h3>Botones para cambiar contador</h3>
                <button onClick={incrementarUno}>Incrementar contador 1</button>
                <button onClick={incrementarDos}>Incrementar contador 2</button>

            </div>
        </div>
    );
}

export default Ejemplo2;
