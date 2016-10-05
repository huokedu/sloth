export const REQUEST_SUBSCRIBED_CHANNELS = 'REQUEST_SUBSCRIBED_CHANNELS';
export const RECEIVE_SUBSCRIBED_CHANNELS = 'RECEIVE_SUBSCRIBED_CHANNELS';

export const requestSubscribedChannels = () => ({
  type: REQUEST_SUBSCRIBED_CHANNELS,
});

export const receiveSubscribedChannels = (channels) => ({
  type: RECEIVE_SUBSCRIBED_CHANNELS,
  channels,
});
