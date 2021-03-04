/*

  Action Creators

  ref: https://github.com/reduxjs/redux/blob/master/examples/shopping-cart/src/actions/index.js

 */
import { ON_SUBMIT, CLICK_LEFT, CLICK_RIGHT } from "../constants/actionTypes";

export const submitData = (key, event) => (
  {
    type: ON_SUBMIT,
    key: key,
    event: event
  });


export const handleClickLeft = () => (
  {
   type: CLICK_LEFT, 
  });


export const handleClickRight = () => (
  {
   type: CLICK_RIGHT, 
  });
