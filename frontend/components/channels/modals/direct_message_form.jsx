import React from 'react';

class DirectMessageForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: this.props.input,
      members: this.props.members,
      buttonDisabled: true,
    };
  }

  updateInput(e) {
    if (!this.state.input.length && this.state.members.length) {
      this.setState({buttonDisabled: false});
    } else {
      this.setState({buttonDisabled: true});
    }

    this.props.updateInput(e);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      input: nextProps.input,
      members: nextProps.members,
    });
  }

  render() {
    return(
      <section className='direct-message-form'>
        <h2>Direct Messages</h2>
        <form>
          <input
            type="text"
            onChange={this.updateInput.bind(this)}
            value={this.state.input}
            placeholder="Find or start a conversation" />
          <button disabled={this.state.buttonDisabled}>Go</button>
        </form>
      </section>
    );
  }
}

export default DirectMessageForm;
