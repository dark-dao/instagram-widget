import React from 'react';
import { hydrate, render } from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import './index.css';

import Router from './router';
import registerServiceWorker from './registerServiceWorker';
import { store, history } from './redux-module';

// import { createStore, combineReducers, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
//
// const store = createStore(
//  applyMiddleware(thunk)
// );

hydrate(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Router />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
