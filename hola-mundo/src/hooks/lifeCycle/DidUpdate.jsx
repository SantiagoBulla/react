/**
 * Ejemplo uso método DidUpdate en componente tipo clase y uso de hook en componente fucnional
 */

import React, { Component, useEffect } from 'react'

export default class DidUpdate extends Component {

    componentDidUpdate() {
        console.log('comportamiento cuando el componente recible nuevos props o cambio en su estado privado');
    }

    render() {
        return (
            <div>
                <h1>DidUpdate</h1>
            </div>
        )
    }
}

export const DidUpdateHook = () => {
    useEffect(() => {
        console.log('comportamiento cuando el componente recible nuevos props o cambio en su estado privado');
    });//se ejecutara siempre que vea cambios
    return (
        <div>
            <h1>DidUpdate</h1>
        </div>
    );
}
