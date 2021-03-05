/*

  Action Creators

  ref: https://github.com/reduxjs/redux/blob/master/examples/shopping-cart/src/actions/index.js

 */
import { ON_INITIAL_LOAD, ON_SUBMIT, CLICK_LEFT, CLICK_RIGHT, SET_SELECTED_EVENT } from "../constants/actionTypes";

export const onInitialLoad = (allEvent) => (
  {
    type: ON_INITIAL_LOAD,
    events: allEvent,
  }
)

export const submitData = (key, event) => (
  {
    type: ON_SUBMIT,
    key: key,
    event: event
  });

export const handleClickLeft = (value) => (
  {
   type: CLICK_LEFT, 
   value: value
  });

export const handleClickRight = (value) => (
  {
   type: CLICK_RIGHT, 
   value: value
  });

export const handleClickEvent = (event) => (
  {
    type: SET_SELECTED_EVENT,
    selectedEvent: event,
  }
)
