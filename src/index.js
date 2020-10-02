import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './components/App/App';
import reducers from './reducers/';
import { loggerMiddleware } from './Logermiddleware';

ReactDOM.render(
  <Provider store={createStore(reducers, applyMiddleware(loggerMiddleware))}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'));
