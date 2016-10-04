import React from 'react';
import { Link, hashHistory } from 'react-router';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      email: '',
      password: '',
    };

    this.updateInput = this.updateInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateInput(field) {
    return e => this.setState({[field]: e.currentTarget.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.signUp({user});
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
            type="text"
            value={this.state.email}
            onChange={this.updateInput('email')} />
          <input
            type="password"
            value={this.state.password}
            onChange={this.updateInput('password')} />
          <input type="submit" value="Sign up"/>
        </form>
      </div>
    );
  }
}

export default SignUpForm;
