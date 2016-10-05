import React from 'react';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';
import { signOut } from '../../actions/session_actions';

class Channels extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      channels: ''
    };

    this.signOut = this.signOut.bind(this);
  }

  componentDidMount() {
    if (this.props.loggedIn) {
      this.setState({channels: "You are now authorized to see channels!"});
    } else {
      hashHistory.push('/signin');
    }
  }

  redirectIfLoggedOut(){
    if (!this.props.loggedIn) {
      hashHistory.push('/signin');
    }
  }

  signOut() {
    this.props.signOut();
    hashHistory.push('/');
  }

  render() {
    return (
      <div>
        {this.state.channels}
        <br/>
        <button onClick={this.signOut}>Sign out of Sloth</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loggedIn: state.currentUser.id,
});

const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOut()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Channels);
