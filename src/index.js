import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { createLogger } from "redux-logger";
import reducer from "./reducers";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  // HashRouter as Router
} from "react-router-dom";
import { composeWithDevTools } from "redux-devtools-extension";
import App from "./containers/AppContainer";

const middleware = [];

if (process.env.NODE_ENV !== "production") {
  middleware.push(createLogger());
}

const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middleware)));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
