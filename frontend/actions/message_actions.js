export const FETCH_CURRENT_MESSAGES = 'FETCH_CURRENT_MESSAGES';
export const CREATE_MESSAGE = 'CREATE_MESSAGE';
export const UPDATE_MESSAGE = 'UPDATE_MESSAGE';
export const DELETE_MESSAGE = 'DELETE_MESSAGE';
export const RECEIVE_CURRENT_MESSAGES = 'RECEIVE_CURRENT_MESSAGES';
export const RECEIVE_SINGLE_MESSAGE = 'RECEIVE_SINGLE_MESSAGE';
export const REMOVE_SINGLE_MESSAGE = 'REMOVE_SINGLE_MESSAGE';

export const fetchCurrentMessages = (channelId) => ({
  type: FETCH_CURRENT_MESSAGES,
  channelId,
});

export const createMessage = (messageParams) => ({
  type: CREATE_MESSAGE,
  messageParams,
});

export const deleteMessage = (channelId, messageId) => ({
  type: DELETE_MESSAGE,
  channelId,
  messageId,
});

export const updateMessage = (messageParams) => ({
  type: UPDATE_MESSAGE,
  messageParams,
});

export const receiveCurrentMessages = (messages) => ({
  type: RECEIVE_CURRENT_MESSAGES,
  messages,
});

export const removeSingleMessage = (channelId, messageId) => ({
  type: REMOVE_SINGLE_MESSAGE,
  channelId,
  messageId,
});

export const receiveSingleMessage = (message) => ({
  type: RECEIVE_SINGLE_MESSAGE,
  message
});
