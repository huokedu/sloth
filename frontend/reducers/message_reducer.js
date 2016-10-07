import { RECEIVE_CURRENT_MESSAGES,
         RECEIVE_SINGLE_MESSAGE,
         REMOVE_SINGLE_MESSAGE, } from '../actions/message_actions';

const MessageReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_MESSAGES: {
      const newState = Object.assign({}, state, action.messages);
      return newState;
    }
    case RECEIVE_SINGLE_MESSAGE: {
      const newState = Object.assign({}, state);
      const message = action.message;
      newState[message.channelId][message.messageId] = message;
      return newState;
    }
    case REMOVE_SINGLE_MESSAGE: {
      const newState = Object.assign({}, state);
      delete(newState[action.channelId][action.messageId]);
      return newState;
    }
    default: {
      return state;
    }
  }
};

export default MessageReducer;
