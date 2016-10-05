import { RECEIVE_ALL_CHANNELS } from '../actions/channel_actions';

const ChannelReducer = (state = {currentChannel: 1, allChannels: []}, action) => {
  switch (action.type) {
    case RECEIVE_ALL_CHANNELS: {
      const currentChannel = action.channels[0].id;
      return {currentChannel, allChannels: action.channels};
    }
    default: {
      return state;
    }
  }
};

export default ChannelReducer;
