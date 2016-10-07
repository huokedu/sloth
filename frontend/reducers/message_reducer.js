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
      const messageId = Object.keys(action.message)[0];
      const message = action.message[messageId];
      if (typeof newState[message.channelId] === 'undefined') {
        newState[message.channelId] = {};
      }
      newState[message.channelId][messageId] = message;
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
