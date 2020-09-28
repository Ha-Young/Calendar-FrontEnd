import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  // HashRouter as Router
} from 'react-router-dom';
import App from './components/App/App';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
