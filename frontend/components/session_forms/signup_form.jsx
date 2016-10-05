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
      hashHistory.push("/messages");
    }
  }

  displayErrors() {
    if (this.props.errors.length) {
      return(
        <ul>
          {this.props.errors.map((error, index) => <span className="error" key={index}>{error}</span>)}
        </ul>
      );
    }
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  render() {
    return(
      <div>
        {this.displayErrors()}
        <div className="session-form">
          <h2>Sign in to Sloth</h2>
          <h3>Enter your <b>username</b>, <b>email</b>, and <b>password</b>.</h3>

          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={this.state.username}
              placeholder="username"
              onChange={this.updateInput('username')} />
            <input
              type="text"
              value={this.state.email}
              placeholder="you@domain.com"
              onChange={this.updateInput('email')} />
            <input
              type="password"
              value={this.state.password}
              placeholder="password"
              onChange={this.updateInput('password')} />
            <input type="submit" value="Sign up"/>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUpForm;
