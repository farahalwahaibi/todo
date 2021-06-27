  
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App.jsx';

function Main () {
  
    return <App />;
  
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);

