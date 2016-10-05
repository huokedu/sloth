import { RECEIVE_SUBSCRIBED_CHANNELS } from '../actions/channel_actions';

const ChannelReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_SUBSCRIBED_CHANNELS: {
      return action.channels;
    }
    default: {
      return state;
    }
  }
};

export default ChannelReducer;
