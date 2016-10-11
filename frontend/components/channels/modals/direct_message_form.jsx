import React from 'react';
import DirectMessageFormMember from './direct_message_form_member';

class DirectMessageForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: this.props.input,
      members: this.props.members,
      buttonDisabled: true,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateInput(e) {
    this.props.updateInput(e);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      input: nextProps.input,
      members: nextProps.members,
    });

    if (nextProps.input.length === 0 && nextProps.members.length) {
      this.setState({buttonDisabled: false});
    } else {
      this.setState({buttonDisabled: true});
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.state.members.length) {
      const name = this.state.members.concat([this.props.currentUser]).map((member) => {
        return member.username;
      }).sort().join(',');
      const members = this.state.members.map(member => member.id);
      const channelParams = ({
        channel: {name, direct: true},
        members,
      });
      this.props.createDirectMessage(channelParams);
      this.props.closeModal();
    }
  }

  componentDidMount() {
    // this is for the backspace functionality
  }

  render() {
    const selectedMembers = [];
    this.props.members.forEach((member) => {
      selectedMembers.push(
        <DirectMessageFormMember
          key={member.id}
          member={member}
          removeMember={this.props.removeMember} />
      );
    });

    return(
      <section className='direct-message-form'>
        <h2>Direct Messages</h2>
        <form onSubmit={this.handleSubmit}>
          <ul className="direct-message-form-members">
            {selectedMembers}
          </ul>
          <input
            type="text"
            onChange={this.updateInput.bind(this)}
            value={this.state.input}
            placeholder={selectedMembers.length ? "" : "Find or start a conversation"} />
          <input type="submit" style={{display: 'none'}} />
        </form>
        <button
          onClick={this.handleSubmit}
          className="direct-message-form-submit"
          disabled={this.state.buttonDisabled}>Go</button>
      </section>
    );
  }
}

export default DirectMessageForm;
