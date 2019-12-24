import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import reduxPromise from 'redux-promise';

import reposReducer from '../reducers/repos_reducer.js';

import App from './containers/app.jsx';

const root = document.getElementById('moodwork');

const initialState = {
  githubuser: null,
  repos: []
}

const reducers = combineReducers({
  repos: reposReducer,
  githubuser: (state = null, action) => state
});

const middlewares = composeEnhancers(applyMiddleware(reduxPromise));
const store = createStore(reducers, initialState, middlewares);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
root);
