import { RECEIVE_ALL_USERS } from '../actions/user_actions';
import { SIGN_OUT } from '../actions/session_actions';

const UserReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ALL_USERS: {
      return action.users;
    }
    case SIGN_OUT: {
      return {};
    }
    default: {
      return state;
    }
  }
};

export default UserReducer;
