import React from 'react';
import Modal from 'react-modal';

class ChannelForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      purpose: '',
    };

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

    this.updateInput = this.updateInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const channel = this.state;
    this.props.createChannel({channel});
    this.props.closeChannelForm();
  }

  updateInput(field) {
    return e => this.setState({[field]: e.currentTarget.value});
  }

  render() {
    return(
      <Modal
        isOpen={this.props.isOpen}
        onRequestClose={this.props.closeChannelForm.bind(this)}
        style={this.style}>
        <section className="channel-form">
          <h2>Create a new channel</h2>
          <form onSubmit={this.handleSubmit}>
            <label>Channel name
              <input
                type="text"
                value={this.state.name}
                onChange={this.updateInput('name')} />
            </label>

            <label>Purpose
              <textarea
                value={this.state.purpose}
                placeholder="Briefly describe the purpose of this channel"
                onChange={this.updateInput('purpose')}></textarea>
            </label>

            <input type="submit" value="Create channel"/>
          </form>
        </section>
      </Modal>
    );
  }
}

export default ChannelForm;
