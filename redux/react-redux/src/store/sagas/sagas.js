import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";
import { API_CALL_REQUEST } from "../actions/asyncActions";

//Watchers SAGAS
// Listens the API_CALL_REQUEST actions

//function* -> refiere a una funcion generadora, es decir, genera ejecuciones en paralelo
export function* watcherSaga() {
    //Listens the action and starts a worker Saga
    //yield --> para y ejecuta algo que no esta directamente en la funcion (envento asíncrono)
    yield takeLatest(API_CALL_REQUEST, workerSaga)
}

//worker saga --> es llamado desde el watchersaga, hace el login y dispacha una acción
//Is called from Watcher Saga, does the Login and Dispaches an action
export function* workerSaga(action) {
    try {
        const response = yield call(fetchHttp(action.payload.request))
        //we obtain the token from response
        const token = response.data.token;
        yield put({
            type: action.payload.okAction, //API_CALL_SUCCESS
            payload: {
                token: token
            }
        });
    } catch (error) {
        yield put({
            type: action.payload.failAction, //API_CALL_FAILURE
            payload: {
                error: error
            }
        });
    }
}

function fetchHttp(request) {
    return function () {
        return (axios(request));
    }
}