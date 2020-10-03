import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';

import rootReducer from './reducers/rootReducer';

const middleware = [];

export default createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));
