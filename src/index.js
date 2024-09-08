import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

process.env.PUBLIC_URL = '/'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Home/>
);