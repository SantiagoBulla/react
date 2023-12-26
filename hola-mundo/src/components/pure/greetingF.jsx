//componente de tipo funcion --> no contiene constructores, se trabaja con hooks
import React, { useState } from 'react';
import PropTypes from 'prop-types';


const GreetingF = (props) => {//se le indica que recibe props

    //introduccion a useState -> funcion que permite crear un estado privado para el componente funcional

    //const [nombre de la variable, funcion que va a modificar el valor de dicha variable] = useState(valor incial);
    const [age, setsage] = useState(29);

    const birthday = () =>{
        //actualizat el state (age)
        setsage(age + 1)
    }


    return (
        <div>
            <h1>HOLA {props.name} DESDE GREETING TIPO FUNCION</h1> {/**pinta el valor del props recibido en el componente*/}
            <h2>Tu edad es de: {age}</h2>
            <div>
                <button onClick={birthday}>Cumplir años</button>
            </div>
        </div>
    );
};


GreetingF.propTypes = {
    name: PropTypes.string,
};


export default GreetingF;
