import React from 'react';

const ChannelSearchItem = ({ channel }) => (
  <li className="channel-search-item">
    <h3 className="channel-search-name">{channel.name}</h3>
    <small className="channel-search-info">
      Created by <b>{channel.creator.username}</b> on {channel.created_at}
    </small>
  </li>
);

export default ChannelSearchItem;
