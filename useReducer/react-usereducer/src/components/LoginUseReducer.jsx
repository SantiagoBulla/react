import React, { useReducer } from 'react';


//Actions
const FIELD = 'FIELD';
const LOGIN = 'LOGIN';
const SUCCESS = 'SUCCESS';
const ERROR = 'ERROR';
const LOGOUT = 'LOGOUT';

//Initial State
const initialState = {
    username: '',
    password: '',
    error: '',
    isLoading: false,
    isLoggedIn: false,
}

//reducer
const LoginReducer = (state, action) => {
    switch (action.type) {
        case FIELD: //modificacion en un cambo
            return {
                ...state,
                [action.fieldName]: action.payload
            }
        case LOGIN:
            return {
                ...state,
                error: '',
                isLoading: true
            }
        case SUCCESS:
            return {
                ...state,
                error: '',
                isLoading: false,
                isLoggedIn: true
            }
        case ERROR:
            return {
                ...state,
                error: 'Username or password was not found',
                isLoading: false,
                isLoggedIn: false,
                username: '',
                password: ''
            }
        case LOGOUT:
            return {
                ...state,
                isLoading: false,
                isLoggedIn: false
            }

        default:
            break;
    }
}

const LoginUseReducer = () => {

    //useReducer
    const [state, dispatch] = useReducer(LoginReducer, initialState)

    //Obtener valores como variables
    const { username, password, error, isLoading, isLoggedIn } = state;

    //submit
    const submit = async (e) => {
        e.preventDefault();
        //Dispatch la accion de login
        dispatch({ type: LOGIN });

        try {
            await login(username, password);
            dispatch({ type: SUCCESS })
        } catch (error) {
            dispatch({ type: ERROR })
        }
    }


    const login = (username, password) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(username, password);
                if (username === 'admin' && password === 'admin') {
                    resolve();
                } else {
                    reject();
                }
            }, 3000);
        });
    }

    const logout = () => {
        dispatch({ type: LOGOUT });
    }

    return (
        <div className='App'>
            <div>
                {
                    isLoggedIn ? (
                        <div>
                            <h1>Welcome back, {username}</h1>
                            <button onClick={logout}>Logout</button>
                        </div>
                    ) :
                        (
                            <form onSubmit={submit}>
                                {
                                    error && <p style={{ color: 'tomato' }}>{error}</p>
                                }
                                <input
                                    type='text'
                                    placeholder='Enter your username'
                                    value={username}
                                    onChange={(e) =>
                                        dispatch(
                                            {
                                                type: FIELD,
                                                fieldName: 'username',
                                                payload: e.currentTarget.value
                                            })
                                    }
                                />
                                <input
                                    type='text'
                                    placeholder='Enter your password'
                                    value={password}
                                    onChange={(e) =>
                                        dispatch(
                                            {
                                                type: FIELD,
                                                fieldName: 'password',
                                                payload: e.currentTarget.value
                                            })
                                    }
                                />
                                <button type='submit'>
                                    {
                                        isLoading ? 'Loading...' : 'Login'
                                    }
                                </button>
                            </form>
                        )
                }
            </div>
        </div>
    );
}

export default LoginUseReducer;
