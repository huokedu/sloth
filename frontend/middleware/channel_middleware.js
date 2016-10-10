import { REQUEST_ALL_CHANNELS,
         receiveAllChannels,
         CREATE_CHANNEL,
         receiveSingleChannel,
         SUBSCRIBE_TO_CHANNEL,
         updateSubscribedChannels,
         UNSUBSCRIBE_FROM_CHANNEL,
         CREATE_DIRECT_MESSAGE,
         updateDirectMessages } from '../actions/channel_actions';
import { fetchAllChannels,
         createChannel,
         subscribeToChannel,
         unsubscribeFromChannel,
         createDirectMessage } from '../util/channel_api_util';
import { hashHistory } from 'react-router';

const ChannelMiddleware = ({ dispatch, getState }) => (next) => (action) => {
  switch (action.type) {
    case REQUEST_ALL_CHANNELS: {
      const success = channels => dispatch(receiveAllChannels(channels));
      const error = e => console.log(e);
      fetchAllChannels(success, error);
      return next(action);
    }
    case CREATE_CHANNEL: {
      const success = channel => {
        dispatch(receiveSingleChannel(channel));
        const id = Object.keys(channel)[0];
        hashHistory.push(`/messages/${id}`);
      };
      const error = e => console.log(e);
      createChannel(success, error, action.channelParams);
      return next(action);
    }
    case CREATE_DIRECT_MESSAGE: {
      const success = channels => {
        dispatch(updateSubscribedChannels(channels));
        channels.forEach((channel) => {
          if (channel.name === action.channelParams.channel.name) {
            dispatch(receiveSingleChannel({[channel.id]: channel}));
            hashHistory.push(`/messages/${channel.id}`);
          }
        });
      };
      const error = e => {
        const allChannels = getState().channels.allChannels;
        Object.keys(allChannels).forEach((id) => {
          if (allChannels[id].name === action.channelParams.channel.name) {
            hashHistory.push(`/messages/${id}`);
          }
        });
      };

      createDirectMessage(success, error, action.channelParams);
      return next(action);
    }
    case SUBSCRIBE_TO_CHANNEL: {
      const success = channels => {
        dispatch(updateSubscribedChannels(channels));
        hashHistory.push(`/messages/${action.channelId}`);
      };
      const error = e => {
        hashHistory.push(`/messages/${action.channelId}`);
      };
      subscribeToChannel(success, error, action.channelId);
      return next(action);
    }
    case UNSUBSCRIBE_FROM_CHANNEL: {
      const success = channels => {
        dispatch(updateSubscribedChannels(channels));
        hashHistory.push(`/messages/${channels[channels.length - 1].id}`);
      };
      const error = e => console.log(e);
      unsubscribeFromChannel(success, error, action.channelId);
      return next(action);
    }
    default: {
      return next(action);
    }
  }
};

export default ChannelMiddleware;
