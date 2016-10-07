import { REQUEST_ALL_CHANNELS,
         receiveAllChannels,
         CREATE_CHANNEL,
         receiveSingleChannel,
         SUBSCRIBE_TO_CHANNEL,
         updateSubscribedChannels } from '../actions/channel_actions';
import { fetchAllChannels, createChannel, subscribeToChannel } from '../util/channel_api_util';

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
      const success = channel => dispatch(updateSubscribedChannels(channel));
      const error = e => console.log(e);
      subscribeToChannel(success, error, action.channelId);
      return next(action);
    }
    default: {
      return next(action);
    }
  }
};

export default ChannelMiddleware;
