import React from 'react';
import ChannelsIndexItem from './channels_index_item';
import { hashHistory } from 'react-router';
import ChannelList from './modals/channel_list';
import NewChannelForm from './modals/new_channel_form';
import Modal from 'react-modal';

class ChannelsIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdown: false,
      modalOpen: false,
      modalContent: <div></div>,
    };

    this.modalStyle = {
      overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.75)',
        zIndex: 10,
      },
      content: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        padding: '20px',
        zIndex: 11
      },
    };

    this.signOut = this.signOut.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.toggleClass = this.toggleClass.bind(this);
    this.closeModal = this.closeModal.bind(this);
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

  openChannelList() {
    this.setState({
      modalOpen: true,
      modalContent: (
        <ChannelList
          allChannels={this.props.allChannels}
          subscribeToChannel={this.props.subscribeToChannel}
          closeModal={this.closeModal} />
      ),
    });
  }

  openChannelForm() {
    this.setState({
      modalOpen: true,
      modalContent: (
        <NewChannelForm
          createChannel={this.props.createChannel}
          closeModal={this.closeModal} />
      ),
    });
  }

  closeModal() {
    this.setState({ modalOpen: false });
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
            <button onClick={this.openChannelList.bind(this)}>
              Channels <span>({totalNumChannels})</span>
            </button>
            <button
              className="plus-button"
              onClick={this.openChannelForm.bind(this)}>
              +
            </button>
          </h3>
          <ul className="channel-list">
            { subscribedChannels.map(channel => <ChannelsIndexItem key={channel.id} channel={channel} currentChannel={this.props.currentChannel} />) }
          </ul>
          <h3 className="sidebar-subheading">
            <button>
              Direct Messages <span>(#ppl)</span>
            </button>
            <button className="plus-button">
              +
            </button>
          </h3>
          <ul className="channel-list"></ul>
        </section>

        {this.props.children}

        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          style={this.modalStyle}>
          {this.state.modalContent}
          <button
            className="modal-exit"
            onClick={this.closeModal}>
            <span className="modal-exit-icon">✕</span>
            <span className="modal-exit-text">esc</span>
          </button>
        </Modal>
      </div>
    );
  }
}

export default ChannelsIndex;
