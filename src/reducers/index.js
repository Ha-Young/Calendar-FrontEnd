import React from "react"
import { combineReducers } from 'redux';

const loginReducer = () => {
  return [
    { title: "hello"},
  ];
};

const nextDayReducer = (state=null, action) => {
  if (action.type === "LOG_IN") {
    return action.payload;
  }

  return state;
}

export default combineReducers({
  login: loginReducer,
  checkLogIn: nextDayReducer,
})