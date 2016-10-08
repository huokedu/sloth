import React from 'react';

class NewChannelForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      purpose: '',
    };

    this.updateInput = this.updateInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const channel = this.state;
    this.props.createChannel({channel});
    this.props.closeModal();
  }

  updateInput(field) {
    return e => this.setState({[field]: e.currentTarget.value});
  }

  render() {
    return(
      <section className="channel-form">
        <h2>Create a new channel</h2>
        <form onSubmit={this.handleSubmit}>
          <label className="channel-form-label">Channel name
            <input
              type="text"
              value={this.state.name}
              onChange={this.updateInput('name')} />
          </label>

          <label className="channel-form-label">Purpose
            <textarea
              value={this.state.purpose}
              placeholder="Briefly describe the purpose of this channel"
              onChange={this.updateInput('purpose')}></textarea>
          </label>

          <input className="channel-form-submit" type="submit" value="Create channel"/>
        </form>
      </section>
    );
  }
}

export default NewChannelForm;
