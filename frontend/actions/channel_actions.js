export const REQUEST_ALL_CHANNELS = 'REQUEST_ALL_CHANNELS';
export const RECEIVE_ALL_CHANNELS = 'RECEIVE_ALL_CHANNELS';

export const requestAllChannels = () => ({
  type: REQUEST_ALL_CHANNELS,
});

export const receiveAllChannels = (channels) => ({
  type: RECEIVE_ALL_CHANNELS,
  channels,
});
