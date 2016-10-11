import React from 'react';
import { Link } from 'react-router';

const ChannelsIndexItem = ({ channel, currentChannel }) => {
  const selection = (channel.id === parseInt(currentChannel)) ? "channel-selected" : "";
  const notifications = (channel.notifications) ? "notifications": "";
  const dm = channel.direct ? `direct d${channel.numMembers}` : "indirect";

  return(
    <li className={selection + " " + notifications}>
      <Link
        className={dm}
        to={"messages/" + channel.id}>
        {channel.name}
        {(channel.notifications && channel.direct) ? (<span className="notifications-number">{channel.notifications}</span>) : ""}
      </Link>
    </li>
  );
};

export default ChannelsIndexItem;
