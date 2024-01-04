/**
 * Ejemplo de hooks: 
 * --> useState()
 * --> useContext() : trabajar con datos, utilizar el contexto y pasar entre componente
 */

import React, { useState, useContext } from 'react';

/**
 * 
 * @returns Componente 1
 * Dispone de un contexto que tiene un valor recibido desde el padre
 */

const miContexto = React.createContext(null);

const Componente1 = () => {

    //inicializar un estado vacío que va a rellenarse con los datos del padre
    const state = useContext(miContexto);// ese mi contexto viene desde el provider dentro del componente padre
    return (
        <div>
            <h1>El token es: {state.token}</h1>
            {/**componente 2 */}
            <Componente2></Componente2>
        </div>
    );
}


const Componente2 = () => {

    const state = useContext(miContexto); //contexto heradado del componente 1, en donde este último lo recibio a través del provider
    return (
        <div>
            <h2>La sesión es: {state.session}</h2>
        </div>
    );
}

export const MiComponenteConContexto = () => {

    const estadoInicial = {
        token: '1234567',
        session: 1
    }

    //crear el estado del componente
    const [sesionData, setsesionData] = useState(estadoInicial);

    function actualizarSesion() {
        setsesionData({
            token: 'jskfhjs213',
            session: sesionData.session + 1
        })
    }
    return (
        <miContexto.Provider value={sesionData} > {/**inyecta como un provider el contexto a los componentes que se pinten como hijos a través de la varaible sesionData */}
            {/**todo lo que este aqui adentro puede leer los datos de sesionData*/}
            {/**si se actualiza los componentes aquí también se actualiza*/}
            <h1>Ejemplo de useState() y useContext()</h1>
            <Componente1></Componente1>
            <button onClick={actualizarSesion}>actualizar sesión</button>
        </miContexto.Provider>
    );
}

