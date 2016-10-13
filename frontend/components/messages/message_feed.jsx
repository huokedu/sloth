/* globals Pusher */
import React from 'react';
import Message from './message';
import MessageForm from './message_form';

class MessageFeed extends React.Component {
  constructor(props) {
    super(props);

    this.handleUnsubscribe = this.handleUnsubscribe.bind(this);
  }

  componentDidMount() {
    $('.message-gif').load(() => {
      const end = document.getElementById('messages-end');
      if (end) {
        end.scrollIntoView();
      }
    });

    console.log('Pusher: Initializing!');
    this.pusher = new Pusher('aea52d3bfe768bb2f4bb', {
      encrypted: true
    });

    const channel = this.pusher.subscribe('sloth');

    channel.bind('new_message', (data) => {
      console.log('Pusher: fetching new messages...');
      this.props.fetchCurrentMessages(data.channelId);
      const clear = new Promise(() => {
        this.props.clearNotifications(this.props.currentChannel);
      });
      clear.then(
        (() => this.props.fetchSubscribedChannels()),
        (() => this.props.fetchSubscribedChannels())
      );
    });
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

  componentWillUnmount() {
    this.pusher.unsubscribe(`channel_${this.props.currentChannel}`);
    console.log('Pusher: Goodbye!');
  }

  render() {
    if (this.props.allChannels[this.props.currentChannel]) {
      const thisChannel = this.props.allChannels[this.props.currentChannel];

      const messages = [];
      if (this.props.messages) {
        let previousMessageAuthor;
        for (let id in this.props.messages[thisChannel.id]) {
          messages.push(
            <Message
              currentUser={this.props.currentUser}
              key={id}
              previousMessageAuthor={previousMessageAuthor}
              message={this.props.messages[thisChannel.id][id]}
              updateMessage={this.props.updateMessage}
              deleteMessage={this.props.deleteMessage} />
          );
          previousMessageAuthor = this.props.messages[thisChannel.id][id].author;
        }
      }

      return(
        <section className="message-feed">
          <header>
            <h2 className={'direct-' + thisChannel.direct}>
              {thisChannel.name}
            </h2>
            <small>
              {thisChannel.members.length} members
              {thisChannel.purpose ? ` | ${thisChannel.purpose}` : ''}
            </small>
            <button
              className="leave-channel-button"
              onClick={this.handleUnsubscribe}>Leave this channel</button>
          </header>
          <div className="message-feed-main">
            <section className="channel-info">
              <h2 className={'direct-' + thisChannel.direct}>
                {thisChannel.name}
              </h2>
              <p>
                {thisChannel.creator.username} created this
                channel on {thisChannel.created_at}
              </p>
            </section>
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
      return <section><div id="messages-end"></div></section>;
    }
  }
}

export default MessageFeed;
