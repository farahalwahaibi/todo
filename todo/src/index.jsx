//import react  
import React from 'react';
//import react dom
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
//import APP
import App from './App.jsx';
//import LoginProvider
import LoginProvider from '../src/context/auth/context.js';

function Main () {
  
    return (
    <LoginProvider>
        <App />;
    </LoginProvider>
    );
  
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);

