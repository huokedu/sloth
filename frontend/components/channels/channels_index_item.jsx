import React from 'react';
import { Link } from 'react-router';

const ChannelsIndexItem = ({ channel, currentChannel }) => {
  const selection = (channel.id === parseInt(currentChannel)) ? "channel-selected" : "";
  const dm = channel.direct ? `direct d${channel.numMembers}` : "indirect";

  return(
    <li className={selection}>
      <Link
        className={dm}
        to={"messages/" + channel.id}>{channel.name}</Link>
    </li>
  );
};

export default ChannelsIndexItem;
