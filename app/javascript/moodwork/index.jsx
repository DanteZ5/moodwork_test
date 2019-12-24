import React from 'react';
import ReactDOM from 'react-dom';
import reduxThunk from 'redux-thunk';

import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import reduxPromise from 'redux-promise';

import reposReducer from './reducers/repos_reducer.js';
import avatarReducer from './reducers/avatar_reducer.js';

import App from './containers/app.jsx';

const root = document.getElementById('moodwork');

const initialState = {
  avatar: "https://i.pinimg.com/originals/06/cb/1f/06cb1f6054c686a31fadfb621468a68c.png",
  repos: []
}

const reducers = combineReducers({
  repos: reposReducer,
  avatar: avatarReducer
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = composeEnhancers(applyMiddleware(reduxPromise, reduxThunk));
const store = createStore(reducers, initialState, middlewares);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
root);
