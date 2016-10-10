export const REQUEST_ALL_CHANNELS = 'REQUEST_ALL_CHANNELS';
export const RECEIVE_ALL_CHANNELS = 'RECEIVE_ALL_CHANNELS';
export const SWITCH_CHANNEL = 'SWITCH_CHANNEL';
export const CREATE_CHANNEL = 'CREATE_CHANNEL';
export const CREATE_DIRECT_MESSAGE = 'CREATE_DIRECT_MESSAGE';
export const RECEIVE_SINGLE_CHANNEL = 'RECEIVE_SINGLE_CHANNEL';
export const SUBSCRIBE_TO_CHANNEL = 'SUBSCRIBE_TO_CHANNEL';
export const UNSUBSCRIBE_FROM_CHANNEL = 'UNSUBSCRIBE_FROM_CHANNEL';
export const UPDATE_SUBSCRIBED_CHANNELS = 'UPDATE_SUBSCRIBED_CHANNELS';

export const requestAllChannels = () => ({
  type: REQUEST_ALL_CHANNELS,
});

export const receiveAllChannels = (channels) => ({
  type: RECEIVE_ALL_CHANNELS,
  channels,
});

export const switchChannel = (channelId) => ({
  type: SWITCH_CHANNEL,
  channelId,
});

export const createChannel = (channelParams) => ({
  type: CREATE_CHANNEL,
  channelParams
});

export const receiveSingleChannel = (channel) => ({
  type: RECEIVE_SINGLE_CHANNEL,
  channel,
});

export const subscribeToChannel = (channelId) => ({
  type: SUBSCRIBE_TO_CHANNEL,
  channelId,
});

export const unsubscribeFromChannel = (channelId) => ({
  type: UNSUBSCRIBE_FROM_CHANNEL,
  channelId
});

export const updateSubscribedChannels = (channels) => ({
  type: UPDATE_SUBSCRIBED_CHANNELS,
  channels,
});

export const createDirectMessage = (channelParams) => ({
  type: CREATE_DIRECT_MESSAGE,
  channelParams
});
