import { RECEIVE_CURRENT_USER, LOGOUT } from '../actions/session_actions';

const SessionReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER: {
      return action.currentUser;
    }
    default: {
      return state;
    }
  }
};

export default SessionReducer;
