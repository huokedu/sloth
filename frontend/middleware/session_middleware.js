import { SIGN_IN, SIGN_UP, SIGN_OUT, receiveCurrentUser, receiveErrors } from '../actions/session_actions';
import { signIn, signUp, signOut } from '../util/session_api_util';

const SessionMiddleware = ({ dispatch }) => (next) => (action) => {
  switch (action.type) {
    case SIGN_IN: {
      const success = (user) => dispatch(receiveCurrentUser(user));
      const error = (errors) => dispatch(receiveErrors(errors));
      signIn(success, error, action.userParams);
      break;
    }
    case SIGN_UP: {
      const success = (user) => dispatch(receiveCurrentUser(user));
      const error = (errors) => dispatch(receiveErrors(errors));
      signUp(success, error, action.userParams);
      break;
    }
    case SIGN_OUT: {
      signOut(() => next(action));
      break;
    }
    default: {
      return next(action);
    }
  }
};

export default SessionMiddleware;
