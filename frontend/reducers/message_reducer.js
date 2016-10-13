import { RECEIVE_CURRENT_MESSAGES,
         REMOVE_SINGLE_MESSAGE, } from '../actions/message_actions';
import { SIGN_OUT } from '../actions/session_actions';

const MessageReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_MESSAGES: {
      const newState = Object.assign({}, state, action.messages);
      return newState;
    }
    case REMOVE_SINGLE_MESSAGE: {
      const newState = Object.assign({}, state);
      delete(newState[action.channelId][action.messageId]);
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

export default MessageReducer;
