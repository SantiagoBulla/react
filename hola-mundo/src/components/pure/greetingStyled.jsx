import React, { useState } from 'react';

/**
 * Definiendo estilos en constantes
 */

// ? estilo para usuario logueado
const loggedStyle = {
    color: 'green',
}

// ? estilo para usuario no logueado
const unloggedStyle = {
    color: 'tomato',
    fontWeight: 'bold' //cuando los estilos se declaran en const se evita el guion [-] y se coloca camelcase
}

const GreetingStyled = (props) => {

    /**
     * Generar un estado del componente para gestionar si el user esta o no logueado
     */
    const [logged, setLogged] = useState(false);

    return (
        <div style={logged ? loggedStyle : unloggedStyle}>
        {logged ? 
            (<p>Hola, {props.name}</p>) : 
            (<p><strong>PLEASE LOGING</strong></p>)
        }
            <button onClick={() => {
                console.log('Botón pulseado');
                setLogged(!logged);
            }}>
                {logged ? 'Logout' : 'Login'}
            </button>
        </div>
    );
}

export default GreetingStyled;
