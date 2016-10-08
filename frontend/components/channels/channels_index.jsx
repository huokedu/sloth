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
    const currentUser = this.props.currentUser;
    const defaultChannel = currentUser.subscribed_channels[0].id;
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
    const subscribedChannels = [];
    for (let id in this.props.subscribedChannels) {
      const channel = this.props.subscribedChannels[id];
      subscribedChannels.push(
        <ChannelsIndexItem
          key={channel.id}
          channel={channel}
          currentChannel={this.props.currentChannel} />
      );
    }

    return(
      <div className="group">
        <Sidebar
          username={this.props.currentUser.username}
          totalNumChannels={Object.keys(this.props.allChannels).length}
          subscribedChannels={subscribedChannels}
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
            onClick={this.closeModal.bind(this)}>
            <span className="modal-exit-icon">✕</span>
            <span className="modal-exit-text">esc</span>
          </button>
        </Modal>
      </div>
    );
  }
}

export default ChannelsIndex;
