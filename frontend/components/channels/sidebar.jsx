import React from 'react';
import UserDropdown from './user_dropdown';

const Sidebar = (props) => (
  <section className="sidebar">
    <UserDropdown
      username={props.username}
      signOut={props.signOut} />

    <h3 className="sidebar-subheading">
      <button onClick={props.openChannelList}>
        Channels <span>({props.totalNumChannels})</span>
      </button>
      <button
        className="plus-button"
        onClick={props.openChannelForm}>
        +
      </button>
    </h3>

    <ul className="channel-list">
      {props.subscribedChannels}
    </ul>

    <h3 className="sidebar-subheading">
      <button onClick={props.openUserList}>
        Direct Messages <span>({props.totalNumUsers})</span>
      </button>
      <button
        className="plus-button"
        onClick={props.openUserList}>
        +
      </button>
    </h3>
    <ul className="channel-list">
      {props.directMessages}
    </ul>
  </section>
);

export default Sidebar;
