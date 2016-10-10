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
        <form>
          <ul>
            {selectedMembers}
          </ul>
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
