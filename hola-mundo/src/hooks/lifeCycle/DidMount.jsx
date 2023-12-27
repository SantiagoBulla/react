/**
 * Ejemplo del uso del método del ciclo de vida en componente tipo clase y el hook en componentes funcionales
 */

//tipo clase
import React, { Component, useEffect } from 'react';

export class DidMount extends Component {

    componentDidMount() {
        console.log('Comportamiento antes de que el componente se rederice (sea añadido al DOM)');
    }
    render() {
        return (
            <div>
                <h1>DidMount</h1>
            </div>
        );
    }
}

//componente funcional
export const DidMountHook = () => {

    useEffect(() => {
        console.log('Comportamiento antes de que el componente se rederice (sea añadido al DOM)');

    }, []);//con corchetes se indica que se ejecuta una vez, sin nada se ejecuta siempre

    return (
        <div>
            <h1>DidMount</h1>
        </div>
    );
}

