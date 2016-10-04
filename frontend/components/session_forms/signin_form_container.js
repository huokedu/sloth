import { connect } from 'react-redux';
import { signIn } from '../../actions/session_actions';
import SignInForm from './signin_form';

const mapStateToProps = ({ currentUser }) => ({
  loggedIn: (currentUser.id),
});

const mapDispatchToProps = (dispatch) => ({
  signIn: (userParams) => dispatch(signIn(userParams)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInForm);
