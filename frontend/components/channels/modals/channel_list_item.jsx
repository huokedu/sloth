import React from 'react';

const ChannelListItem = ({ channel, subscribeToChannel, closeModal }) => {
  const handleSubscribe = () => {
    subscribeToChannel(channel.id);
    closeModal();
  };

  return(
    <li className="channel-search-item">
      <button onClick={handleSubscribe}>
        <h3 className="channel-search-name">{channel.name}</h3>
        <small className="channel-search-info">
          Created by <b>{channel.creator.username}</b> on {channel.created_at}
        </small>
      </button>
    </li>
  );
};

export default ChannelListItem;
