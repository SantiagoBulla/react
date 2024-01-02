import React, { useState } from 'react';
import { getNumbers } from '../../services/obervableService';

const ObservableExmaple = () => {

    const [number, setNumber] = useState(0);

    const obtainNewNumbers = () => {

        console.log('Subscription to observabele');
        getNumbers.subscribe({
            next(newNumber) {
                console.log('New value', newNumber);
                setNumber(newNumber)
            },
            error(e) {
                alert(`Something went wrong ${e}`)
            },
            completed() {
                alert(`Finished with number: `, number)

            }
        })
        console.log('Subscription to observabele');
    }

    return (
        <div>
            <h2>Number: {number}</h2>
            <button onClick={obtainNewNumbers}>Get numbers</button>
        </div>
    );
}

export default ObservableExmaple;
