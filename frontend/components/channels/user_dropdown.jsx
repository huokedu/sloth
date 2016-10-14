import React from 'react';
import Modal from 'react-modal';

class UserDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdownOpen: false,
    };

    this.style = {
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
        position: 'absolute',
        top: 56,
        left: 10,
        width: 270,
        height: 120,
        zIndex: 11,
        borderRadius: 6,
        border: '1px solid rgba(0,0,0,.15)',
        boxShadow: '0 5px 10px rgba(0,0,0,.12)',
      },
    };
  }

  openDropdown() {
    this.setState({dropdownOpen: true});
  }

  closeDropdown() {
    this.setState({dropdownOpen: false});
  }

  render() {
    const username = this.props.username;

    return(
      <div>
        <div
          onClick={this.openDropdown.bind(this)}
          className={"sidebar-header" + (this.state.dropdownOpen ? " open" : "")}>
          <h1 className="sidebar-logo">Sloth</h1>
          <h2 className="sidebar-username">{username}</h2>
        </div>
        <Modal
          isOpen={this.state.dropdownOpen}
          onRequestClose={this.closeDropdown.bind(this)}
          style={this.style}>
          <section className="sidebar-dropdown">
            <h2>{username}</h2>
            <h3>@{username}</h3>
            <ul>
              <li>
                <button
                  onClick={this.props.signOut}>Sign out of Sloth</button>
              </li>
            </ul>
          </section>
        </Modal>
      </div>
    );
  }
}

export default UserDropdown;
