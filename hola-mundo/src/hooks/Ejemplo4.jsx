/**
 * Entender el uso de props.children
 */

//--> pasar elementos html a través de los props.children
import React from 'react';

const Ejemplo4 = (props) => {
    return (
        <div>
            <h1>Ejemplo de children props</h1>
            {/**Este componentes pueda pintar elementos que se pasen desde el padre */}
            <h2>Nombre: {props.nombre}</h2>
            {/**los props.children son todo lo que se encuentre entre la etiqueta de apertura y de cierre */}
            {props.children}
        </div>
    );
}

export default Ejemplo4;
