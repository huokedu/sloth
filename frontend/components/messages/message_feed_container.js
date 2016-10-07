import { connect } from 'react-redux';
import MessageFeed from './message_feed';

const mapStateToProps = ({ channels }) => ({
  channel: channels.allChannels[channels.currentChannel]
});

export default connect(
  mapStateToProps
)(MessageFeed);
