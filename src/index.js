import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Component/Home';
// Bootstrap CSS
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home/>
  </React.StrictMode>
);

