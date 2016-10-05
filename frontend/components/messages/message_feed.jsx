import React from 'react';

const MessageFeed = ({ channel }) => (
  <section className="message-feed">
    <header>
      <h2>{channel.name}</h2>
      <small>{channel.members.length} members | {channel.purpose}</small>
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

export default MessageFeed;
