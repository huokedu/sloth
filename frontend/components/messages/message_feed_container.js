import { connect } from 'react-redux';
import MessageFeed from './message_feed';

const mapStateToProps = ({ channels }) => ({
  channel: channels.allChannels[0]
});

export default connect(
  mapStateToProps
)(MessageFeed);
