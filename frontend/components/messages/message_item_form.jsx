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
    this.props.updateMessage({message});
    this.props.closeMessageForm();
  }

  closeMessageForm(e) {
    e.preventDefault();
    this.props.closeMessageForm();
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input
          type="text"
          value={this.state.body}
          onChange={this.updateInput.bind(this) }/>
        <button onClick={this.closeMessageForm.bind(this)}>
          Cancel
        </button>
        <button>Save changes</button>
      </form>
    );
  }
}

export default MessageItemForm;
