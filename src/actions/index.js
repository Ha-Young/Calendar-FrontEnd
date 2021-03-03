import * as types from "../constants/actionTypes";

/*

  Action Creators

  ref: https://github.com/reduxjs/redux/blob/master/examples/shopping-cart/src/actions/index.js

 */

export const changeToDailyMode = () => ({
  type: types.CHANGE_DAILY_MODE,
});

export const changeToWeeklyMode = () => ({
  type: types.CHANGE_WEEKLY_MODE,
});

export const goPrevDate = () => ({
  type: types.GO_PREV_DATE,
});

export const goNextDate = () => ({
  type: types.GO_NEXT_DATE,
});

export const goLastWeek = () => ({
  type: types.GO_LAST_WEEK,
});

export const goNextWeek = () => ({
  type: types.GO_NEXT_WEEK,
})
