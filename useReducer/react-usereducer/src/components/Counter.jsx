import React, { useReducer, useContext } from 'react';

//Actions
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';


//useContext
const myContext = React.createContext(null);

const Counter = () => {

    //crear un estado inical para asociarlo a un reducer
    const initialState = {
        count: 0
    }

    // Reducer asociado al estado definido previamente
    const reducer = (state, action) => {

        switch (action.type) {
            case INCREMENT:
                return {
                    //...state,
                    count: state.count + action.payload.quantity
                }
            case DECREMENT:
                return {
                    //...state,
                    count: state.count - action.payload.quantity
                }
            case RESET:
                return {
                    //...state,
                    count: 0
                }

            default:
                return state;
        }
    }

    //Asignar useReducer al estado, reducer y dispatch actions
    /**
     * el useReducer tiene un reducer que sera nuestra funcion reducer que contralará el estado (state)
     * y que va a recibir un despacho de acciones de tipo INCREMENT, DECREMENT O RESET
     */
    const [state, dispatch] = useReducer(reducer, initialState)



    return (
        <myContext.Provider value={state}>
            <div>
                <Points />
                {/* <h5>Points: {state.count}</h5> */}
                {/**despachar las acciones para que sean despachadas por el reducer */}
                <button
                    onClick={ //Al hacer un click se despacha una accion que entra al reducer {switch-case} y acciona el caso INCREMENT 
                        () => dispatch(
                            {
                                type: INCREMENT,
                                payload: {
                                    quantity: 2
                                }
                            }
                        )
                    }
                >
                    Increment
                </button>
                <button
                    onClick={ //Al hacer un click se despacha una accion que entra al reducer {switch-case} y acciona el caso DECREMENT 
                        () => dispatch(
                            {
                                type: INCREMENT,
                                payload: {
                                    quantity: 1
                                }
                            }
                        )
                    }
                >
                    Decrement
                </button>
                <button
                    onClick={ //Al hacer un click se despacha una accion que entra al reducer {switch-case} y acciona el caso RESET 
                        () => dispatch({ type: RESET })
                    }
                >
                    Reset
                </button>
            </div>
        </myContext.Provider>
    );
}


//componente hijo 
const Points = () => {

    const state = useContext(myContext);

    return (<h5>Points: {state.count}</h5>)
}

export default Counter;
