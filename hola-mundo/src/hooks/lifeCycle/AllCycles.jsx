/**
 * componente funcional que tendra todos los ciclos de vida
 */
import React, { useEffect } from 'react';

const AllCycles = () => {

    useEffect(() => {
        console.log('Componente creado');

        const intervalID = setInterval(() => {
            document.title = `${new Date()}`;
            console.log('actualización del componente cada segundo');
        }, 1000);
        return () => {
            console.log('Componente va a desaparecer');
            document.title = 'se acabo el tiempo';
            clearInterval(intervalID);
        };
    }, []);
    return (
        <div>

        </div>
    );
}

export default AllCycles;
