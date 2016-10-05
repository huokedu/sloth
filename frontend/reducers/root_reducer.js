import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ErrorReducer from './error_reducer';
import ChannelReducer from './channel_reducer';

const RootReducer = combineReducers({
  currentUser: SessionReducer,
  errors: ErrorReducer,
  channels: ChannelReducer,
});

export default RootReducer;
