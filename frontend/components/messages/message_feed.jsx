import React from 'react';

const MessageFeed = ({ channel }) => (
  <section className="message-feed">
    <h2>{channel.name}</h2>
    <h2>Messages coming soon :)</h2>
  </section>
);

export default MessageFeed;
