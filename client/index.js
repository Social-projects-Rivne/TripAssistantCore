import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


ReactDOM.render(
  <App />,
  document.getElementById('app')
);

module.hot.accept(); // Used for React Hot Module Replacement
