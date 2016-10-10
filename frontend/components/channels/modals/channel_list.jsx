import React from 'react';
import ChannelListItem from './channel_list_item';

const ChannelList = ({ allChannels, subscribeToChannel, closeModal }) => {
  const channels = [];
  for (let id in allChannels) {
    if (!allChannels[id].direct) {
      channels.push(allChannels[id]);
    }
  }

  const channelItems = channels.map((channel) => (
    <ChannelListItem
      key={channel.id}
      channel={channel}
      subscribeToChannel={subscribeToChannel}
      closeModal={closeModal}/>
  ));

  return(
      <section className="channel-search">
        <h2>Browse all channels</h2>
        <ul>
          {channelItems}
        </ul>
      </section>
  );
};

export default ChannelList;
