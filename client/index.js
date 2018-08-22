import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import App from './App';
import 'materialize-css';
import './index.scss';

axios.defaults.baseURL = 'http://localhost:3000';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('app')
);

module.hot.accept(); // Used for React Hot Module Replacement
