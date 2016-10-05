export const REQUEST_ALL_CHANNELS = 'REQUEST_ALL_CHANNELS';
export const RECEIVE_ALL_CHANNELS = 'RECEIVE_ALL_CHANNELS';
export const SWITCH_CHANNEL = 'SWITCH_CHANNEL';

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
