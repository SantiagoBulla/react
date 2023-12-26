//creacion de componente --> elemento js y html que puede ser renderizado por el dom 
//componente de tipo clase 
import React, { Component } from 'react';//importar react y component
import PropTypes from 'prop-types';


class Greeting extends Component {

    //los componentes de tipo clase tiene constructor
    constructor(props) {
        super(props);
        this.state = {//son privados e inmutables
            age: 29
        }
    }

    render() {//devuelve un elemento
        return (
            <div>
                <h1>HOLA {this.props.name} DESDE GREETING</h1> {/**pinta el valor del props recibido en el componente*/}
                <h2>Tu edad es de: {this.state.age}</h2>{/**pinta el valor del estado */}
                <div>
                    <button onClick={this.birthday}>Cumplir años</button>
                </div>
            </div>
        );
    }

    birthday = () => {
        this.setState((prevState) => //toma el valor previo del state age para luego modificar su valor
            (
                {
                    age: prevState.age +1
                }
            )
        )
    }
}

//contenido que se pasa un componente desde un componente de orden superior --> PropeType permite defini el tipo de datos de los props que recibe el componente
Greeting.propTypes = {
    name: PropTypes.string,
};


export default Greeting;//exportar el componente 
