import { REQUEST_ALL_CHANNELS,
         receiveAllChannels } from '../actions/channel_actions';
import { fetchAllChannels } from '../util/channel_api_util';

const ChannelMiddleware = ({ dispatch }) => (next) => (action) => {
  switch (action.type) {
    case REQUEST_ALL_CHANNELS: {
      const success = channels => dispatch(receiveAllChannels(channels));
      const error = e => console.log(e);
      fetchAllChannels(success, error);
      return next(action);
    }
    default: {
      return next(action);
    }
  }
};

export default ChannelMiddleware;
