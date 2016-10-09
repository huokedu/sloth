import React from 'react';

class MessageItemForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      body: this.props.message.body,
    };
  }

  updateInput(e) {
    this.setState({body: e.currentTarget.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const message = this.state;
    this.props.updateMessage({
      id: this.props.message.id,
      message,
    });
    this.props.closeMessageForm();
  }

  closeMessageForm(e) {
    e.preventDefault();
    this.props.closeMessageForm();
  }

  render() {
    return(
      <form
        className="message-item-form"
        onSubmit={this.handleSubmit.bind(this)}>
        <input
          type="text"
          value={this.state.body}
          onChange={this.updateInput.bind(this) }/>
        <button type="button" onClick={this.closeMessageForm.bind(this)}>
          Cancel
        </button>
        <input type="submit" value="⏎   Save changes" />
      </form>
    );
  }
}

export default MessageItemForm;
