import { SIGN_OUT } from '../actions/session_actions';
import { RECEIVE_ALL_CHANNELS,
         RECEIVE_SINGLE_CHANNEL,
         SWITCH_CHANNEL } from '../actions/channel_actions';

const defaultState = {
  currentChannel: null,
  allChannels: {},
};

const ChannelReducer = (state = defaultState, action) => {
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
    case RECEIVE_SINGLE_CHANNEL: {
      const newState = Object.assign({}, state);
      for (let id in action.channel ) {
        newState.allChannels[id] = action.channel[id];
      }
      return newState;
    }
    case SIGN_OUT: {
      return defaultState;
    }
    default: {
      return state;
    }
  }
};

export default ChannelReducer;
