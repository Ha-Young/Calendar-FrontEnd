/*

  Action Creators

  ref: https://github.com/reduxjs/redux/blob/master/examples/shopping-cart/src/actions/index.js

 */

export const addEvent = (eventInfo) => {
  return {
    type: "ADD_EVENT",
    eventInfo
  }
}
