import { combineReducers } from 'redux';
import { mentorReducer } from './app/containers';

export default combineReducers({
  mentor: mentorReducer
});
