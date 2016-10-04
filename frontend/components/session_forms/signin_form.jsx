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
    this.setState({username: 'albronca', password: 'starwars'});
    const user = {username: 'albronca', password: 'starwars'};
    this.props.signIn({user});
  }

  componentDidUpdate() {
		this.redirectIfLoggedIn();
	}

	redirectIfLoggedIn(){
		if (this.props.loggedIn) {
			hashHistory.push("/channels");
		}
	}

  render() {
    const guestAccount = (
      <button onClick={this.guestSignIn}>guest account</button>
    );

    return(
      <div className="session-form">
        <h2>Sign in to Sloth</h2>
        <span>Enter your username and password.</span>

        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.username}
            onChange={this.updateInput('username')} />
          <input
            type="password"
            value={this.state.password}
            onChange={this.updateInput('password')} />
          <input type="submit" value="Sign in"/>
        </form>

        <span>Don't have an account? <Link to="/signup">Sign up</Link> or browse using a {guestAccount}.</span>
      </div>
    );
  }
}

export default SignInForm;
