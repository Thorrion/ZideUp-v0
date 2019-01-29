import { createStore, applyMiddleware, compose } from 'redux';
import { persistReducer } from 'redux-persist'
import LocalStorage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import allReducer from './reducers';

const persistConfig = {
  key: 'XxXxX-XxXxX-XxXxxXh',
  storage: LocalStorage,
}

const persistedReducer = persistReducer(persistConfig, allReducer)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk, logger))
);