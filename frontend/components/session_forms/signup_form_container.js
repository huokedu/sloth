import { connect } from 'react-redux';
import { signUp, clearErrors } from '../../actions/session_actions';
import SignUpForm from './signup_form';

const mapStateToProps = ({ currentUser, errors }) => ({
  loggedIn: (currentUser.id),
  errors,
});

const mapDispatchToProps = (dispatch) => ({
  signUp: (userParams) => dispatch(signUp(userParams)),
  clearErrors: () => dispatch(clearErrors()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpForm);
