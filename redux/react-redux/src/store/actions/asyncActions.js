//async actions types disponibles
export const API_CALL_REQUEST = 'API_CALL_REQUEST'; //ESCUCHADA POR EL WATCHER
export const API_CALL_SUCCESS = 'API_CALL_SUCCESS'; //ESCUCHADAS POR EL WORKER SAGA
export const API_CALL_FAILURE = 'API_CALL_FAILURE'; //ESCUCHADAS POR EL WORKER SAGA

export const login = (email, password) => {
    return {
        type: API_CALL_REQUEST,
        payload: { //contenido de axios
            method: 'post',
            url: 'https://reqres.in/api/login',
            data: {
                email: email,
                password: password
            },//acciones que tiene que emitir cuando
            okAction: API_CALL_SUCCESS, // -todo ha ido bien
            failAction: API_CALL_FAILURE // -todo ha ido mal
        }
    }
}

/**
 * Generic HttpRequest Action dispacher
 */
export const httpRequest = (method, url, data) => {
    return {
        type: API_CALL_REQUEST,
        payload: { //contenido de axios
            method: method,
            url: url,
            data: data,
            //acciones que tiene que emitir cuando
            okAction: API_CALL_SUCCESS, // -todo ha ido bien
            failAction: API_CALL_FAILURE // -todo ha ido mal
        }
    }
}