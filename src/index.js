import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { createLogger } from "redux-logger";
import reducer from "./reducers";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router, HashRouter,
  // HashRouter as Router
} from "react-router-dom";
import App from "./containers/App";

const middleware = [];

if (process.env.NODE_ENV !== "production") {
  middleware.push(createLogger());
}

const store = createStore(reducer, applyMiddleware(...middleware));

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById("root")
);
