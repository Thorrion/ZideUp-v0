import { combineReducers } from 'redux';

import challengeReducer from './challengeReducer';
import categoriesReducer from './categoriesReducer';

export default combineReducers({
  challenges : challengeReducer,
  categories: categoriesReducer
});