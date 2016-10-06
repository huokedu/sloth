import React from 'react';
import Modal from 'react-modal';
import ChannelSearchItem from './channel_search_item';

class ChannelSearch extends React.Component {
  constructor(props) {
    super(props);

    this.style = {
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
      }
    };
  }

  render() {
    const channels = [];
    for (let id in this.props.allChannels) {
      channels.push(this.props.allChannels[id]);
    }

    return(
      <Modal
        isOpen={this.props.isOpen}
        onRequestClose={this.props.closeChannelSearch.bind(this)}
        style={this.style}>
        <section className="channel-search">
          <h2>Browse all channels</h2>
          <ul>
            {channels.map(channel => <ChannelSearchItem key={channel.id} channel={channel} />)}
          </ul>
        </section>
      </Modal>
    );
  }
}

export default ChannelSearch;
