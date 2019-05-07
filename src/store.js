/**
 * Creact redux store.
 */

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import { createLogger } from 'redux-logger';

import allReducers from './reducers';

var middlewares = [];
middlewares.push(thunk);
middlewares.push(promise);

/**
 * If project is in production environment,
 * it won't show logger middleware.
 */
if (process.env.NODE_ENV !== 'production') {
  const logger = createLogger({
    collapsed: true
  });
  middlewares.push(logger);
}

const store = createStore(allReducers, applyMiddleware(...middlewares));

export default store;
