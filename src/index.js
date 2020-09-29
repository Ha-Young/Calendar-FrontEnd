import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  // HashRouter as Router
} from "react-router-dom";
import AppContainer from "./containers/AppContainer/AppContainer";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";

// middleware?
// example
// const middleware = [];

// if (process.env.NODE_ENV !== "production") {
//   middleware.push(createLogger());
// }

// const store = createStore(reducer, applyMiddleware(...middleware));

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <AppContainer />
    </Router>
  </Provider>,
  document.getElementById("root")
);
