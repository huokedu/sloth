import React from 'react';
import Message from './message';
import MessageForm from './message_form';

class MessageFeed extends React.Component {
  constructor(props) {
    super(props);

    this.handleUnsubscribe = this.handleUnsubscribe.bind(this);
  }

  handleUnsubscribe() {
    const channel = this.props.allChannels[this.props.currentChannel];
    this.props.unsubscribeFromChannel(
      channel.id
    );
  }

  componentDidUpdate() {
    const end = document.getElementById('messages-end');
    if (end) {
      end.scrollIntoView();
    }
  }

  render() {
    if (this.props.allChannels[this.props.currentChannel]) {
      const thisChannel = this.props.allChannels[this.props.currentChannel];

      const messages = [];
      if (this.props.messages) {
        for (let id in this.props.messages[thisChannel.id]) {
          messages.push(
            <Message
              currentUser={this.props.currentUser}
              key={id}
              message={this.props.messages[thisChannel.id][id]}
              updateMessage={this.props.updateMessage}
              deleteMessage={this.props.deleteMessage} />
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
    }
    else {
      return <section></section>;
    }
  }
}

export default MessageFeed;
