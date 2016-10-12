import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import ChannelMiddleware from './channel_middleware';
import MessageMiddleware from './message_middleware';
import UserMiddleware from './user_middleware';
import CreateLogger from 'redux-logger';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  ChannelMiddleware,
  MessageMiddleware,
  UserMiddleware
);

export default RootMiddleware;
