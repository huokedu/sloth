import { RECEIVE_ALL_CHANNELS, SWITCH_CHANNEL } from '../actions/channel_actions';

const ChannelReducer = (state = {currentChannel: 2, allChannels: {}}, action) => {
  switch (action.type) {
    case RECEIVE_ALL_CHANNELS: {
      const newState = Object.assign({}, state);
      newState.allChannels = action.channels;
      return newState;
    }
    case SWITCH_CHANNEL: {
      const newState = Object.assign({}, state);
      newState.currentChannel = action.channelId;
      return newState;
    }
    default: {
      return state;
    }
  }
};

export default ChannelReducer;
