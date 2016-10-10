import { connect } from 'react-redux';
import { signOut } from '../../actions/session_actions';
import { createChannel,
         subscribeToChannel,
         createDirectMessage } from '../../actions/channel_actions';
import { fetchCurrentMessages } from '../../actions/message_actions';
import ChannelsIndex from './channels_index';

const mapStateToProps = ({ users, channels, currentUser }) => ({
  users,
  channels,
  currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOut()),
  createChannel: (channelParams) => dispatch(createChannel(channelParams)),
  subscribeToChannel: (channelId) => dispatch(subscribeToChannel(channelId)),
  fetchCurrentMessages: (channelId) => {
    dispatch(fetchCurrentMessages(channelId));
  },
  createDirectMessage: (channelParams) => {
    dispatch(createDirectMessage(channelParams));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelsIndex);
