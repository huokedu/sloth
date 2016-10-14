import React from 'react';

const ChannelListItem = ({ channel, subscribeToChannel, closeModal, subscribedChannels }) => {
  const handleSubscribe = () => {
    subscribeToChannel(channel.id);
    closeModal();
  };

  const channelListType = () => {
    const subIds = subscribedChannels.map(subs => subs.id);
    if (subIds.indexOf(channel.id) === -1) {
      return "join";
    } else {
      return "open";
    }
  };

  return(
    <li className={"channel-search-item " + channelListType()}>
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
