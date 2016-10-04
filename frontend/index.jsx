import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { signIn, signUp, signOut } from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  window.signIn = signIn;
  window.signUp = signUp;
  window.signOut = signOut;
  window.store = configureStore();
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Sloth</h1>, root);
});
