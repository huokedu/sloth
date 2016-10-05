import { connect } from 'react-redux';
import { signIn, clearErrors } from '../../actions/session_actions';
import SignInForm from './signin_form';

const mapStateToProps = ({ currentUser, errors }) => ({
  loggedIn: (currentUser.id),
  errors,
});

const mapDispatchToProps = (dispatch) => ({
  signIn: (userParams) => dispatch(signIn(userParams)),
  clearErrors: () => dispatch(clearErrors()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInForm);
