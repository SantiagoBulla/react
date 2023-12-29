import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';//añadir bootstrap al proyecto 
import 'bootstrap-icons/font/bootstrap-icons.css';//añadir iconos de bootstrap
// !  importante colocar bootstrap encima de index.css para que no sobreescriba los estilos raiz
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AppRoutingOne from './AppRoutingOne';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <AppRoutingOne />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
