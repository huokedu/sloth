import React from 'react';
import { Link } from 'react-router';

const ChannelsIndexItem = ({ channel, currentChannel }) => {
  const selection = (channel.id === parseInt(currentChannel)) ? "channel-selected" : "";
  return(
    <li className={selection}>
      <Link to={"messages/" + channel.id}>{channel.name}</Link>
    </li>
  );
};

export default ChannelsIndexItem;
