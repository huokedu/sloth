import React from 'react';
import Modal from 'react-modal';
import MessageItemForm from './message_item_form';

class Message extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messageFormOpen: false,
    };
    this.closeMessageForm = this.closeMessageForm.bind(this);
  }

  openMessageForm() {
    this.setState({messageFormOpen: true});
  }

  closeMessageForm() {
    this.setState({messageFormOpen: false});
  }

  handleDelete() {
    this.props.deleteMessage(
      this.props.message.channelId,
      this.props.message.id
    );
  }

  image() {
    const url = this.props.message.image_url;
    if (url !== '/images/original/missing.png') {
      return(
        <img className="message-gif" src={this.props.message.image_url} />
      );
    }
  }

  messageActions() {
    if (this.props.currentUser.id === this.props.message.author.id) {
      return(
        <ul className="message-actions">
          <li>
            <button
              className="message-edit-button"
              onClick={this.openMessageForm.bind(this)}>
              Edit
            </button>
          </li>
          <li>
            <button
              className="message-delete-button"
              onClick={this.handleDelete.bind(this)}>
              Delete
            </button>
          </li>
        </ul>
      );
    }
  }

  render() {
    const message = this.props.message;
    let messageHeader;

    if (this.props.previousMessageAuthor) {
      if (this.props.previousMessageAuthor.id !== message.author.id) {
        messageHeader = (
          <div>
            <img className="message-avatar" src={message.author.avatar_url} />
            <h3 className="message-username">{message.author.username}</h3>
            <span className="message-time">{message.created_at}</span>
          </div>
        );
      }
    } else {
      messageHeader = (
        <div>
          <img className="message-avatar" src={message.author.avatar_url} />
          <h3 className="message-username">{message.author.username}</h3>
          <span className="message-time">{message.created_at}</span>
        </div>
      );
    }

    if (this.state.messageFormOpen) {
      return(
        <li className="message-item">
          <MessageItemForm
            message={message}
            updateMessage={this.props.updateMessage}
            closeMessageForm={this.closeMessageForm} />
        </li>
      );
    } else {
      return(
        <li className="message-item">
          {messageHeader}
          <p className="message-body">
            {message.body}
            <span className="message-edited">
              {message.edited ? "(edited)" : ""}
            </span>
            {this.image()}
          </p>
          {this.messageActions()}
        </li>
      );
    }
  }
}

export default Message;
