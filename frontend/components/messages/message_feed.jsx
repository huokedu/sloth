import React from 'react';

const MessageFeed = ({ channel }) => {
  if (channel) {
    return(
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
  } else {
    return <section className="message-feed"></section>;
  }
};

export default MessageFeed;
