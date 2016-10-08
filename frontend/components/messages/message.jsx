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

    this.formStyle = {
      overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'transparent',
        zIndex: 10,
      },
      content: {
        padding: 0,
        position: 'static',
        top: 56,
        left: 10,
        width: 270,
        height: 140,
        zIndex: 11,
        borderRadius: 6,
        border: '1px solid rgba(0,0,0,.15)',
        boxShadow: '0 5px 10px rgba(0,0,0,.12)',
      },
    };
  }

  openMessageForm() {
    this.setState({messageFormOpen: true});
  }

  closeMessageForm() {
    this.setState({messageFormOpen: false});
  }

  render() {
    const message = this.props.message;

    return(
      <li className="message-item">
        <h3 className="message-username">{message.author.username}</h3>
        <span className="message-time">{message.created_at}</span>
        <p className="message-body">
          {message.body}
          <span className="message-edited">
            {message.edited ? "(edited)" : ""}
          </span>
          <button
            className="message-edit-button"
            onClick={this.openMessageForm.bind(this)}>:)</button>
        </p>
        <Modal
          isOpen={this.state.messageFormOpen}
          onRequestClose={this.closeMessageForm}
          style={this.formStyle}>
          <MessageItemForm
            message={message}
            updateMessage={this.props.updateMessage}
            closeMessageForm={this.closeMessageForm} />
        </Modal>
      </li>
    );
  }
}

export default Message;
