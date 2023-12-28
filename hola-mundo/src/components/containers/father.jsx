import React, { useState } from 'react';
import Child from '../pure/child';

const Father = () => {

    const [name, setName] = useState('David');//estado privado del padre que cambia

    const showMessage = (text) => {
        alert(`Message recived ${text}`);
    }

    const updateName = (newName) => {
        setName(newName);
    }
    return (
        <div style={{ backgroundColor: 'tomato', padding: '5px' }}>
            <Child name={name} send={showMessage} update={updateName}></Child>
        </div>
    );
}

export default Father;
