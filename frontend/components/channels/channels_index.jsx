import React from 'react';
import ChannelsIndexItem from './channels_index_item';
import { hashHistory } from 'react-router';

const ChannelsIndex = ({ channels, currentUser, signOut }) => {
  function signOutCurrentUser() {
    signOut();
    hashHistory.push('/');
  }

  return(
    <div className="sidebar">
      <div>
        <h2>{currentUser.username}</h2>
        <button onClick={signOutCurrentUser}>Sign out of Sloth</button>
      </div>
      <ul>
        { channels.map(channel => <ChannelsIndexItem key={channel.id} channel={channel} />) }
      </ul>
    </div>
  );
};

export default ChannelsIndex;
