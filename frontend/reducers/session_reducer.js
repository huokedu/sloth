import { RECEIVE_CURRENT_USER, SIGN_OUT } from '../actions/session_actions';

const SessionReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER: {
        console.log('hello');
      return action.currentUser;
    }
    case SIGN_OUT: {
      return {};
    }
    default: {
      return state;
    }
  }
};

export default SessionReducer;
