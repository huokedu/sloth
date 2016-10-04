import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  window.store = configureStore();
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Sloth</h1>, root);
});
