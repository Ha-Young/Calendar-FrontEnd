import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension"
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  // HashRouter as Router
} from "react-router-dom";
import AppContainer from "./containers/AppContainer";
import DateControlReducer from "./reducers/DateControlReducer";

const middleware = [];

if (process.env.NODE_ENV !== "production") {
  middleware.push(createLogger());
}

const store = createStore(DateControlReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <AppContainer />
    </Router>
  </Provider>,
  document.getElementById("root")
);
