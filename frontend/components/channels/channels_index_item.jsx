import React from 'react';
import { Link } from 'react-router';

const ChannelsIndexItem = ({ channel }) => {
  return(
    <li key={channel.id}><Link to={"messages/" + channel.id}>{channel.name}</Link></li>
  );
};

export default ChannelsIndexItem;
