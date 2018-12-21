import { combineReducers } from 'redux';

import authReducer from './authReducer';
import challengeReducer from './challengeReducer';
export default combineReducers({
  authentification: authReducer,
  challenges : challengeReducer
});