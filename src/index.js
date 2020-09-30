import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  // HashRouter as Router
} from 'react-router-dom';
import App from './components/App/App';
import rootReducer from './reducers';
import { createLogger } from 'redux-logger';

const reduxLogger = createLogger();
const store = createStore(rootReducer, applyMiddleware(reduxLogger));

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>, document.getElementById('root')
);
