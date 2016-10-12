import React from 'react';
import { Link, hashHistory } from 'react-router';

class SignInForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };

    this.updateInput = this.updateInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.guestSignIn = this.guestSignIn.bind(this);
  }

  updateInput(field) {
    return e => this.setState({[field]: e.currentTarget.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.signIn({user});
  }

  guestSignIn() {
    this.setState({username: 'alleycat', password: 'starwars'});
    const user = {username: 'alleycat', password: 'starwars'};
    this.props.signIn({user});
  }

  componentDidUpdate() {
		this.redirectIfLoggedIn();
	}

  componentDidMount() {
    this.props.clearErrors();
  }

	redirectIfLoggedIn(){
		if (this.props.loggedIn) {
			hashHistory.push("/messages");
		}
	}

  displayErrors() {
    if (this.props.errors.length) {
      return <span className="error">Sorry, you entered an incorrect username or password.</span>;
    }
  }

  render() {
    const guestAccount = (
      <button onClick={this.guestSignIn}>guest account</button>
    );

    return(
      <div>
        {this.displayErrors()}
        <div className="session-form">
          <h2>Sign in to Sloth</h2>
          <h3>Enter your <b>username</b> and <b>password</b>.</h3>

          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="username"
              value={this.state.username}
              onChange={this.updateInput('username')} />
            <input
              type="password"
              placeholder="password"
              value={this.state.password}
              onChange={this.updateInput('password')} />
            <input type="submit" value="Sign in"/>
          </form>

          <span>Don't have an account? <Link to="/signup">Sign up</Link> or browse using a {guestAccount}.</span>
        </div>
      </div>
    );
  }
}

export default SignInForm;
