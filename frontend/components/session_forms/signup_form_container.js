import { connect } from 'react-redux';
import { signUp } from '../../actions/session_actions';
import SignUpForm from './signup_form';

const mapStateToProps = ({ currentUser }) => ({
  loggedIn: (currentUser.id),
});

const mapDispatchToProps = (dispatch) => ({
  signUp: (userParams) => dispatch(signUp(userParams)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpForm);
