import React from 'react';
import { Link } from 'react-router';

const ChannelsIndexItem = ({ channel }) => {
  return(
    <li key={channel.id}><Link to={"messages/" + channel.name}>{channel.name}</Link></li>
  );
};

export default ChannelsIndexItem;
