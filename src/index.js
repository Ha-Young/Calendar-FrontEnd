import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  // HashRouter as Router
} from 'react-router-dom';
import App from './components/App/App';
import "./styles.css";
import store from "./store";
import { Provider } from "react-redux";


const rootElement = document.getElementById('root');

ReactDOM.render(
  // <Provider >
    <Router>
      <App />
    </Router>
  // </Provider>
, rootElement);

