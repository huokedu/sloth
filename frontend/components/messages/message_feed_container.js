import { connect } from 'react-redux';
import MessageFeed from './message_feed';
import { unsubscribeFromChannel } from '../../actions/channel_actions';
import { withRouter } from 'react-router';

const mapStateToProps = ({ channels }) => ({
  channel: channels.allChannels[channels.currentChannel],
  allChannels: channels.allChannels,
});

const mapDispatchToProps = (dispatch) => ({
  unsubscribeFromChannel: (channelId) => dispatch(unsubscribeFromChannel(channelId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(MessageFeed));
