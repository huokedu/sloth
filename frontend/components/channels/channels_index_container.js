import { connect } from 'react-redux';
import { signOut } from '../../actions/session_actions';
import { createChannel,
         subscribeToChannel } from '../../actions/channel_actions';
import { fetchCurrentMessages } from '../../actions/message_actions';
import { fetchAllUsers } from '../../actions/user_actions';
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
  fetchAllUsers: () => dispatch(fetchAllUsers()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelsIndex);
