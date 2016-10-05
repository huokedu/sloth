import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import HomeContainer from './home/home_container';
import SignInFormContainer from './session_forms/signin_form_container';
import SignUpFormContainer from './session_forms/signup_form_container';
import ChannelsIndexContainer from './channels/channels_index_container';
import { requestAllChannels } from '../actions/channel_actions';

const Root = ({ store }) => {
  function redirectUnlessLoggedIn() {
    if (!store.getState().currentUser.id) {
      hashHistory.push('/signin');
    }
  }

  function fetchAllChannels() {
    redirectUnlessLoggedIn();
    store.dispatch(requestAllChannels());
  }

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={HomeContainer}>
          <Route path="signin" component={SignInFormContainer} />
          <Route path="signup" component={SignUpFormContainer} />
        </Route>
        <Route path="/channels" component={ChannelsIndexContainer} onEnter={fetchAllChannels} />
      </Router>
    </Provider>
  );
};

export default Root;
