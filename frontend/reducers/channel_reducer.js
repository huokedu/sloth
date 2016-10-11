import { SIGN_OUT } from '../actions/session_actions';
import { RECEIVE_ALL_CHANNELS,
         RECEIVE_SINGLE_CHANNEL,
         SWITCH_CHANNEL,
         UPDATE_SUBSCRIBED_CHANNELS } from '../actions/channel_actions';

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
    case UPDATE_SUBSCRIBED_CHANNELS: {
      const newState = Object.assign({}, state);
      console.log(action.channels);
      const newChannel = action.channels[action.channels.length - 1];
      newState.currentChannel = newChannel.id;
      if (newChannel.direct) {
        newState.allChannels[newChannel.id] = newChannel;
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
