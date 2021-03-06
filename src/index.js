import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension"
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
} from "react-router-dom";
import App from "../src/components/App";
import allReducers from "./reducers";

const middleware = [];

if (process.env.NODE_ENV !== "production") {
  middleware.push(createLogger());
}

const store = createStore(allReducers,
  composeWithDevTools(applyMiddleware(...middleware))
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
