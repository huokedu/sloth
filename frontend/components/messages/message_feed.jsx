import React from 'react';
import { hashHistory } from 'react-router';

const MessageFeed = ({ channel, unsubscribeFromChannel, allChannels, params }) => {
  function handleUnsubscribe () {
    unsubscribeFromChannel(channel.id);
  }

  const thisChannel = channel || allChannels[params.channelId];
  if (thisChannel) {
    return(
      <section className="message-feed">
        <header>
          <h2>{thisChannel.name}</h2>
          <small>{thisChannel.members.length} members | {thisChannel.purpose}</small>
          <button className="leave-channel-button" onClick={handleUnsubscribe}>Leave this channel</button>
        </header>
        <p className="message-feed-main">
          Messages coming soon :)<br />
          Messages coming soon :)<br />
          Messages coming soon :)<br />
          Messages coming soon :)<br />
          Messages coming soon :)<br />
          Messages coming soon :)<br />
          Messages coming soon :)<br />
          Messages coming soon :)<br />
          Messages coming soon :)<br />
          Messages coming soon :)<br />
          Messages coming soon :)<br />
          Messages coming soon :)<br />
          Messages coming soon :)<br />
          Messages coming soon :)<br />
          Messages coming soon :)<br />
          Messages coming soon :)<br />
          Messages coming soon :)<br />
          Messages coming soon :)<br />
        </p>
      </section>
    );
  } else {
    return <section className="message-feed"></section>;
  }
};

export default MessageFeed;
