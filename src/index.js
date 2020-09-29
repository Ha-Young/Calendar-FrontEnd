import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {
  BrowserRouter as Router,
  // HashRouter as Router
} from 'react-router-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './reducers/index';
import AppContainer from './containers/AppContainer';

const store = createStore(rootReducer);



ReactDOM.render(
  <Provider store={store}>
    <Router>
      <AppContainer />
    </Router>
  </Provider>,
  document.getElementById('root')
);
