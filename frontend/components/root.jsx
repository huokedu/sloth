import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Home from './home';
import SignInFormContainer from './session_forms/signin_form_container';
import SignUpFormContainer from './session_forms/signup_form_container';
import ChannelsContainer from './channels/channels_container';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Home}>
        <Route path="signin" component={SignInFormContainer} />
        <Route path="signup" component={SignUpFormContainer} />
      </Route>
      <Route path="/channels" component={ChannelsContainer} />
    </Router>
  </Provider>
);

export default Root;
