import React from 'react';
import ChannelsIndexItem from './channels_index_item';
import { hashHistory } from 'react-router';
import ChannelSearch from './channel_search';
import ChannelForm from './channel_form';

class ChannelsIndex extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      dropdown: false,
      channelSearchOpen: false,
      channelFormOpen: false,
    };

    this.signOut = this.signOut.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.toggleClass = this.toggleClass.bind(this);
  }

  renderDefaultChannel() {
    const currentUser = this.props.currentUser;
    const defaultChannel = currentUser.subscribed_channels[0].id;
    hashHistory.push(`/messages/${defaultChannel}`);
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

  openChannelSearch() {
    this.setState({ channelSearchOpen: true });
  }

  closeChannelSearch() {
    this.setState({ channelSearchOpen: false });
  }

  openChannelForm() {
    this.setState({ channelFormOpen: true });
  }

  closeChannelForm() {
    this.setState({ channelFormOpen: false });
  }

  componentDidMount() {
    if (!this.props.currentChannel) {
      this.renderDefaultChannel();
    }
  }

  render() {
    const username = this.props.currentUser.username;
    const subscribedChannels = [];
    for (let id in this.props.subscribedChannels) {
      subscribedChannels.push(this.props.subscribedChannels[id]);
    }
    const totalNumChannels = Object.keys(this.props.allChannels).length;

    return(
      <div className="group">
        <section className="sidebar">
          <div
            className={"sidebar-header" + this.toggleClass()}
            onClick={this.toggleDropdown}>

            <h1 className="sidebar-logo">Sloth</h1>
            <h2 className="sidebar-username">{username}</h2>
            <div className="sidebar-dropdown">
              <h2>{username}</h2>
              <h3>@{username}</h3>
              <ul>
                <li>
                  <button>Profile</button>
                </li>
                <li>
                  <button
                    onClick={this.signOut}>Sign out of Sloth</button>
                </li>
              </ul>
            </div>
          </div>
          <h3 className="sidebar-subheading">
            <button onClick={this.openChannelSearch.bind(this)}>
              Channels <span>({totalNumChannels})</span>
            </button>
            <button className="plus-button" onClick={this.openChannelForm.bind(this)}>
              +
            </button>
          </h3>
          <ul className="channel-list">
            { subscribedChannels.map(channel => <ChannelsIndexItem key={channel.id} channel={channel} currentChannel={this.props.currentChannel} />) }
          </ul>
        </section>
        {this.props.children}
        <ChannelSearch
          isOpen={this.state.channelSearchOpen}
          closeChannelSearch={this.closeChannelSearch.bind(this)}
          allChannels={this.props.allChannels} />
        <ChannelForm
          isOpen={this.state.channelFormOpen}
          closeChannelForm={this.closeChannelForm.bind(this)}
          createChannel={this.props.createChannel} />
      </div>
    );
  }
}

export default ChannelsIndex;
