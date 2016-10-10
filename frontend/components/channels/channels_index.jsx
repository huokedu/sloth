import React from 'react';
import ChannelsIndexItem from './channels_index_item';
import { hashHistory } from 'react-router';
import ChannelList from './modals/channel_list';
import UserList from './modals/user_list';
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
        backgroundColor: '#fff',
        zIndex: 10,
      },
      content: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        height: '100vh',
        padding: '20px',
        zIndex: 11
      },
    };
  }

  signOut() {
    this.props.signOut();
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

  openUserList() {
    this.setState({
      modalOpen: true,
      modalContent: (
        <UserList
          users={this.props.users}
          createDirectMessage={this.props.createDirectMessage}
          closeModal={this.closeModal} />
      ),
    });
  }

  closeModal() {
    this.setState({ modalOpen: false });
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

    const directIndexItems = [];
    const directMessages = this.props.currentUser.direct_messages;
    for (let id in directMessages) {
      if (Object.hasOwnProperty.call(directMessages, id)) {
        const channel = directMessages[id];
        directIndexItems.push(
          <ChannelsIndexItem
            key={channel.id}
            channel={channel}
            currentChannel={this.props.channels.currentChannel} />
        );
      }
    }

    let totalNumChannels = 0;
    Object.keys(this.props.channels.allChannels).forEach((id) => {
      if (!this.props.channels.allChannels[id].direct) {
        totalNumChannels += 1;
      }
    });

    return(
      <div className="group">
        <Sidebar
          username={this.props.currentUser.username}
          totalNumChannels={totalNumChannels}
          totalNumUsers={Object.keys(this.props.users).length}
          subscribedChannels={channelIndexItems}
          directMessages={directIndexItems}
          openChannelList={this.openChannelList.bind(this)}
          openChannelForm={this.openChannelForm.bind(this)}
          openUserList={this.openUserList.bind(this)}
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
