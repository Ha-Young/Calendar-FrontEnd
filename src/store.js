import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import logger from 'redux-logger';

// 상태 하나당 리듀서 하나..
// 컨테이너 하나당 상태 하나..

const store = createStore(rootReducer, applyMiddleware(logger));

export default store;
