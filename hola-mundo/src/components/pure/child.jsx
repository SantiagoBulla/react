import React, { useRef } from 'react';

const Child = ({ name, send, update }) => {

    let message = useRef('');
    let nameRef = useRef('');

    const pressrBoton = () => {
        const txt = message.current.value //acceder al valor del input
        alert(`texting input ${txt}`);
    }

    const pressrBotonParams = (text) => {
        alert(`Text: ${text}`);
    }

    const submitForm = (e) => {
        e.preventDefault();
        update(nameRef.current.value);

    }

    return (
        <div style={{ border: '1px solid black' }}>
            <h5 onMouseOver={() => console.log('mouse over')}>Child component, your name is : {name}</h5>
            <button onClick={() => console.log('Botón uno pulsado')}>Botón 1</button>
            <button onClick={pressrBoton}>Botón 2</button>
            <button onClick={() => pressrBotonParams('Santi')}>Botón 3</button>
            <input
                placeholder='Insert a text'
                onFocus={() => console.log('input focus')}
                onChange={(e) => console.log('Input changed', e.target.value)}
                onCopy={() => console.log('copied text from input')}
                ref={message}
            >
            </input>
            <button onClick={() => send(`Hello Father, the message was ${message.current.value}`)}>Send Message</button>
            <div style={{ margin: '20px'}}>
                <form onSubmit={submitForm}>
                    <input placeholder='New name' ref={nameRef} />
                    <button type='submit'>Update name</button>
                </form>

            </div>
        </div >
    );
}

export default Child;
