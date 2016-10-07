import { REQUEST_ALL_CHANNELS,
         receiveAllChannels,
         CREATE_CHANNEL,
         receiveSingleChannel,
         SUBSCRIBE_TO_CHANNEL,
         updateSubscribedChannels,
         UNSUBSCRIBE_FROM_CHANNEL } from '../actions/channel_actions';
import { fetchAllChannels,
         createChannel,
         subscribeToChannel,
         unsubscribeFromChannel } from '../util/channel_api_util';

const ChannelMiddleware = ({ dispatch }) => (next) => (action) => {
  switch (action.type) {
    case REQUEST_ALL_CHANNELS: {
      const success = channels => dispatch(receiveAllChannels(channels));
      const error = e => console.log(e);
      fetchAllChannels(success, error);
      return next(action);
    }
    case CREATE_CHANNEL: {
      const success = channel => dispatch(receiveSingleChannel(channel));
      const error = e => console.log(e);
      createChannel(success, error, action.channelParams);
      return next(action);
    }
    case SUBSCRIBE_TO_CHANNEL: {
      const success = channels => dispatch(updateSubscribedChannels(channels));
      const error = e => console.log(e);
      subscribeToChannel(success, error, action.channelId);
      return next(action);
    }
    case UNSUBSCRIBE_FROM_CHANNEL: {
      const success = channels => dispatch(updateSubscribedChannels(channels));
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
