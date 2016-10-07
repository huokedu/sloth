import React from 'react';

const Message = ({ message }) => (
  <li className="message-item">
    <h3 className="message-username">{message.author.username}</h3>
    <span className="message-time">{message.created_at}</span>
    <p className="message-body">{message.body}</p>
  </li>
);

export default Message;
