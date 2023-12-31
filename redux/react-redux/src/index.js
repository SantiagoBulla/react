import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//Redux imports
import { Provider } from 'react-redux';
//Import config function of app stores
import { createAppAsyncStore, createAppStore } from './store/config/storeConfig';
import AppReduxSaga from './AppReduxSaga';

//we create the app store
//let appStore = createAppStore();
let appAsyncStore = createAppAsyncStore();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={appAsyncStore}>
    <React.StrictMode>
      {/* <App /> */}
      <AppReduxSaga />
    </React.StrictMode>
  </Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
