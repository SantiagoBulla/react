import React, { memo, useState } from 'react';

const Ejemplo = () => {

    const names = [
        'Martin',
        'Erick'
    ]

    const [name, setName] = useState('');

    const getName = () => {
        const random = Math.floor(Math.random() * (names.length - 1))
        return names[random];
    }

    const clearName = () => {
        setName('');
    }

    const obtainName = () => {
        setName(getName());
    }


    return (
        <div>
            <h1>Ejemplo de react memo</h1>
            <NombresAleatorios name={name} clearName={clearName} ></NombresAleatorios>
            <button onClick={obtainName}>Generate Name</button>
        </div>
    );
}

export default Ejemplo;


export const nameComponent = (props) => {
    console.log('Renderizando de nuevo');
    return (
        <div>
            <h2>{props.name}</h2>
            <button onClick={() => props.clearName()}>Clear name</button>
        </div>
    )
}

function namesAreEqual(prevProps, nextProps) {
    return prevProps.name !== nextProps.name
}

export const NombresAleatorios = memo(nameComponent, namesAreEqual);