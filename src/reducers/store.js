import { createStore, applyMiddleware } from 'redux';
import reducer from 'reducers/reducers';
import { createLogger } from "redux-logger";

const middleware = [];
middleware.push(createLogger());

export default createStore(reducer, applyMiddleware(...middleware));
