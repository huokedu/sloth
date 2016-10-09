/* globals Pusher */

import React from 'react';
import ChannelsIndexItem from './channels_index_item';
import { hashHistory } from 'react-router';
import ChannelList from './modals/channel_list';
import NewChannelForm from './modals/new_channel_form';
import Modal from 'react-modal';
import Sidebar from './sidebar';

class ChannelsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.closeModal = this.closeModal.bind(this);

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
  }

  renderDefaultChannel() {
    const currentUser = this.currentUser;
    const defaultChannel = this.props.currentUser.subscribed_channels[0].id;
    hashHistory.push(`/messages/${defaultChannel}`);
  }

  signOut() {
    this.props.signOut();
    hashHistory.push('/');
  }

  openChannelList() {
    this.setState({
      modalOpen: true,
      modalContent: (
        <ChannelList
          allChannels={this.props.channels.allChannels}
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
    if (!this.currentChannel) {
      this.renderDefaultChannel();
    }
  }

  componentDidUpdate() {
    const pusher = new Pusher('aea52d3bfe768bb2f4bb', {
     encrypted: true
    });

    const channel = pusher.subscribe('new_messages');
    for (let id in this.props.currentUser.subscribed_channels) {
      if (id === this.props.channels.currentChannel) {
        channel.bind(`${id}`, (data) => {
          console.log('fetching');
          this.props.fetchCurrentMessages(this.props.channels.currentChannel);
        });
      }
    }
  }

  render() {
    const channelIndexItems = [];
    const subscribedChannels = this.props.currentUser.subscribed_channels;
    for (let id in subscribedChannels) {
      if (Object.hasOwnProperty.call(subscribedChannels, id)) {
        const channel = subscribedChannels[id];
        channelIndexItems.push(
          <ChannelsIndexItem
            key={channel.id}
            channel={channel}
            currentChannel={this.props.channels.currentChannel} />
        );
      }
    }

    return(
      <div className="group">
        <Sidebar
          username={this.props.currentUser.username}
          totalNumChannels={Object.keys(this.props.channels.allChannels).length}
          subscribedChannels={channelIndexItems}
          openChannelList={this.openChannelList.bind(this)}
          openChannelForm={this.openChannelForm.bind(this)}
          signOut={this.signOut.bind(this)} />

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
