import { connect } from 'react-redux';
import { signOut } from '../../actions/session_actions';
import ChannelsIndex from './channels_index';

const mapStateToProps = ({ channels, currentUser }) => ({
  channels: channels.allChannels,
  currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOut()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelsIndex);
