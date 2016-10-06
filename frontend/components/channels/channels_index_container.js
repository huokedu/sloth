import { connect } from 'react-redux';
import { signOut } from '../../actions/session_actions';
import { createChannel,
         subscribeToChannel } from '../../actions/channel_actions';
import ChannelsIndex from './channels_index';

const mapStateToProps = ({ channels, currentUser }) => ({
  allChannels: channels.allChannels,
  subscribedChannels: currentUser.subscribed_channels,
  currentChannel: channels.currentChannel,
  currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOut()),
  createChannel: (channelParams) => dispatch(createChannel(channelParams)),
  subscribeToChannel: (channelId) => dispatch(subscribeToChannel(channelId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelsIndex);
