import React from 'react';
import UserListItem from './user_list_item';
import DirectMessageForm from './direct_message_form';

class UserList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
    };

    this.addMember = this.addMember.bind(this);
    this.removeMember = this.removeMember.bind(this);
  }

  addMember(member) {
    this.setState({
      [member.id]: member,
      input: '',
    });
  }

  removeMember(member) {
    this.setState({[member.id]: null});
  }

  updateInput(e) {
    this.setState({input: e.currentTarget.value});
  }

  render() {
    const regex = new RegExp(this.state.input);
    const userListItems = [];
    for (let id in this.props.users) {
      const user = this.props.users[id];
      if (user.username.match(regex)) {
        userListItems.push(
          <UserListItem
            key={user.id}
            user={user}
            addMember={this.addMember} />
        );
      }
    }

    const members = [];
    for (let key in this.state) {
      if (key !== 'input' && this.state[key]) {
        members.push(this.state[key]);
      }
    }

    return(
      <section>
        <DirectMessageForm
          input={this.state.input}
          members={members}
          updateInput={this.updateInput.bind(this)}
          removeMember={this.removeMember} />
        <ul className="user-list">
          {userListItems}
        </ul>
      </section>
    );
  }
}

export default UserList;
