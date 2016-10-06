import { RECEIVE_CURRENT_USER, SIGN_OUT } from '../actions/session_actions';
import { RECEIVE_SINGLE_CHANNEL } from '../actions/channel_actions';

const SessionReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER: {
      return action.currentUser;
    }
    case RECEIVE_SINGLE_CHANNEL: {
      const newState = Object.assign({}, state);
      for (let id in action.channel) {
        newState.subscribed_channels.push({
          id: action.channel[id].id,
          name: action.channel[id].name,
          purpose: action.channel[id].purpose,
        });
      }
      return newState;
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
