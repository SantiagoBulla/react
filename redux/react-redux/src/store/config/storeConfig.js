import { composeWithDevTools } from "@redux-devtools/extension"
import createSagaMiddleware from 'redux-saga';
//import { createStore } from "redux"
import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux'
import { rootReducer } from "../reducers/rootReducer"
import { watcherSaga } from "../sagas/sagas";

const sagaMiddleware = createSagaMiddleware();

export const createAppStore = () => {
    let store = createStore(rootReducer, composeWithDevTools())

    return store
}

// export const createAppAsyncStore = () => {

//     const sagaMiddleware = createSagaMiddleware();

//     let store = createStore(
//         rootReducer,
//         compose(sagaMiddleware, composeWithDevTools())
//     )

//     //we init the watcher saga
//     sagaMiddleware.run(watcherSaga);


//     return store
// }

export const createAppAsyncStore = () => {
    const store = createStore(
        rootReducer,
        compose(
            //el middleware se aplica a través del metodo applyMiddleware
            applyMiddleware(sagaMiddleware),
            //se valida que exista la extension REDUX_DEVTOOLS_EXTENSION antes de aplicarla dentro del compose
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    );

    // Iniciamos la saga watcher
    sagaMiddleware.run(watcherSaga);

    return store;
};