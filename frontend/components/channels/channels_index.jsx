import React from 'react';
import ChannelsIndexItem from './channels_index_item';
import { hashHistory } from 'react-router';

class ChannelsIndex extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      dropdown: false
    };

    this.signOut = this.signOut.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.toggleClass = this.toggleClass.bind(this);
  }

  signOut() {
    this.props.signOut();
    hashHistory.push('/');
  }

  toggleDropdown() {
    this.setState({dropdown: !this.state.dropdown});
  }

  toggleClass() {
    return (this.state.dropdown) ? " toggled" : "";
  }

  render() {
    const username = this.props.currentUser.username;

    return(
      <div className="group">
        <section className="sidebar">
          <div className={"sidebar-header" + this.toggleClass()} onClick={this.toggleDropdown}>
            <h1 className="sidebar-logo">Sloth</h1>
            <h2 className="sidebar-username">{username}</h2>
            <div className="sidebar-dropdown">
              <h2>{username}</h2>
              <h3>@{username}</h3>
              <ul>
                <li><button>Profile</button></li>
                <li><button onClick={this.signOut}>Sign out of Sloth</button></li>
              </ul>
            </div>
          </div>
          <h3 className="sidebar-subheading">Channels <span>({this.props.channels.length})</span></h3>
          <ul className="channel-list">
            { this.props.channels.map(channel => <ChannelsIndexItem key={channel.id} channel={channel} />) }
          </ul>
        </section>
        {this.props.children}
      </div>
    );
  }
}

export default ChannelsIndex;
