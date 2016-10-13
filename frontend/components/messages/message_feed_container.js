import { connect } from 'react-redux';
import MessageFeed from './message_feed';
import { unsubscribeFromChannel,
         fetchSubscribedChannels,
         clearNotifications } from '../../actions/channel_actions';
import { fetchCurrentMessages,
         createMessage,
         updateMessage,
         deleteMessage,
         receiveSingleMessage } from '../../actions/message_actions';
import { withRouter } from 'react-router';

const mapStateToProps = ({ channels, messages, currentUser }) => ({
  currentChannel: channels.currentChannel,
  allChannels: channels.allChannels,
  messages,
  currentUser,
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
  updateMessage: (messageParams) => {
    dispatch(updateMessage(messageParams));
  },
  deleteMessage: (channelId, messageId) => {
    dispatch(deleteMessage(channelId, messageId));
  },
  fetchSubscribedChannels: () => {
    dispatch(fetchSubscribedChannels());
  },
  clearNotifications: (channelId) => {
    dispatch(clearNotifications(channelId));
  },
  receiveSingleMessage: (message) => {
    dispatch(receiveSingleMessage(message));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(MessageFeed));
