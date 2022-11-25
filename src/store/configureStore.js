import {createStore, applyMiddleware, compose} from 'redux';

import combineReducers from './combineReducers';
import thunk from 'redux-thunk';

const usedState = {};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    combineReducers,
  usedState,
  composeEnhancers(applyMiddleware(thunk)),
);
export const originalState = usedState;