import * as types from "../constants/actionTypes";

let nextTodoId = 0

export const selectDay = date => ({
  type: types.SELECT_DAY,
  payload: {
    selectedDate: date,
  },
})
