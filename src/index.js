import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  // HashRouter as Router
} from 'react-router-dom';
import { Provider } from 'react-redux';
import AppContainer from './containers/AppContainer';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <AppContainer />
    </Router>,
  </Provider>,
  document.getElementById('root')
);
