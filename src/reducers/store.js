import { createStore, applyMiddleware } from 'redux';
import { createLogger } from "redux-logger";
import reducer from 'reducers/reducers';

const middleware = [];
middleware.push(createLogger());

export default createStore(reducer, applyMiddleware(...middleware));
