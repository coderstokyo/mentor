import { combineReducers } from 'redux';
import { mentorReducer } from './containers';

export default combineReducers({
  mentor: mentorReducer
});
