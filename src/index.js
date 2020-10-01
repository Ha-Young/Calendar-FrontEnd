import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import createStore from '../src/store';
import App from './components/App/App';
import store from '../src/store';

ReactDOM.render(
  <Provider store={store}>
    <Router>
        <App />
    </Router>
  </Provider>
  ,
  document.getElementById('root')
);
