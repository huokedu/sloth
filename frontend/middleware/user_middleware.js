import { FETCH_ALL_USERS, receiveAllUsers } from '../actions/user_actions';
import { fetchAllUsers } from '../util/user_api_util';

const UserMiddleware = ({ dispatch }) => (next) => (action) => {
  switch (action.type) {
    case FETCH_ALL_USERS: {
      const success = (users) => dispatch(receiveAllUsers(users));
      const error = (e) => console.log(e);

      fetchAllUsers(success, error);
      return next(action);
    }
    default: {
      return next(action);
    }
  }
};

export default UserMiddleware;
