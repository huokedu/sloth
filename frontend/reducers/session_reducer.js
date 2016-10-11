import { RECEIVE_CURRENT_USER, SIGN_OUT } from '../actions/session_actions';
import { RECEIVE_SINGLE_CHANNEL,
         UPDATE_SUBSCRIBED_CHANNELS,
         CLEAR_NOTIFICATIONS } from '../actions/channel_actions';

const SessionReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER: {
      return action.currentUser;
    }
    case RECEIVE_SINGLE_CHANNEL: {
      const newState = Object.assign({}, state);
      for (let id in action.channel) {
        const channel = action.channel[id];
        if (!channel.direct) {
          newState.subscribed_channels.push({
            id: channel.id,
            name: channel.name,
            purpose: channel.purpose,
          });
        }
      }
      return newState;
    }
    case UPDATE_SUBSCRIBED_CHANNELS: {
      const newState = Object.assign({}, state);
      newState.direct_messages = [];
      newState.subscribed_channels = [];

      action.channels.forEach((channel) => {
        if (channel.direct) {
          newState.direct_messages.push(channel);
        } else {
          newState.subscribed_channels.push(channel);
        }
      });

      return newState;
    }
    case CLEAR_NOTIFICATIONS: {
      const newState = Object.assign({}, state);

        newState.direct_messages.forEach((channel) => {
          if (channel.id === parseInt(action.channelId)) {
            channel.notifications = 0;
          }
        });

        newState.subscribed_channels.forEach((channel) => {
          if (channel.id === parseInt(action.channelId)) {
            channel.notifications = 0;
          }
        });

      return newState;
    }
    case SIGN_OUT: {
      return {};
    }
    default: {
      return state;
    }
  }
};

export default SessionReducer;
