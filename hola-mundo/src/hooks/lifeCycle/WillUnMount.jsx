/**
 * Ejemplo de uso del método componentWillUnmount para componente tipo clase y hook para componente fucnional --> cuando el componente va a desaparecer
 */

import React, { Component, useEffect } from 'react'

export default class WillUnMount extends Component {

    componentWillUnmount() {
        console.log('Comportamiento antes de que el componente desaparezca');
    }

    render() {
        return (
            <div>
                <h1>WillUnMount</h1>
            </div>
        )
    }
}

export const WillUnMountHook = () => {

    useEffect(() => {
        //aqui no se pone data 
        return () => {
            console.log('Comportamiento antes de que el componente desaparezca');
        };
    }, []);

    return (//return es aquello que se va a ajecutar cuado haya terminado el componente
        <div>
            <h1>WillUnMount</h1>
        </div>
    );
}
