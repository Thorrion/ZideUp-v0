import { combineReducers } from 'redux';

import authReducer from './authReducer';
import challengeReducer from './challengeReducer';
import ideaReducer from './ideaReducer';
import chipsReducer from './chipsReducer';

export default combineReducers({
  authentification: authReducer,
  challenges : challengeReducer,
  ideas: ideaReducer,
  chips: chipsReducer
});