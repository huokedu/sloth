/* globals Pusher */

import React from 'react';
import Message from './message';
import MessageForm from './message_form';

class MessageFeed extends React.Component {
  constructor(props) {
    super(props);

    this.handleUnsubscribe = this.handleUnsubscribe.bind(this);
    // this.channel = this.channel.bind(this);
  }

  handleUnsubscribe() {
    const channel = this.props.allChannels[this.props.currentChannel];
    this.props.unsubscribeFromChannel(
      channel.id
    );
  }
  //
  // channel() {
  //   if (this.props.channel) {
  //     return this.props.channel;
  //   } else if (this.props.allChannels[this.props.params.channelId]) {
  //     return(
  //       this.props.allChannels[this.props.params.channelId]
  //     );
  //   }
  // }

  componentDidUpdate() {
    const end = document.getElementById('messages-end');
    if (end) {
      end.scrollIntoView();
    }
  }

  componentDidMount() {
    const pusher = new Pusher('aea52d3bfe768bb2f4bb', {
     encrypted: true
    });

    const channel = pusher.subscribe(`channel_${this.props.currentChannel}`);
    channel.bind('new_message', (data) => {
      this.props.fetchCurrentMessages(this.props.currentChannel);
    });
  }

  render() {
    if (this.props.allChannels[this.props.currentChannel]) {
      const thisChannel = this.props.allChannels[this.props.currentChannel];

      const messages = [];
      if (this.props.messages) {
        for (let id in this.props.messages[thisChannel.id]) {
          messages.push(
            <Message
              key={id}
              message={this.props.messages[thisChannel.id][id]} />
          );
        }
      }

      return(
        <section className="message-feed">
          <header>
            <h2>{thisChannel.name}</h2>
            <small>
              {thisChannel.members.length} members | {thisChannel.purpose}
            </small>
            <button
              className="leave-channel-button"
              onClick={this.handleUnsubscribe}>Leave this channel</button>
          </header>
          <div className="message-feed-main">
            <ul id="message-list">
              {messages}
            </ul>
            <div id="messages-end"></div>
          </div>
          <MessageForm
            channel={thisChannel}
            createMessage={this.props.createMessage} />
        </section>
      );
    } else {
      return <section></section>;
    }
  }
}

export default MessageFeed;
