import React from 'react';

const ChannelsIndexItem = ({ channel }) => {
  return(
    <li key={channel.id}>{channel.name}</li>
  );
};

export default ChannelsIndexItem;
