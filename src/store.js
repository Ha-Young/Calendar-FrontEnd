import { applyMiddleware,createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from "redux-logger";

import reducer from "./reducers";

const middleware = [];

if (process.env.NODE_ENV !== "production") {
  middleware.push(createLogger());
}

export default createStore(reducer, composeWithDevTools(applyMiddleware(...middleware)));
