
import { applyMiddleware, createStore } from 'redux';
import createLogger from 'redux-logger';
import { createMiddleware, History } from 'redux-routing';

import * as reducers from './reducers';
import { initialState } from './initialState';

const history = createMiddleware(History);
const logger = createLogger();

const createReducers = (firstState, reducerMap) => (state = firstState, action) => {
  const reducer = reducerMap[action.type];
  if (typeof reducer === 'undefined') return state;
  return reducer(state, action);
};

const reducerMap = {
  '@@redux-routing/navigate': reducers.routeReducer,
  '@@redux-routing/replace': reducers.routeReducer,
};

const applyReducers = createReducers(initialState, reducerMap);

export const store = createStore(applyReducers, applyMiddleware(
  history,
  logger
));
