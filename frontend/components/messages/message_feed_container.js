import { connect } from 'react-redux';
import MessageFeed from './message_feed';
import { unsubscribeFromChannel } from '../../actions/channel_actions';
import { fetchCurrentMessages,
         createMessage } from '../../actions/message_actions';
import { withRouter } from 'react-router';

const mapStateToProps = ({ channels, messages }) => ({
  channel: channels.allChannels[channels.currentChannel],
  allChannels: channels.allChannels,
  messages,
});

const mapDispatchToProps = (dispatch) => ({
  unsubscribeFromChannel: (channelId) => {
    dispatch(unsubscribeFromChannel(channelId));
  },
  fetchCurrentMessages: (channelId) => {
    dispatch(fetchCurrentMessages(channelId));
  },
  createMessage: (messageParams) => {
    dispatch(createMessage(messageParams));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(MessageFeed));
