import { REQUEST_SUBSCRIBED_CHANNELS,
         receiveSubscribedChannels } from '../actions/channel_actions';
import { fetchSubscribedChannels } from '../util/channel_api_util';

const ChannelMiddleware = ({ dispatch }) => (next) => (action) => {
  switch (action.type) {
    case REQUEST_SUBSCRIBED_CHANNELS: {
      const success = channels => dispatch(receiveSubscribedChannels(channels));
      const error = e => console.log(e);
      fetchSubscribedChannels(success, error);
      return next(action);
    }
    default: {
      return next(action);
    }
  }
};

export default ChannelMiddleware;
