import React from 'react';

const Message = ({ message }) => (
  <li>
    <h3 className="message-username">{message.author.username}</h3>
    <p className="message-body">{message.body}</p>
  </li>
);

export default Message;
