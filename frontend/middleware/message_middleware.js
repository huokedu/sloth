import { FETCH_CURRENT_MESSAGES,
         CREATE_MESSAGE,
         UPDATE_MESSAGE,
         DELETE_MESSAGE,
         receiveCurrentMessages,
         receiveSingleMessage,
         removeSingleMessage } from '../actions/message_actions';
import { fetchCurrentMessages,
         createMessage,
         updateMessage,
         deleteMessage } from '../util/message_api_util';

const MessageMiddleware = ({dispatch}) => (next) => (action) => {
  switch (action.type) {
    case FETCH_CURRENT_MESSAGES: {
      const success = messages => dispatch(receiveCurrentMessages(messages));
      const error = e => console.log(e);

      fetchCurrentMessages(success, error, action.channelId);
      return next(action);
    }
    case CREATE_MESSAGE: {
      const success = message => dispatch(receiveSingleMessage(message));
      const error = e => console.log(e);

      createMessage(success, error, action.messageParams);
      return next(action);
    }
    case UPDATE_MESSAGE: {
      const success = message => dispatch(receiveSingleMessage(message));
      const error = e => console.log(e);

      updateMessage(success, error, action.messageParams);
      return next(action);
    }
    case DELETE_MESSAGE: {
      const success = message => {
        dispatch(removeSingleMessage(action.channelId, action.messageId));
      };
      const error = e => console.log(e);

      deleteMessage(success, error, action.messageId);
      return next(action);
    }
    default: {
      return next(action);
    }
  }
};

export default MessageMiddleware;
