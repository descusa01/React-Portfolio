import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { webpack_public_path } from 'react-dev-utils';

webpack_public_path.set('/', __dirname);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Home/>
);